"use client";

import { useState, useEffect, useRef } from "react";

const SLIDES = [
  { src: "/images/hero-asgard.jpg",   alt: "ASGARD Group – Génie Électrique" },
  { src: "/images/hero-asgard-2.jpg", alt: "ASGARD Group – Plomberie" },
  { src: "/images/hero-asgard-3.jpeg", alt: "ASGARD Group – Génie Climatique" },
];

const INTERVAL      = 5000; // ms entre chaque slide
const FADE_MS       = 1000; // durée du fondu CSS

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  // Défilement automatique — lit toujours la valeur courante via le ref
  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const overlay =
    "linear-gradient(to bottom, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.70) 55%, rgba(255,255,255,0.58) 100%)";

  return (
    <>
      <style>{`
        .hero::before { display: none !important; }

        .slide-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }
        .slide-img.is-active {
          opacity: 1;
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
          {/*
            Toutes les images sont dans le DOM.
            Seule celle avec .is-active est à opacity:1.
            CSS gère la transition — pas de swap manuel, pas de glitch.
          */}
          {SLIDES.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={slide.alt}
              className={`slide-img${i === active ? " is-active" : ""}`}
            />
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
                padding: 0,
                background: "transparent",
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
