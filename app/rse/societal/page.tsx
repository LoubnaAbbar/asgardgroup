import type { Metadata } from "next";
import Link from "next/link";
import styles from "../rse.module.css";

export const metadata: Metadata = {
  title: "Engagement sociétal — RSE",
  description:
    "Inclusion par l’emploi, santé et sécurité au travail, employeur de référence : notre engagement sociétal.",
};

export default function SocietalPage() {
  return (
    <main className={styles.rse}>
      {/* Fil d'Ariane */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link href="/rse">RSE</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>Engagement sociétal</span>
          </nav>
        </div>
      </div>

      {/* Hero page */}
      <section className={styles.subHero}>
        <div className={styles.container}>
          <div className={styles.subHeroBadge}>Pilier 02</div>
          <div className={styles.tag}>Engagement sociétal</div>
          <h1>
            Employeur de <em>référence</em>
          </h1>
          <p className={styles.heroDesc}>
            L’humain est au cœur de notre démarche. Santé et sécurité au
            travail, inclusion par l’emploi, développement des compétences&nbsp;:
            nos engagements font d’ASGARD Group un employeur reconnu.
          </p>
        </div>
      </section>

      {/* 05 — Certification & actions santé/sécurité */}
      <section className={styles.bloc}>
        <div className={styles.container}>
          <div className={styles.blocHeader}>
            <div className={styles.blocNum}>05</div>
            <div>
              <div className={styles.sectionLabel}>Santé & sécurité</div>
              <h2 className={styles.sectionTitle}>
                Une démarche <em>certifiée</em>
              </h2>
            </div>
          </div>

          <div className={styles.certifBanner}>
            <div className={styles.certifBadge}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div>
              <div className={styles.certifTitre}>
                Certification Employeur de Référence 2025
              </div>
              <p className={styles.certifDesc}>
                Obtenue sur le thème de la sécurité et de la santé au travail.
                ASGARD Group confie sa conformité à{" "}
                <strong>ChronoPrévention</strong>. Nos IPRP accrédités assurent
                le suivi réglementaire et l’amélioration continue.
              </p>
            </div>
          </div>

          <h3 className={styles.miniTitre}>Nos actions concrètes</h3>
          <div className={styles.actionsGrid}>
            <div className={styles.actionCard}>
              <strong>DUERP</strong>
              <span>
                Document Unique d’Évaluation des Risques Professionnels, mis à
                jour annuellement.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>PAPRIPACT</strong>
              <span>
                Programme annuel de prévention des risques et d’amélioration des
                conditions de travail.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Veille SQVT</strong>
              <span>
                Suivi de la Santé et Qualité de Vie au Travail tout au long de
                l’année.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Sensibilisation</strong>
              <span>
                Campagnes régulières sur les risques professionnels auprès de
                toutes les équipes.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Amélioration continue</strong>
              <span>
                Échanges avec des professionnels externes pour faire évoluer nos
                procédures.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Accompagnement dédié</strong>
              <span>
                Suivi individuel Santé, Sécurité et Qualité de Vie pour chaque
                collaborateur.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Inclusion par l'emploi */}
      <section className={`${styles.bloc} ${styles.blocAlt}`}>
        <div className={styles.container}>
          <div className={styles.blocHeader}>
            <div className={styles.blocNum}>06</div>
            <div>
              <div className={styles.sectionLabel}>Inclusion par l’emploi</div>
              <h2 className={styles.sectionTitle}>
                Une <em>mixité sociale</em> assumée
              </h2>
            </div>
          </div>

          <p className={styles.blocIntro}>
            Former, accompagner et recruter des personnes éloignées de
            l’emploi est un vecteur de mixité sociale. Les métiers de la
            construction offrent des perspectives de carrière à tous les
            profils, et ASGARD Group a choisi d’ancrer l’inclusion dans sa
            culture d’entreprise.
          </p>

          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <div className={styles.visionLabel}>Notre vision</div>
              <p>
                Faire de la diversité une source de richesse collective et
                d’innovation sur chacun de nos chantiers.
              </p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.visionLabel}>Notre objectif</div>
              <p>
                Recruter en contrat de longue durée des personnes éloignées de
                l’emploi parmi nos recrutements annuels.
              </p>
            </div>
          </div>

          <h4 className={styles.miniTitre}>Comment agissons-nous&nbsp;?</h4>
          <div className={styles.actionsGrid}>
            <div className={styles.actionCard}>
              <strong>Programmes d’insertion</strong>
              <span>
                Auprès de minorités locales socialement défavorisées.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Initiatives jeunesse</strong>
              <span>
                Ouverture des portes de l’entreprise aux jeunes de quartiers
                en difficulté ou zones isolées.
              </span>
            </div>
            <div className={styles.actionCard}>
              <strong>Partenariats</strong>
              <span>
                Coopération avec des structures dédiées aux parcours
                d’insertion et à l’emploi durable.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Publics concernés */}
      <section className={styles.bloc}>
        <div className={styles.container}>
          <div className={styles.blocHeader}>
            <div className={styles.blocNum}>07</div>
            <div>
              <div className={styles.sectionLabel}>Nos engagements</div>
              <h2 className={styles.sectionTitle}>
                Publics <em>concernés</em>
              </h2>
            </div>
          </div>

          <p className={styles.blocIntro}>
            Notre politique d’inclusion s’adresse prioritairement aux
            personnes les plus éloignées du marché du travail, dans une
            logique de long terme.
          </p>

          <div className={styles.publics}>
            <div className={styles.publicItem}>
              Chômeurs de longue durée (sans emploi depuis 12 mois et plus)
            </div>
            <div className={styles.publicItem}>
              Bénéficiaires de minima sociaux
            </div>
            <div className={styles.publicItem}>
              Chômeurs en situation de handicap
            </div>
            <div className={styles.publicItem}>
              Jeunes sans emploi et hors du système scolaire
            </div>
            <div className={styles.publicItem}>
              Personnes vivant en territoire fragile
            </div>
            <div className={styles.publicItem}>Parents isolés</div>
            <div className={styles.publicItem}>
              Personnes récemment arrivées en France et réfugiés
            </div>
            <div className={styles.publicItem}>
              Personnes sortant de prison ou sous main de justice
            </div>
          </div>
        </div>
      </section>

      {/* Navigation entre piliers */}
      <section className={styles.pilierNav}>
        <div className={styles.container}>
          <div className={styles.pilierNavGrid}>
            <Link href="/rse/environnement" className={styles.pilierNavBack}>
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
                <div className={styles.pilierNavTitle}>Environnement</div>
              </div>
            </Link>
            <Link href="/rse/prevention" className={styles.pilierNavNext}>
              <div>
                <div className={styles.pilierNavLabel}>Pilier suivant</div>
                <div className={styles.pilierNavTitle}>Prévention</div>
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
