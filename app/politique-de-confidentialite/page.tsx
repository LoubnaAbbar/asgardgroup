import type { Metadata } from "next";
import styles from "./politique-de-confidentialite.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité : traitement des données personnelles collectées via les formulaires de contact et de demande de devis.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className={styles.legal}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.tag}>Protection des données</div>
          <h1>
            Politique de <em>confidentialité</em>
          </h1>
          <p className={styles.subtitle}>
            La présente politique de confidentialité a pour objet d’informer
            les utilisateurs du site sur la manière dont leurs données à
            caractère personnel sont collectées et traitées, conformément au
            Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi
            n° 78-17 du 6 janvier 1978 modifiée, dite « Informatique et
            Libertés ».
          </p>
        </header>

        <section className={styles.section}>
          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données à caractère personnel
            collectées sur le site est&nbsp;:
          </p>
          <ul className={styles.infoList}>
            <li>
              <strong>Raison sociale&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[RAISON SOCIALE — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Adresse&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[ADRESSE DU SIÈGE — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Courriel&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[ADRESSE E-MAIL DE CONTACT — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Téléphone&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[NUMÉRO DE TÉLÉPHONE — À COMPLÉTER]</span>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. Données collectées</h2>
          <p>
            Les données à caractère personnel sont collectées uniquement lorsque
            l’utilisateur les fournit volontairement, notamment via les
            formulaires présents sur le site.
          </p>

          <h3>2.1 Formulaire de contact</h3>
          <p>
            Dans le cadre du formulaire de contact, les données susceptibles
            d’être collectées sont&nbsp;:
          </p>
          <ul className={styles.bulletList}>
            <li>nom et prénom&nbsp;;</li>
            <li>adresse e-mail&nbsp;;</li>
            <li>numéro de téléphone (facultatif)&nbsp;;</li>
            <li>société (le cas échéant)&nbsp;;</li>
            <li>objet et contenu du message.</li>
          </ul>

          <h3>2.2 Formulaire de demande de devis</h3>
          <p>
            Dans le cadre d’une demande de devis, les données susceptibles
            d’être collectées sont&nbsp;:
          </p>
          <ul className={styles.bulletList}>
            <li>identité du demandeur (nom, prénom, fonction)&nbsp;;</li>
            <li>coordonnées professionnelles (société, adresse, e-mail, téléphone)&nbsp;;</li>
            <li>description du projet ou de la prestation sollicitée&nbsp;;</li>
            <li>
              pièces jointes éventuellement transmises par l’utilisateur
              (plans, cahier des charges, photographies, documents techniques,
              etc.).
            </li>
          </ul>
          <p>
            L’utilisateur est seul responsable du contenu des pièces jointes
            qu’il transmet et s’engage à ne communiquer aucune donnée sensible
            au sens de l’article 9 du RGPD, ni aucune donnée appartenant à des
            tiers sans leur autorisation préalable.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Finalités et bases légales du traitement</h2>
          <p>Les données collectées sont traitées aux finalités suivantes&nbsp;:</p>
          <ul className={styles.bulletList}>
            <li>
              répondre aux demandes d’information adressées via le formulaire
              de contact&nbsp;;
            </li>
            <li>
              étudier les demandes de devis, établir une proposition commerciale
              et, le cas échéant, exécuter la prestation&nbsp;;
            </li>
            <li>
              assurer la gestion de la relation commerciale et le suivi des
              échanges&nbsp;;
            </li>
            <li>
              se conformer aux obligations légales, réglementaires et fiscales
              applicables.
            </li>
          </ul>
          <p>Les bases légales du traitement sont&nbsp;:</p>
          <ul className={styles.bulletList}>
            <li>
              le consentement de l’utilisateur (article 6, §1, a) du RGPD), pour
              l’envoi volontaire du formulaire&nbsp;;
            </li>
            <li>
              l’exécution de mesures précontractuelles prises à la demande de
              l’utilisateur (article 6, §1, b) du RGPD), pour le traitement
              d’une demande de devis&nbsp;;
            </li>
            <li>
              le respect d’une obligation légale (article 6, §1, c) du RGPD),
              lorsque cela est requis&nbsp;;
            </li>
            <li>
              l’intérêt légitime du responsable du traitement (article 6, §1, f)
              du RGPD), pour la gestion de la relation commerciale.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Destinataires des données</h2>
          <p>
            Les données collectées sont destinées aux services internes
            habilités de l’éditeur chargés du traitement des demandes
            commerciales et techniques.
          </p>
          <p>
            Elles peuvent être transmises, dans la limite stricte de leurs
            attributions, à des sous-traitants techniques (hébergeur,
            prestataire de messagerie, éditeur d’outils de gestion), agissant
            sur instruction du responsable du traitement et dans le respect
            d’engagements contractuels de confidentialité conformes au RGPD.
          </p>
          <p>
            Aucune donnée n’est cédée, louée ou revendue à des tiers à des fins
            commerciales.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Durée de conservation</h2>
          <ul className={styles.bulletList}>
            <li>
              <strong>Demandes via le formulaire de contact&nbsp;:</strong>{" "}
              conservées pendant la durée nécessaire au traitement de la
              demande, puis archivées ou supprimées dans un délai maximal de
              trois (3) ans à compter du dernier contact.
            </li>
            <li>
              <strong>Demandes de devis et pièces jointes associées&nbsp;:</strong>{" "}
              conservées pendant la durée de la relation commerciale, puis
              archivées conformément aux obligations légales et fiscales
              applicables (notamment dix (10) ans pour les pièces comptables).
            </li>
            <li>
              <strong>Données traitées pour répondre à une obligation légale&nbsp;:</strong>{" "}
              conservées pendant la durée prévue par la réglementation
              applicable.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Sécurité</h2>
          <p>
            L’éditeur met en œuvre les mesures techniques et organisationnelles
            appropriées afin de garantir la sécurité, l’intégrité et la
            confidentialité des données personnelles collectées, et notamment
            de prévenir toute altération, perte ou accès non autorisé.
          </p>
          <p>
            Les pièces jointes transmises via le formulaire de devis sont
            conservées sur des serveurs sécurisés et leur accès est strictement
            limité aux personnes habilitées.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Droits des personnes concernées</h2>
          <p>
            Conformément au RGPD et à la loi « Informatique et Libertés »,
            l’utilisateur dispose, sur ses données à caractère personnel, des
            droits suivants&nbsp;:
          </p>
          <ul className={styles.bulletList}>
            <li>droit d’accès&nbsp;;</li>
            <li>droit de rectification&nbsp;;</li>
            <li>droit à l’effacement&nbsp;;</li>
            <li>droit à la limitation du traitement&nbsp;;</li>
            <li>droit d’opposition&nbsp;;</li>
            <li>droit à la portabilité des données&nbsp;;</li>
            <li>
              droit de définir des directives relatives au sort de ses données
              après son décès&nbsp;;
            </li>
            <li>droit de retirer son consentement à tout moment.</li>
          </ul>
          <p>
            Ces droits peuvent être exercés en adressant une demande, accompagnée
            d’un justificatif d’identité, à&nbsp;:
          </p>
          <ul className={styles.infoList}>
            <li>
              <strong>Par courriel&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[ADRESSE E-MAIL DÉDIÉE — À COMPLÉTER]</span>
            </li>
            <li>
              <strong>Par courrier postal&nbsp;:</strong>{" "}
              <span className={styles.placeholder}>[ADRESSE POSTALE — À COMPLÉTER]</span>
            </li>
          </ul>
          <p>
            L’utilisateur dispose également du droit d’introduire une
            réclamation auprès de la Commission nationale de l’informatique et
            des libertés (CNIL), 3 Place de Fontenoy, TSA 80715, 75334 Paris
            Cedex 07 — www.cnil.fr.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Cookies</h2>
          <p>
            Le site peut être amené à utiliser des cookies ou traceurs pour
            assurer son bon fonctionnement et, le cas échéant, mesurer son
            audience. L’utilisateur est informé de la présence éventuelle de
            ces cookies lors de sa première visite et peut, à tout moment,
            modifier ses préférences ou les désactiver via les paramètres de
            son navigateur.
          </p>
          <p className={styles.placeholder}>
            [PRÉCISER ICI LES COOKIES EFFECTIVEMENT UTILISÉS : NATURE, FINALITÉ,
            DURÉE DE CONSERVATION — À COMPLÉTER]
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Modification de la politique de confidentialité</h2>
          <p>
            L’éditeur se réserve le droit de modifier à tout moment la présente
            politique de confidentialité, notamment afin de l’adapter à toute
            évolution légale, réglementaire, jurisprudentielle ou technique.
            La version applicable est celle en vigueur à la date de consultation
            du site.
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
