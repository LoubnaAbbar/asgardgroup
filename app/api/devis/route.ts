import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const PRESTATION_LABELS: Record<string, string> = {
  cvc: "Génie Climatique",
  froid: "Froid & Climatisation",
  elec: "Génie Électrique",
  plomb: "Plomberie & Réseaux",
  archi: "Travaux Architecturaux",
  maint: "Maintenance & Exploitation",
  ingenierie: "Ingénierie & Conseil",
  ao: "Appel d'offres",
};

const TYPE_SITE_LABELS: Record<string, string> = {
  tertiaire_prive: "Tertiaire privé",
  industrie: "Industrie & Logistique",
  sante_social: "Santé & Médico-social",
  enseignement: "Enseignement & Recherche",
  collectivite: "Collectivité territoriale",
  etat: "Bâtiment de l'État",
  particulier: "Particulier / Copropriété",
  autre: "Autre",
};

export async function POST(req: Request) {
  try {
    // ── Lecture multipart/form-data ──────────────────────────────────────────
    const form = await req.formData();

    const prestationsRaw = form.get("prestations") as string | null;
    const prestations: string[] = prestationsRaw ? JSON.parse(prestationsRaw) : [];

    const nom         = (form.get("nom")         as string) ?? "";
    const societe     = (form.get("societe")     as string) ?? "";
    const email       = (form.get("email")       as string) ?? "";
    const telephone   = (form.get("telephone")   as string) ?? "";
    const localisation= (form.get("localisation")as string) ?? "";
    const delai       = (form.get("delai")       as string) ?? "";
    const typeSite    = (form.get("typeSite")    as string) ?? "";
    const description = (form.get("description") as string) ?? "";
    const comment     = (form.get("comment")     as string) ?? "";
    const fichiers    = form.getAll("fichiers") as File[];

    // ── Validation minimale ──────────────────────────────────────────────────
    if (!nom || !email || prestations.length === 0) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    const to   = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { error: "Variables d'environnement manquantes." },
        { status: 500 }
      );
    }

    // ── Formatage ────────────────────────────────────────────────────────────
    const prestationsTexte = prestations
      .map((id) => PRESTATION_LABELS[id] ?? id)
      .join(", ");

    const typeSiteTexte = (TYPE_SITE_LABELS[typeSite] ?? typeSite) || "Non renseigné";

    // ── Pièces jointes → base64 pour Resend ─────────────────────────────────
    const attachments = await Promise.all(
      fichiers
        .filter((f) => f.size > 0)
        .map(async (f) => {
          const buffer = await f.arrayBuffer();
          return {
            filename: f.name,
            content: Buffer.from(buffer).toString("base64"),
          };
        })
    );

    // ── Envoi email ──────────────────────────────────────────────────────────
    const data = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${nom}`,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1a1a2e; max-width: 640px;">
          <h2 style="color: #0ea5e9; margin-bottom: 1.5rem;">Nouvelle demande de devis</h2>

          <h3 style="border-bottom: 1px solid #e5e7eb; padding-bottom: 0.4rem;">Contact</h3>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Société :</strong> ${societe || "Non renseignée"}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
          <p><strong>Comment nous a trouvés :</strong> ${comment || "Non renseigné"}</p>

          <h3 style="border-bottom: 1px solid #e5e7eb; padding-bottom: 0.4rem; margin-top: 1.5rem;">Projet</h3>
          <p><strong>Prestations :</strong> ${prestationsTexte}</p>
          <p><strong>Localisation du chantier :</strong> ${localisation || "Non renseignée"}</p>
          <p><strong>Type de site / Maître d'ouvrage :</strong> ${typeSiteTexte}</p>
          <p><strong>Échéance :</strong> ${delai || "Non définie"}</p>
          ${attachments.length > 0 ? `<p><strong>Pièces jointes :</strong> ${attachments.map((a) => a.filename).join(", ")}</p>` : ""}

          <h3 style="border-bottom: 1px solid #e5e7eb; padding-bottom: 0.4rem; margin-top: 1.5rem;">Description</h3>
          <p>${(description || "Non renseignée").replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur API devis :", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de l'envoi du devis." },
      { status: 500 }
    );
  }
}
