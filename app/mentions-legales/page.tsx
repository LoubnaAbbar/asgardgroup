import type { Metadata } from "next";
import styles from "./mentions-legales.module.css";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site : éditeur, directeur de la publication, hébergeur et informations obligatoires.",
};

export default function MentionsLegalesPage() {
  return (
    <main className={styles.legal}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.tag}>Informations légales</div>
          <h1>
            Mentions <em>légales</em>
          </h1>
          <p className={styles.subtitle}>
            Conformément aux dispositions des articles 6-III et 19 de la loi
            n° 2004-575 du 21 juin 2004 pour la Confiance dans l’économie
            numérique (LCEN), il est porté à la connaissance des utilisateurs
            du site les présentes mentions légales.
          </p>
        </header>

        <section className={styles.section}>
          <h2>1. Éditeur du site</h2>
          <p>Le présent site est édité par&nbsp;:</p>
          <ul className={styles.infoList}>
            <li>
              <strong>Raison sociale&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[RAISON SOCIALE — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Forme juridique&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[FORME JURIDIQUE — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Capital social&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[MONTANT DU CAPITAL SOCIAL — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Siège social&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[ADRESSE COMPLÈTE DU SIÈGE — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>SIREN&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[NUMÉRO SIREN — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>SIRET&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[NUMÉRO SIRET — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>RCS&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[VILLE D’IMMATRICULATION + NUMÉRO RCS — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>N° de TVA intracommunautaire&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[NUMÉRO DE TVA — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Téléphone&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[NUMÉRO DE TÉLÉPHONE — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Courriel&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[ADRESSE E-MAIL DE CONTACT — À COMPLÉTER]</span>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication du site, au sens de l’article 6-III
            de la LCEN, est le représentant légal de la société éditrice&nbsp;:
          </p>
          <ul className={styles.infoList}>
            <li>
              <strong>Nom et prénom&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[NOM ET PRÉNOM DU REPRÉSENTANT LÉGAL — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Qualité&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[FONCTION — À COMPLÉTER]</span>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Hébergeur du site</h2>
          <p>Le site est hébergé par&nbsp;:</p>
          <ul className={styles.infoList}>
            <li>
              <strong>Dénomination&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[NOM DE L’HÉBERGEUR — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Adresse&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[ADRESSE DE L’HÉBERGEUR — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Téléphone&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[TÉLÉPHONE DE L’HÉBERGEUR — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Site web&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[URL DE L’HÉBERGEUR — À COMPLÉTER]</span>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Propriété intellectuelle</h2>
          <p>
            L’ensemble des éléments figurant sur le présent site (textes,
            images, logos, graphismes, vidéos, icônes, sons, logiciels,
            structure, base de données) est protégé par le droit d’auteur, le
            droit des marques et, plus généralement, par les règles applicables
            en matière de propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            adaptation ou exploitation, totale ou partielle, de tout ou partie
            des éléments du site, quel que soit le moyen ou le procédé utilisé,
            est interdite, sauf autorisation écrite préalable de l’éditeur.
          </p>
          <p>
            Toute utilisation non autorisée du site ou de son contenu est
            susceptible d’engager la responsabilité civile et/ou pénale de son
            auteur.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Responsabilité</h2>
          <p>
            L’éditeur s’efforce d’assurer au mieux de ses possibilités
            l’exactitude et la mise à jour des informations diffusées sur le
            site. Il ne saurait toutefois garantir l’exhaustivité ou l’absence
            d’erreurs de ces informations, ni leur caractère exploitable.
          </p>
          <p>
            L’utilisateur reconnaît utiliser les informations et outils
            disponibles sur le site sous sa responsabilité exclusive. La
            responsabilité de l’éditeur ne saurait être engagée en cas de
            dommages directs ou indirects résultant de l’utilisation du site ou
            de l’impossibilité d’y accéder.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens hypertextes renvoyant vers des
            sites tiers. L’éditeur n’exerce aucun contrôle sur ces sites et
            décline toute responsabilité quant à leur contenu, leur disponibilité
            ou leurs pratiques en matière de protection des données personnelles.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français.
            En cas de litige et à défaut de résolution amiable, les tribunaux
            français seront seuls compétents.
          </p>
        </section>

        <p className={styles.updated}>
          Dernière mise à jour&nbsp;:{" "}
          <span className={styles.placeholder}>[DATE DE MISE À JOUR — À COMPLÉTER]</span>
        </p>
      </div>
    </main>
  );
}
