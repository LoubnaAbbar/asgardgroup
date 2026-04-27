import type { Metadata } from "next";
import Link from "next/link";
import styles from "../rse.module.css";

export const metadata: Metadata = {
  title: "Prévention — Engagement RSE",
  description:
    "Maîtrise des fluides, prévention des déversements, gestion des nuisances en site occupé : notre politique de prévention.",
};

export default function PreventionPage() {
  return (
    <main className={styles.rse}>
      {/* Fil d'Ariane */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link href="/rse">RSE</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>Prévention</span>
          </nav>
        </div>
      </div>

      {/* Hero page */}
      <section className={styles.subHero}>
        <div className={styles.container}>
          <div className={styles.subHeroBadge}>Pilier 03</div>
          <div className={styles.tag}>Prévention des pollutions</div>
          <h1>
            Maîtrise des <em>risques</em> sur site
          </h1>
          <p className={styles.heroDesc}>
            Parce que nos interventions se déroulent majoritairement en site
            occupé, nous déployons des mesures strictes pour prévenir les
            pollutions, protéger les usagers et limiter les nuisances.
          </p>
        </div>
      </section>

      {/* 08 — Actions de prévention */}
      <section className={styles.bloc}>
        <div className={styles.container}>
          <div className={styles.blocHeader}>
            <div className={styles.blocNum}>08</div>
            <div>
              <div className={styles.sectionLabel}>Actions sur chantier</div>
              <h2 className={styles.sectionTitle}>
                Nos <em>procédures</em> de prévention
              </h2>
            </div>
          </div>

          <div className={styles.actionsGrid}>
            <div className={styles.actionCard}>
              <strong>Maîtrise des fluides</strong>
              <span>
                Procédures de consignation et vérification systématique avant
                intervention sur les réseaux hydrauliques et aérauliques.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Prévention des déversements</strong>
              <span>
                Bacs de rétention, kits antipollution et formation des équipes
                à la gestion d’un incident.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Gestion des nuisances</strong>
              <span>
                Organisation des interventions bruyantes hors heures
                d’occupation et protection des zones voisines.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Propreté du site</strong>
              <span>
                Nettoyage quotidien, protection des sols et des équipements
                adjacents, tri des déchets dès la source.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — Protocole site occupé */}
      <section className={`${styles.bloc} ${styles.blocAlt}`}>
        <div className={styles.container}>
          <div className={styles.blocHeader}>
            <div className={styles.blocNum}>09</div>
            <div>
              <div className={styles.sectionLabel}>Site occupé</div>
              <h2 className={styles.sectionTitle}>
                Respect des <em>usagers</em>
              </h2>
            </div>
          </div>

          <p className={styles.blocIntro}>
            Intervenir en site occupé impose une rigueur supplémentaire.
            Nos équipes sont formées à un protocole strict garantissant la
            continuité d’activité de nos clients et le confort de leurs
            usagers.
          </p>

          <div className={styles.miniCards}>
            <div className={styles.miniCard}>
              <strong>Planning concerté</strong>
              <span>
                Créneaux d’intervention définis avec le client pour limiter
                l’impact sur l’activité.
              </span>
            </div>
            <div className={styles.miniCard}>
              <strong>Balisage</strong>
              <span>
                Zones d’intervention clairement signalées et sécurisées en
                permanence.
              </span>
            </div>
            <div className={styles.miniCard}>
              <strong>Communication</strong>
              <span>
                Information préalable des usagers et affichage des consignes
                temporaires.
              </span>
            </div>
            <div className={styles.miniCard}>
              <strong>Remise en état</strong>
              <span>
                Nettoyage et remise en configuration d’origine à la fin de
                chaque journée d’intervention.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation entre piliers */}
      <section className={styles.pilierNav}>
        <div className={styles.container}>
          <div className={styles.pilierNavGrid}>
            <Link href="/rse/societal" className={styles.pilierNavBack}>
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
              <div>
                <div className={styles.pilierNavLabel}>Pilier précédent</div>
                <div className={styles.pilierNavTitle}>Engagement sociétal</div>
              </div>
            </Link>
            <Link href="/rse" className={styles.pilierNavNext}>
              <div>
                <div className={styles.pilierNavLabel}>Retour</div>
                <div className={styles.pilierNavTitle}>Page RSE</div>
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
