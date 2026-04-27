import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // ── Vérification de la clé API Resend (au runtime, pas au build) ────────
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY manquante");
      return NextResponse.json(
        { error: "Configuration serveur manquante (RESEND_API_KEY)." },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, company, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { error: "Variables d'environnement manquantes." },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouveau message ASGARD Group - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nouveau message depuis le site ASGARD Group</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Société :</strong> ${company || "Non renseignée"}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Prestation :</strong> ${service}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur API contact :", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}