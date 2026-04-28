import type { Metadata } from "next";
import Link from "next/link";
import styles from "./rse.module.css";

export const metadata: Metadata = {
  title: "Engagement RSE",
  description:
    "Notre politique RSE : environnement, engagement sociétal et prévention des pollutions.",
};

export default function RsePage() {
  return (
    <main className={styles.rse}>
      {/* ═══════════════════════════════════════════
          HERO — pas de reveal (au-dessus du pli)
          ═══════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.tag}>Responsabilité Sociétale</div>
          <h1>
            Notre engagement <em>RSE</em>
          </h1>
          <p className={styles.heroDesc}>
            Parce que chaque chantier est une opportunité d’agir, ASGARD Group
            inscrit son activité dans une démarche durable&nbsp;: réduire notre
            empreinte environnementale, favoriser l’inclusion par l’emploi et
            prévenir les risques pour nos équipes comme pour les sites que nous
            intervenons.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PILIERS (3 cartes d'entrée vers les sous-pages)
          ═══════════════════════════════════════════ */}
      <section className={styles.piliers}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal`}>
            <div className={styles.sectionLabel}>Nos trois piliers</div>
            <h2 className={styles.sectionTitle}>
              Une démarche <em>structurée</em>
            </h2>
            <p className={styles.sectionIntro}>
              Nos engagements s’articulent autour de trois axes
              complémentaires, déployés sur chaque chantier et intégrés à nos
              processus internes.
            </p>
          </div>

          <div className={styles.piliersGrid}>
            <Link
              href="/rse/environnement"
              className={`${styles.pilierCard} reveal`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className={styles.pilierIcon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 2v10l7 4" />
                  <path d="M7 12a5 5 0 0 1 10 0" />
                </svg>
              </div>
              <h3>Environnement</h3>
              <p>
                Réduction des émissions, économie circulaire et gestion
                rigoureuse des déchets de chantier.
              </p>
              <span className={styles.pilierArrow}>Découvrir →</span>
            </Link>

            <Link
              href="/rse/societal"
              className={`${styles.pilierCard} reveal`}
              style={{ transitionDelay: "120ms" }}
            >
              <div className={styles.pilierIcon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Engagement sociétal</h3>
              <p>
                Inclusion par l’emploi, santé et sécurité au travail, employeur
                de référence certifié en 2025.
              </p>
              <span className={styles.pilierArrow}>Découvrir →</span>
            </Link>

            <Link
              href="/rse/prevention"
              className={`${styles.pilierCard} reveal`}
              style={{ transitionDelay: "240ms" }}
            >
              <div className={styles.pilierIcon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Prévention</h3>
              <p>
                Maîtrise des fluides, prévention des déversements et gestion
                des nuisances en site occupé.
              </p>
              <span className={styles.pilierArrow}>Découvrir →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHIFFRES CLÉS
          ═══════════════════════════════════════════ */}
      <section className={styles.chiffres}>
        <div className={styles.container}>
          <div className={styles.chiffresGrid}>
            <div
              className={`${styles.chiffreItem} reveal`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className={styles.chiffreVal}>100%</div>
              <div className={styles.chiffreLabel}>
                des équipes engagées dans la démarche
              </div>
            </div>
            <div
              className={`${styles.chiffreItem} reveal`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className={styles.chiffreVal}>2025</div>
              <div className={styles.chiffreLabel}>
                Certification Employeur de Référence
              </div>
            </div>
            <div
              className={`${styles.chiffreItem} reveal`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className={styles.chiffreVal}>3</div>
              <div className={styles.chiffreLabel}>
                filières de valorisation des matériels
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════════════ */}
      <section className={`${styles.cta} reveal`}>
        <div className={styles.ctaInner}>
          <h2>
            Un projet à nous <em>confier</em>&nbsp;?
          </h2>
          <p>
            Nos équipes intègrent nos engagements RSE dès l’étude de votre
            projet. Discutons-en ensemble.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/devis" className="btn-primary">
              Demander un devis
            </Link>
            <Link href="/contact" className="btn-ghost">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
