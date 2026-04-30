import type { Metadata } from "next";
import styles from "./politique-de-confidentialite.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité | ASGARD GROUP",
  description:
    "Politique de confidentialité d'ASGARD GROUP SAS — traitement des données personnelles conformément au RGPD.",
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className={styles.legal}>
      <div className={styles.container}>
        {/* ═══════════════ EN-TÊTE ═══════════════ */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.tag}>Protection des données</div>
            <h1>
              Politique de <em>confidentialité</em>
            </h1>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>
              ASGARD GROUP SAS s’engage à protéger les données personnelles
              des utilisateurs de son site, conformément au RGPD et à la loi
              « Informatique et Libertés » du 6 janvier 1978 modifiée.
            </p>
            <div className={styles.meta}>
              <span><strong>Mise à jour&nbsp;:</strong> 30 avril 2026</span>
            </div>
          </div>
        </header>

        {/* ═══════════════ GRILLE PAYSAGE ═══════════════ */}
        <div className={styles.grid}>

          {/* ─── 1. Responsable du traitement ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>01</span>Responsable du traitement</h2>
            <ul className={styles.infoList}>
              <li><strong>Société&nbsp;:</strong> ASGARD GROUP SAS</li>
              <li><strong>Siège&nbsp;:</strong> 44 chemin de la fossette, 93220 Gagny</li>
              <li><strong>SIRET&nbsp;:</strong> 852 483 429 00035</li>
              <li><strong>Courriel&nbsp;:</strong> contact@asgard-group.com</li>
            </ul>
          </section>

          {/* ─── 2. Données collectées ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>02</span>Données collectées</h2>
            <p>
              Les données ne sont collectées que lorsque l’utilisateur les
              fournit volontairement via les formulaires du site&nbsp;:
            </p>
            <ul className={styles.bulletList}>
              <li>nom, prénom, fonction&nbsp;;</li>
              <li>adresse e-mail, numéro de téléphone&nbsp;;</li>
              <li>société et coordonnées professionnelles&nbsp;;</li>
              <li>contenu du message ou descriptif du projet&nbsp;;</li>
              <li>pièces jointes éventuelles (plans, cahier des charges).</li>
            </ul>
          </section>

          {/* ─── 3. Finalités ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>03</span>Finalités du traitement</h2>
            <p>Les données sont utilisées pour&nbsp;:</p>
            <ul className={styles.bulletList}>
              <li>répondre aux demandes adressées via le formulaire de contact&nbsp;;</li>
              <li>étudier les demandes de devis et établir des propositions&nbsp;;</li>
              <li>assurer la gestion de la relation commerciale&nbsp;;</li>
              <li>respecter les obligations légales et fiscales applicables.</li>
            </ul>
            <p className={styles.note}>
              Bases légales&nbsp;: exécution de mesures précontractuelles, exécution
              du contrat, obligation légale et intérêt légitime (art. 6 RGPD).
            </p>
          </section>

          {/* ─── 4. Destinataires ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>04</span>Destinataires</h2>
            <p>
              Les données sont destinées aux services internes habilités
              d’ASGARD GROUP. Elles peuvent être communiquées à des
              sous-traitants techniques (hébergeur, messagerie) agissant
              sur instruction et dans le respect du RGPD.
            </p>
            <p>
              <strong>Aucune donnée n’est cédée ni revendue</strong> à des tiers
              à des fins commerciales.
            </p>
          </section>

          {/* ─── 5. Conservation ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>05</span>Durée de conservation</h2>
            <ul className={styles.bulletList}>
              <li><strong>Demandes de contact&nbsp;:</strong> 3 ans à compter du dernier échange.</li>
              <li><strong>Devis et pièces associées&nbsp;:</strong> durée de la relation commerciale, puis archivage 5 ans.</li>
              <li><strong>Pièces comptables&nbsp;:</strong> 10 ans (art. L.123-22 du Code de commerce).</li>
            </ul>
          </section>

          {/* ─── 6. Sécurité ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>06</span>Sécurité</h2>
            <p>
              ASGARD GROUP met en œuvre les mesures techniques et
              organisationnelles appropriées pour garantir la sécurité,
              l’intégrité et la confidentialité des données&nbsp;: chiffrement
              des communications, contrôle d’accès, sauvegardes régulières.
            </p>
          </section>

          {/* ─── 7. Droits ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>07</span>Droits des utilisateurs</h2>
            <p>
              Conformément aux articles 15 à 22 du RGPD, vous disposez des
              droits suivants&nbsp;: accès, rectification, effacement, limitation,
              opposition, portabilité, retrait du consentement.
            </p>
            <p>
              Pour les exercer, adressez votre demande accompagnée d’un
              justificatif d’identité à&nbsp;:{" "}
              <span>contact@asgard-group.com</span>.
            </p>
            <p className={styles.note}>
              En cas de difficulté, vous pouvez introduire une réclamation
              auprès de la CNIL (www.cnil.fr).
            </p>
          </section>

          {/* ─── 8. Cookies ─── */}
          <section className={styles.section}>
            <h2><span className={styles.num}>08</span>Cookies</h2>
            <p>
              Le site est susceptible d’utiliser des cookies nécessaires à son
              fonctionnement. Les cookies non essentiels ne sont déposés
              qu’après recueil du consentement de l’utilisateur, qui peut le
              modifier à tout moment via les paramètres de son navigateur.
            </p>
          </section>

        </div>

        {/* ═══════════════ PIED ═══════════════ */}
        <footer className={styles.footer}>
          <p>
            ASGARD GROUP se réserve le droit de modifier la présente politique
            à tout moment afin de l’adapter aux évolutions légales et
            réglementaires. La version applicable est celle en vigueur à la
            date de consultation.
          </p>
        </footer>
      </div>
    </main>
  );
}