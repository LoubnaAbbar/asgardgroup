"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero-asgard.jpg",   alt: "ASGARD Group – Génie Électrique" },
  { src: "/images/hero-asgard-2.jpg", alt: "ASGARD Group – Plomberie" },
  { src: "/images/hero-asgard-3.jpg", alt: "ASGARD Group – Génie Climatique" },
  // ⚠️ Note : hero-asgard-3.jpeg → hero-asgard-3.jpg (le script d'optimisation
  // a renommé en .jpg). Si vos fichiers sont encore en .jpeg, restaurez l'extension.
];

const INTERVAL = 5000; // ms entre chaque slide
const FADE_MS  = 1000; // durée du fondu CSS

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  // Défilement automatique
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const overlay =
    "linear-gradient(to bottom, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.70) 55%, rgba(255,255,255,0.58) 100%)";

  return (
    <>
      <style>{`
        .hero::before { display: none !important; }

        .slide-img-wrapper {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }
        .slide-img-wrapper.is-active {
          opacity: 1;
        }

        /* L'Image de Next.js s'insère dans le wrapper */
        .slide-img-wrapper img {
          object-fit: cover;
          object-position: center;
        }

        @keyframes progressBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>

      <section
        className="hero"
        style={{ minHeight: "85vh", paddingBottom: "3rem" }}
      >
        {/* ── Fond carrousel ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`slide-img-wrapper${i === active ? " is-active" : ""}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                /* La 1ère image est prioritaire pour optimiser le LCP */
                priority={i === 0}
                /* Pour les images suivantes : chargement standard, pas de lazy
                   (sinon elles ne seraient jamais chargées avant que le slider y arrive) */
                loading={i === 0 ? "eager" : "eager"}
                /* Tailles : carrousel full-width sur tous écrans */
                sizes="100vw"
                /* Qualité : 80 = sweet spot entre poids et rendu */
                quality={80}
              />
            </div>
          ))}

          {/* Voile unique par-dessus toutes les images */}
          <div style={{ position: "absolute", inset: 0, background: overlay, zIndex: 1 }} />
        </div>

        {/* Décorations */}
        <div className="hero-ring" />
        <div className="hero-orb" />

        {/* ── Contenu ── */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="hero-tag">Facilitateur de Projet Multi-technique</p>
          <h1>
            Travaux &amp;<br />
            Maintenance<br />
            <em>Multi-Technique</em>
          </h1>

          <p className="hero-desc">
            Depuis 2019, ASGARD Group intervient sur l&apos;intégralité de la
            chaîne de valeurs des services techniques à l&apos;immobilier
            tertiaire de la conception à la maintenance.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn-primary">Nos services</a>
            <a href="#contact"  className="btn-ghost">Nous contacter</a>
          </div>

          <div className="dot-trail">
            <span /><span /><span /><span /><span />
          </div>
        </div>

        {/* ── Indicateurs ── */}
        <nav
          aria-label="Navigation carrousel"
          style={{
            position: "absolute",
            bottom: "1.75rem",
            right: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 10,
          }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                /* Touch target accessibilité : 44x44px de zone cliquable invisible */
                padding: "0.75rem 0.4rem",
                background: "transparent",
                minWidth: "44px",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: i === active ? "1.75rem" : "0.45rem",
                  height: "0.35rem",
                  borderRadius: "999px",
                  background: i === active
                    ? "var(--bleu-vif, #0ea5e9)"
                    : "rgba(0,0,0,0.2)",
                  transition: "width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s",
                }}
              />
            </button>
          ))}
        </nav>

        {/* ── Barre de progression ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "3px",
            background: "rgba(0,0,0,0.06)",
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          <div
            key={active}
            style={{
              height: "100%",
              width: "100%",
              transformOrigin: "left",
              background: "var(--bleu-vif, #0ea5e9)",
              animation: `progressBar ${INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </section>
    </>
  );
}