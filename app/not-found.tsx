"use client";

import { use, useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="page-404">


      {/* ── Corps ── */}
      <main className={`body-404 ${mounted ? "body-404--visible" : ""}`}>
        <div className="inner-404">

          {/* ── Colonne gauche ── */}
          <div className="left-404">
            <span className="tag-404">Erreur</span>

            <p className="num-404">
              4<em>0</em>4
            </p>

            <h1 className="h1-404">Page introuvable</h1>

            <p className="desc-404">
              La page que vous recherchez n'existe pas ou a été déplacée. Elle a
              peut-être été supprimée ou l'URL a changé.
            </p>

            <div className="actions-404">
              <a href="/" className="btn-primary">
                <IconHome />
                Retour à l'accueil
              </a>
              <a href="/#contact" className="btn-ghost">
                <IconMessage />
                Nous contacter
              </a>
            </div>

            {/* ── Liens rapides ── */}
            <div className="links-404">
              <p className="links-label-404">Liens utiles</p>
              <div className="link-items-404">
                <QuickLink
                  href="/#services"
                  icon={<IconFile />}
                  label="Nos services"
                  sub="Expertise & prestations"
                />
                <QuickLink
                  href="/#references"
                  icon={<IconGrid />}
                  label="Références"
                  sub="Nos projets réalisés"
                />
                <QuickLink
                  href="/#contact"
                  icon={<IconMail />}
                  label="Contact"
                  sub="Parlez à notre équipe"
                />
              </div>
            </div>
          </div>

          {/* ── Colonne droite — illustration ── */}
          <div className="right-404" aria-hidden="true">
            <div className="vis-card-404">

              {/* Fausse barre navigateur */}
              <div className="vis-header-404">
                <span className="vis-dot-404 vis-dot-red" />
                <span className="vis-dot-404 vis-dot-yellow" />
                <span className="vis-dot-404 vis-dot-green" />
                <div className="vis-urlbar-404">
                  <span className="vis-url-404">asgard.fr/???</span>
                </div>
              </div>

              {/* Faux contenu */}
              <div className="vis-lines-404">
                <div className="vis-line-404 vis-line-60" />
                <div className="vis-line-404 vis-line-100" />
                <div className="vis-line-404 vis-line-80" />
                <div className="vis-line-404 vis-line-40" />
              </div>

              {/* Alerte */}
              <div className="vis-alert-404">
                <div className="vis-alert-icon-404">
                  <IconSearch />
                </div>
                <div>
                  <p className="vis-alert-title-404">Page non trouvée</p>
                  <p className="vis-alert-desc-404">
                    Cette URL ne correspond à aucune ressource disponible sur
                    notre serveur.
                  </p>
                  <span className="vis-badge-404">CODE 404</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

     

    </div>
  );
}

/* ─── Composant lien rapide ─── */
function QuickLink({
  href,
  icon,
  label,
  sub,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <a href={href} className="link-item-404">
      <div className="link-item-icon-404">{icon}</div>
      <div className="link-item-text-404">
        <span className="link-item-title-404">{label}</span>
        <span className="link-item-sub-404">{sub}</span>
      </div>
      <span className="link-item-arrow-404">›</span>
    </a>
  );
}

/* ─── Icônes SVG ─── */
const IconHome = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconMessage = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconFile = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconGrid = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="11" />
    <line x1="11" y1="14" x2="11.01" y2="14" />
  </svg>
);