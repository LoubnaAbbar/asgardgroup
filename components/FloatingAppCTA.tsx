"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./FloatingAppCTA.module.css";

export default function FloatingAppCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Apparaît avec un délai de 2 secondes (pour ne pas distraire au chargement)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Masquer le bouton sur la page /app elle-même (redondant)
  if (pathname === "/app") return null;

  // Masquer si l'utilisateur a fermé le bouton
  if (dismissed) return null;

  return (
    <Link
      href="/app"
      className={`${styles.cta} ${visible ? styles.visible : ""}`}
      aria-label="Découvrir l'application mobile ASGARD"
    >
      {/* Bouton fermer (croix) */}
      <button
        className={styles.closeButton}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDismissed(true);
        }}
        aria-label="Fermer"
      >
        ×
      </button>

      <div className={styles.icon}>
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2.5" ry="2.5" />
    <path d="M12 18h.01" />
  </svg>
</div>

      <div className={styles.textes}>
        <span className={styles.titre}>Notre app</span>
        <span className={styles.sousTitre}>Disponible bientôt</span>
      </div>

      <div className={styles.fleche}>→</div>
    </Link>
  );
}