import type { Metadata } from "next";
import Link from "next/link";
import styles from "../rse.module.css";

export const metadata: Metadata = {
  title: "Environnement — Engagement RSE",
  description:
    "Réduction des émissions, économie circulaire, gestion des déchets : découvrez notre politique environnementale.",
};

export default function EnvironnementPage() {
  return (
    <main className={styles.rse}>
      {/* Fil d'Ariane — pas de reveal */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link href="/rse">RSE</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>Environnement</span>
          </nav>
        </div>
      </div>

      {/* Hero page — pas de reveal (au-dessus du pli) */}
      <section className={styles.subHero}>
        <div className={styles.container}>
          <div className={styles.subHeroBadge}>Pilier 01</div>
          <div className={styles.tag}>Politique environnementale</div>
          <h1>
            Réduire notre <em>empreinte carbone</em>
          </h1>
          <p className={styles.heroDesc}>
            Parce que la transition énergétique passe aussi par nos chantiers,
            nous déployons une politique environnementale structurée autour de
            quatre axes&nbsp;: stratégie, mobilité, économie circulaire et
            gestion des déchets.
          </p>
        </div>
      </section>

      {/* 01 — Politique environnementale */}
      <section className={styles.bloc}>
        <div className={styles.container}>
          <div className={`${styles.blocHeader} reveal`}>
            <div className={styles.blocNum}>01</div>
            <div>
              <div className={styles.sectionLabel}>Axes stratégiques</div>
              <h2 className={styles.sectionTitle}>
                Objectifs et <em>stratégie</em>
              </h2>
            </div>
          </div>

          <div className={`${styles.dualCard} reveal`}>
            <div className={styles.dualCardCol}>
              <h3 className={styles.dualCardTitle}>Objectifs chiffrés</h3>
              <ul className={styles.checkList}>
                <li>Réduire les consommations d’énergie</li>
                <li>Réduire les émissions de gaz à effet de serre</li>
                <li>Réduire la production de déchets</li>
                <li>Être un acteur clé de la transition énergétique</li>
              </ul>
            </div>
            <div className={styles.dualCardCol}>
              <h3 className={styles.dualCardTitle}>Axes stratégiques</h3>
              <ul className={styles.checkList}>
                <li>Optimiser les performances énergétiques du site</li>
                <li>Prévenir et gérer les risques de pollution</li>
                <li>Engager 100 % des équipes dans les démarches</li>
                <li>Mesurer les rejets atmosphériques</li>
                <li>Déployer des équipements à faible consommation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Flotte propre */}
      <section className={`${styles.bloc} ${styles.blocAlt}`}>
        <div className={styles.container}>
          <div className={`${styles.blocHeader} reveal`}>
            <div className={styles.blocNum}>02</div>
            <div>
              <div className={styles.sectionLabel}>Mobilité</div>
              <h2 className={styles.sectionTitle}>
                Flotte automobile <em>propre</em>
              </h2>
            </div>
          </div>

          <p className={`${styles.blocIntro} reveal`}>
            ASGARD Group s’engage durablement sur une flotte de véhicules
            légers à faible émission de CO₂. L’acquisition de véhicules
            hybrides et électriques est en cours de déploiement, et les
            transports en commun ou le vélo sont privilégiés pour les courts
            trajets.
          </p>

          <div className={styles.miniCards}>
            <div
              className={`${styles.miniCard} reveal`}
              style={{ transitionDelay: "0ms" }}
            >
              <strong>Sélection des modèles</strong>
              <span>
                Meilleur coût global et limite d’émission de CO₂ fixée par
                catégorie.
              </span>
            </div>
            <div
              className={`${styles.miniCard} reveal`}
              style={{ transitionDelay: "100ms" }}
            >
              <strong>Conduite responsable</strong>
              <span>
                Respect du code de la route et écoconduite prodiguée à tous
                les collaborateurs.
              </span>
            </div>
            <div
              className={`${styles.miniCard} reveal`}
              style={{ transitionDelay: "200ms" }}
            >
              <strong>Mobilité douce</strong>
              <span>
                Transports en commun et vélo favorisés pour les courts
                trajets.
              </span>
            </div>
            <div
              className={`${styles.miniCard} reveal`}
              style={{ transitionDelay: "300ms" }}
            >
              <strong>Objectif</strong>
              <span>
                Réduire l’empreinte carbone liée aux déplacements
                professionnels.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Économie circulaire */}
      <section className={styles.bloc}>
        <div className={styles.container}>
          <div className={`${styles.blocHeader} reveal`}>
            <div className={styles.blocNum}>03</div>
            <div>
              <div className={styles.sectionLabel}>Économie circulaire</div>
              <h2 className={styles.sectionTitle}>
                Donner une <em>seconde vie</em> aux matériels
              </h2>
            </div>
          </div>

          <p className={`${styles.blocIntro} reveal`}>
            Notre démarche s’articule autour de deux axes&nbsp;: le réemploi
            des matériels via notre plateforme <strong>BeeWe</strong>, et le
            réemploi des matériaux en Île-de-France grâce à{" "}
            <strong>Mobius</strong>.
          </p>

          <h4 className={`${styles.filieresTitre} reveal`}>Trois filières de valorisation</h4>
          <div className={styles.filieres}>
            <div
              className={`${styles.filiere} reveal`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className={styles.filiereIcon}>€</div>
              <strong>La vente</strong>
              <span>
                À des entreprises spécialisées ou via des plateformes dédiées.
              </span>
            </div>
            <div
              className={`${styles.filiere} reveal`}
              style={{ transitionDelay: "120ms" }}
            >
              <div className={styles.filiereIcon}>❤</div>
              <strong>Le don</strong>
              <span>
                Après dépose, stockage organisé et planning de reprise.
              </span>
            </div>
            <div
              className={`${styles.filiere} reveal`}
              style={{ transitionDelay: "240ms" }}
            >
              <div className={styles.filiereIcon}>⇄</div>
              <strong>Le don collaboratif</strong>
              <span>
                Journées de dépose avant prise de possession — récupération
                encadrée.
              </span>
            </div>
          </div>

          <h4 className={`${styles.processTitre} reveal`}>Notre processus en 3 étapes</h4>
          <div className={styles.process}>
            <div
              className={`${styles.processStep} reveal`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className={styles.processStepNum}>1</div>
              <h5>Audit</h5>
              <ul>
                <li>Diagnostic lors de l’état des lieux</li>
                <li>Recensement du matériel à déposer</li>
                <li>Mise à jour du tableau de suivi</li>
                <li>Indication de la nature et de la marque</li>
              </ul>
            </div>
            <div
              className={`${styles.processStep} reveal`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className={styles.processStepNum}>2</div>
              <h5>Stock</h5>
              <ul>
                <li>Scénario 1&nbsp;: sur le site de dépose</li>
                <li>Scénario 2&nbsp;: sur un autre site client</li>
                <li>Scénario 3&nbsp;: site externe MOBIUS</li>
              </ul>
            </div>
            <div
              className={`${styles.processStep} reveal`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className={styles.processStepNum}>3</div>
              <h5>Réemploi</h5>
              <ul>
                <li>Vérification du fichier de suivi</li>
                <li>Si pièce présente → proposée au mainteneur</li>
                <li>Réemploi systématique avant achat neuf</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Gestion des déchets */}
      <section className={`${styles.bloc} ${styles.blocAlt}`}>
        <div className={styles.container}>
          <div className={`${styles.blocHeader} reveal`}>
            <div className={styles.blocNum}>04</div>
            <div>
              <div className={styles.sectionLabel}>Déchets de chantier</div>
              <h2 className={styles.sectionTitle}>
                Une gestion <em>rigoureuse</em>
              </h2>
            </div>
          </div>

          <div className={`${styles.dualCard} reveal`}>
            <div className={styles.dualCardCol}>
              <h3 className={styles.dualCardTitle}>Actions sur le site</h3>
              <ul className={styles.checkList}>
                <li>Réduire la production de déchets à la source</li>
                <li>Trier selon la nature des déchets</li>
                <li>Organiser la collecte et minimiser le transport</li>
                <li>Valoriser par recyclage ou incinération</li>
                <li>Communiquer en interne comme en externe</li>
              </ul>
            </div>
            <div className={styles.dualCardCol}>
              <h3 className={styles.dualCardTitle}>Objectifs visés</h3>
              <ul className={styles.checkList}>
                <li>Respecter la réglementation en vigueur</li>
                <li>Protéger l’environnement</li>
                <li>Réduire les coûts liés aux déchets</li>
                <li>Valoriser l’image de l’entreprise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation entre piliers */}
      <section className={styles.pilierNav}>
        <div className={styles.container}>
          <div className={`${styles.pilierNavGrid} reveal`}>
            <Link href="/rse" className={styles.pilierNavBack}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Retour à la RSE
            </Link>
            <Link href="/rse/societal" className={styles.pilierNavNext}>
              <div>
                <div className={styles.pilierNavLabel}>Pilier suivant</div>
                <div className={styles.pilierNavTitle}>Engagement sociétal</div>
              </div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
