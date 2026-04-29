"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./app.module.css";

export default function AppPage() {
  return (
    <main className={styles.main}>
      {/* ═══ BREADCRUMB ═══ */}
      <nav className={styles.breadcrumb}>
        <Link href="/">Accueil</Link>
        <span>›</span>
        <span>Application mobile</span>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className={`${styles.hero} reveal`}>
        <div className={styles.heroContent}>
          
          <h1 className={styles.heroTitle}>
            L'app ASGARD <br />
            <span className={styles.heroAccent}>dans votre poche</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Demandez un devis, joignez des photos terrain, contactez nos équipes
            en quelques secondes. Disponible sur iPhone et Android.
          </p>

          <div className={styles.heroButtons}>
            <a
              className={`${styles.storeButton} ${styles.storeAndroid}`}
              href="#"
              aria-label="Bientôt sur Google Play"
            >
              <span className={styles.storeButtonSubtitle}>Bientôt sur</span>
              <span className={styles.storeButtonTitle}>Google Play</span>
            </a>
            <a
              className={`${styles.storeButton} ${styles.storeIos}`}
              href="#"
              aria-label="Bientôt sur l'App Store"
            >
              <span className={styles.storeButtonSubtitle}>Bientôt sur</span>
              <span className={styles.storeButtonTitle}>App Store</span>
            </a>
          </div>

          <p className={styles.heroFootnote}>
            ✓ Gratuit &nbsp;·&nbsp; ✓ Sans inscription &nbsp;·&nbsp; ✓ Sécurisé
          </p>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.phoneFrame}>
            <Image
              src="/images/app.png"
              alt="Écran d'accueil de l'application ASGARD"
              width={300}
              height={650}
              priority
              className={styles.phoneScreenshot}
            />
          </div>
        </div>
      </section>

      {/* ═══ FONCTIONNALITÉS ═══ */}
      <section className={`${styles.features} reveal`}>
        <h2 className={styles.sectionTitle}>Pourquoi installer l'app ASGARD ?</h2>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Réactivité maximale</h3>
            <p>
              Demandez un devis en moins d'une minute. Notre équipe vous répond
              sous 48h ouvrées.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📸</div>
            <h3>Photos terrain</h3>
            <p>
              Joignez jusqu'à 5 photos de vos installations directement depuis le
              chantier pour un devis ultra-précis.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📞</div>
            <h3>Contact direct</h3>
            <p>
              Un bouton d'appel direct vers nos équipes. Pour vos urgences ou
              questions techniques.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📋</div>
            <h3>7 expertises ASGARD</h3>
            <p>
              Découvrez l'ensemble de nos prestations multi-techniques :
              CVC, électricité, plomberie, maintenance...
            </p>
          </div>
        </div>
      </section>



      {/* ═══ FAQ ═══ */}
      <section className={`${styles.faq} reveal`}>
        <h2 className={styles.sectionTitle}>Questions fréquentes</h2>

        <div className={styles.faqItem}>
          <h3>L'application est-elle gratuite ?</h3>
          <p>
            Oui, totalement gratuite. Aucune inscription requise, aucun
            abonnement, aucun achat in-app.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Sur quelles plateformes est-elle disponible ?</h3>
          <p>
            Sur iPhone (App Store) et Android (Google Play). Une version est
            également disponible directement depuis ce site web (PWA).
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Mes données sont-elles protégées ?</h3>
          <p>
            Toutes les données transitent en HTTPS via une infrastructure
            sécurisée hébergée en Europe. Aucune donnée n'est revendue à des
            tiers.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Puis-je l'utiliser pour un projet ponctuel ?</h3>
          <p>
            Bien sûr. L'app est conçue aussi bien pour des demandes ponctuelles
            que pour des relations de long terme.
          </p>
        </div>
      </section>
    </main>
  );
}