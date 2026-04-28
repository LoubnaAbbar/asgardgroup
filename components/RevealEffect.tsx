"use client";

import { useEffect } from "react";

/**
 * Composant global d'animation au scroll.
 * À placer une seule fois dans le layout racine.
 *
 * Toute balise avec className="reveal" recevra automatiquement
 * className="visible" quand elle entre dans le viewport.
 *
 * Robustesse :
 * - Détecte les éléments .reveal ajoutés dynamiquement (ex: sections lazy)
 * - Ne se déconnecte qu'au démontage du composant
 * - Une fois un élément révélé, on arrête de l'observer (économie CPU)
 * - Threshold adaptable selon hauteur de l'élément (les très grandes sections
 *   se révèlent dès qu'on en voit ~80px, pas à 10% qui peuvent ne jamais arriver)
 */
export default function RevealEffect() {
  useEffect(() => {
    // ── Création de l'observer ──────────────────────────────────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Une fois révélé, plus besoin de surveiller cet élément
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // L'élément est considéré visible dès qu'il entre de 80px dans le viewport
        // (plus fiable que threshold pour les grandes sections)
        rootMargin: "0px 0px -80px 0px",
        threshold: 0,
      }
    );

    // ── Fonction d'observation des éléments .reveal ──────────────────────
    const observeAll = () => {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
      reveals.forEach((el) => observer.observe(el));
    };

    // Observer immédiatement les éléments présents
    observeAll();

    // ── Détection dynamique : si de nouveaux éléments .reveal apparaissent
    //    dans le DOM (changement de page, lazy load, etc.), on les observe aussi
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // ── Nettoyage ───────────────────────────────────────────────────────
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}