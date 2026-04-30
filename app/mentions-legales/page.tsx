import type { Metadata } from "next";
import styles from "./mentions-legales.module.css";

export const metadata: Metadata = {
  title: "Mentions légales | ASGARD GROUP",
  description:
    "Mentions légales du site ASGARD GROUP SAS — éditeur, directeur de la publication, hébergeur et informations obligatoires.",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <main className={styles.legal}>
      <div className={styles.container}>
        {/* ═══════════════ EN-TÊTE ═══════════════ */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.tag}>Informations légales</div>
            <h1>
              Mentions <em>légales</em>
            </h1>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>
              Conformément aux dispositions des articles 6-III et 19 de la loi
              n° 2004-575 du 21 juin 2004 pour la Confiance dans l’économie
              numérique (LCEN), il est porté à la connaissance des utilisateurs
              du site les présentes mentions légales.
            </p>
            <div className={styles.meta}>
              <span><strong>Mise à jour&nbsp;:</strong> 30 avril 2026</span>
            </div>
          </div>
        </header>

        {/* ═══════════════ GRILLE PAYSAGE ═══════════════ */}
        <div className={styles.grid}>

          {/* ─── 1. Éditeur ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>01</span>Éditeur du site</h2>
            <ul className={styles.infoList}>
              <li><strong>Société&nbsp;:</strong> ASGARD GROUP SAS</li>
              <li><strong>Forme juridique&nbsp;:</strong> Société par actions simplifiée</li>
              <li><strong>Capital social&nbsp;:</strong> <span className={styles.placeholder}>[CAPITAL]</span></li>
              <li><strong>Siège social&nbsp;:</strong> <span className={styles.placeholder}>[ADRESSE]</span>, 93220 Gagny</li>
              <li><strong>SIRET&nbsp;:</strong> 852 483 429 00035</li>
              <li><strong>RCS&nbsp;:</strong> Bobigny <span className={styles.placeholder}>[N° RCS]</span></li>
              <li><strong>TVA intracommunautaire&nbsp;:</strong> <span className={styles.placeholder}>[N° TVA]</span></li>
              <li><strong>Téléphone&nbsp;:</strong> <span className={styles.placeholder}>[TÉLÉPHONE]</span></li>
              <li><strong>Courriel&nbsp;:</strong> <span className={styles.placeholder}>[E-MAIL]</span></li>
            </ul>
          </section>

          {/* ─── 2. Directeur de la publication ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>02</span>Directeur de la publication</h2>
            <p>
              Le directeur de la publication, au sens de l’article 6-III de la
              LCEN, est le représentant légal de la société éditrice.
            </p>
            <ul className={styles.infoList}>
              <li><strong>Nom et prénom&nbsp;:</strong> Monsieur Smaïl <span className={styles.placeholder}>[NOM]</span></li>
              <li><strong>Qualité&nbsp;:</strong> Président d’ASGARD GROUP SAS</li>
            </ul>
          </section>

          {/* ─── 3. Hébergeur ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>03</span>Hébergeur du site</h2>
            <p>Le site est hébergé par&nbsp;:</p>
            <ul className={styles.infoList}>
              <li><strong>Dénomination&nbsp;:</strong> <span className={styles.placeholder}>[NOM HÉBERGEUR]</span></li>
              <li><strong>Adresse&nbsp;:</strong> <span className={styles.placeholder}>[ADRESSE HÉBERGEUR]</span></li>
              <li><strong>Téléphone&nbsp;:</strong> <span className={styles.placeholder}>[TÉLÉPHONE]</span></li>
              <li><strong>Site web&nbsp;:</strong> <span className={styles.placeholder}>[URL]</span></li>
            </ul>
          </section>

          {/* ─── 4. Propriété intellectuelle ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>04</span>Propriété intellectuelle</h2>
            <p>
              L’ensemble des éléments figurant sur le site (textes, images,
              logos, graphismes, vidéos, structure, base de données) est protégé
              par le droit d’auteur et le droit des marques.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation,
              totale ou partielle, est interdite sauf autorisation écrite
              préalable d’ASGARD GROUP, sous peine d’engager la responsabilité
              civile et pénale de son auteur.
            </p>
          </section>

          {/* ─── 5. Responsabilité ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>05</span>Responsabilité</h2>
            <p>
              ASGARD GROUP s’efforce d’assurer l’exactitude et la mise à jour
              des informations diffusées sur le site, sans toutefois en garantir
              l’exhaustivité.
            </p>
            <p>
              L’utilisateur reconnaît utiliser ces informations sous sa
              responsabilité exclusive. ASGARD GROUP ne saurait être tenue
              responsable de dommages directs ou indirects résultant de
              l’utilisation du site ou de l’impossibilité d’y accéder.
            </p>
          </section>

          {/* ─── 6. Liens hypertextes ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>06</span>Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers sur lesquels
              ASGARD GROUP n’exerce aucun contrôle.
            </p>
            <p>
              ASGARD GROUP décline toute responsabilité quant au contenu, à la
              disponibilité ou aux pratiques de ces sites en matière de
              protection des données personnelles.
            </p>
          </section>

          {/* ─── 7. Droit applicable ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>07</span>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
            </p>
            <p>
              En cas de litige et à défaut de résolution amiable, les tribunaux
              français seront seuls compétents.
            </p>
          </section>

          {/* ─── 8. Contact ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>08</span>Contact</h2>
            <p>
              Pour toute question relative au site ou à son contenu, vous pouvez
              contacter ASGARD GROUP&nbsp;:
            </p>
            <ul className={styles.infoList}>
              <li><strong>Par e-mail&nbsp;:</strong> <span className={styles.placeholder}>[E-MAIL]</span></li>
              <li><strong>Par courrier&nbsp;:</strong> ASGARD GROUP SAS — <span className={styles.placeholder}>[ADRESSE]</span>, 93220 Gagny</li>
            </ul>
          </section>

        </div>

        {/* ═══════════════ PIED ═══════════════ */}
        <footer className={styles.footer}>
          <p>
            ASGARD GROUP se réserve le droit de modifier les présentes mentions
            légales à tout moment. La version applicable est celle en vigueur
            à la date de consultation.
          </p>
        </footer>
      </div>
    </main>
  );
}