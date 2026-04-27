"use client";

import { useState } from "react";

/* ─── Types ─── */
type Categorie =
  | "Tous"
  | "Génie Climatique"
  | "Génie Électrique"
  | "Plomberie & Réseaux"
  | "Travaux Architecturaux"
  | "Multi-technique";

interface Projet {
  id: number;
  client: string;
  titre: string;
  description: string;
  annee: string;
  type: string;
  duree: string;
  milieu_occupe: boolean;
  categorie: Categorie;
  image: string;
}

/* ─── Données ─── */
const PROJETS: Projet[] = [
  // ── GÉNIE CLIMATIQUE ──────────────────────────────────────────
  {
    id: 1,
    client: "BOUYGUES / ENGIE",
    titre: "Campus Seine",
    description: "Climatisation — 8 VRV 3 tubes, 40 boîtes BS, 190 unités intérieures",
    annee: "2024",
    type: "Création neuf",
    duree: "9 mois",
    milieu_occupe: false,
    categorie: "Génie Climatique",
    image: "/images/refs/campus-seine.jpg",
  },
  {
    id: 2,
    client: "GECINA",
    titre: "GECINA Montmartre",
    description: "Réseaux hydrauliques chauffage & eau glacée — 4 niveaux, 130 ventilo-convecteurs",
    annee: "2025",
    type: "Rénovation",
    duree: "6 mois",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/gecina-montmartre.jpg",
  },
  {
    id: 3,
    client: "Palais de la Porte Dorée",
    titre: "Palais de la Porte Dorée",
    description: "Production eau glacée — 2 groupes froids à condensation, 2 aéroréfrigérants, sous-station",
    annee: "2023",
    type: "Neuf",
    duree: "3 mois",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/porte-doree.jpg",
  },
  {
    id: 4,
    client: "ENGIE Solutions",
    titre: "FEDEX — ADP",
    description: "Remplacement de 10 VRV, dépose & repose de 40 unités terminales",
    annee: "2023",
    type: "Création",
    duree: "4 semaines",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/fedex-adp.jpg",
  },
  {
    id: 5,
    client: "CREPS",
    titre: "CREPS Châtenay-Malabry",
    description: "5 VRV, 50 unités terminales — raccordements électrique et fluidique",
    annee: "2024",
    type: "Création",
    duree: "12 semaines",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/creps.jpg",
  },
  {
    id: 6,
    client: "DESCHAMPS",
    titre: "Fort de Vincennes",
    description: "5 VRV, 20 unités terminales — raccordements électrique et fluidique",
    annee: "2025",
    type: "Création",
    duree: "4 semaines",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/fort-vincennes.jpg",
  },
  {
    id: 7,
    client: "MINISTÈRE DE L'INTÉRIEUR — DGSI",
    titre: "DGSI",
    description: "Remplacement réseaux hydrauliques chauds sur 10 CTA, vannes TA & 3 voies, calorifuge aluminium",
    annee: "2023",
    type: "Rénovation",
    duree: "6 mois",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/dgsi.jpg",
  },
  {
    id: 8,
    client: "ENGIE",
    titre: "Versailles Satory",
    description: "Réseau eau glacée & chauffage — pompes de charges, régulation, raccordement réseaux urbains",
    annee: "2024",
    type: "Rénovation",
    duree: "2 mois",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/versailles-satory.jpg",
  },
  {
    id: 9,
    client: "QUARTUS / ADÉQWATTS",
    titre: "QUARTUS — Réseau hydraulique",
    description: "Réseaux kryoclim chauffage & eau glacée, raccordement 50 ventilo-convecteurs",
    annee: "2025",
    type: "Rénovation",
    duree: "3 mois",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/quartus.jpg",
  },
  {
    id: 10,
    client: "SODEXO",
    titre: "ARPAVIE",
    description: "Remplacement 4 VRV, repose 2 nouvelles installations VRV, 8 unités terminales",
    annee: "2022",
    type: "Création",
    duree: "6 semaines",
    milieu_occupe: true,
    categorie: "Génie Climatique",
    image: "/images/refs/arpavie.jpg",
  },

  // ── GÉNIE ÉLECTRIQUE ──────────────────────────────────────────
  {
    id: 11,
    client: "Région Île-de-France",
    titre: "Lycées Evariste Galois & Château d'Épluches",
    description: "CFO/CFA, TGBT, 9 armoires électriques, SSI, contrôle d'accès",
    annee: "2024",
    type: "Rénovation",
    duree: "12 mois",
    milieu_occupe: false,
    categorie: "Génie Électrique",
    image: "/images/refs/lycee-galois.jpg",
  },
  {
    id: 12,
    client: "SEGE",
    titre: "Médiathèque Jean-Cocteau — Massy",
    description: "TGBT, 7 armoires, réseaux CFO/CFA, SSI, sonorisation, contrôle d'accès",
    annee: "2024",
    type: "Rénovation",
    duree: "9 mois",
    milieu_occupe: false,
    categorie: "Génie Électrique",
    image: "/images/refs/mediatheque-massy.jpg",
  },
  {
    id: 13,
    client: "IB ELEC",
    titre: "École maternelle Salvador Allende — Houilles",
    description: "TGBT, 4 armoires, réseaux CFO/CFA, SSI, sonorisation, contrôle d'accès",
    annee: "2024",
    type: "Rénovation",
    duree: "6 mois",
    milieu_occupe: false,
    categorie: "Génie Électrique",
    image: "/images/refs/ecole-allende.jpg",
  },
  {
    id: 14,
    client: "DESCHAMPS",
    titre: "Crèche de la Brèche — Créteil",
    description: "TGBT, 1 armoire, réseaux CFA, régulation équipements techniques",
    annee: "2024",
    type: "Rénovation",
    duree: "3 mois",
    milieu_occupe: false,
    categorie: "Génie Électrique",
    image: "/images/refs/creche-creteil.jpg",
  },

  // ── PLOMBERIE & RÉSEAUX ───────────────────────────────────────
  {
    id: 15,
    client: "NAES / ACMS",
    titre: "ACMS — Serris Val d'Europe",
    description: "Dépose sanitaires, réseaux EF/ECS, équipements sanitaires et ballons d'eau chaude",
    annee: "2022",
    type: "Rénovation",
    duree: "6 mois",
    milieu_occupe: false,
    categorie: "Plomberie & Réseaux",
    image: "/images/refs/acms-serris.jpg",
  },
  {
    id: 16,
    client: "BPCE",
    titre: "Val d'Europe Data Center",
    description: "4 blocs sanitaires : plomberie EF/ECS, cloisons BA13, peinture, parquet, carrelage",
    annee: "2023",
    type: "Rénovation",
    duree: "2 semaines",
    milieu_occupe: true,
    categorie: "Plomberie & Réseaux",
    image: "/images/refs/bpce-valdeurope.jpg",
  },

  // ── TRAVAUX ARCHITECTURAUX ────────────────────────────────────
  {
    id: 17,
    client: "Région Île-de-France",
    titre: "5 Lycées — Seine-et-Marne",
    description: "Rénovation sanitaires PMR, revêtements muraux & sol, faux plafond, réseaux plomberie",
    annee: "2021–2022",
    type: "Rénovation",
    duree: "12 mois",
    milieu_occupe: false,
    categorie: "Travaux Architecturaux",
    image: "/images/refs/lycees-77.jpg",
  },
  {
    id: 18,
    client: "PRODEF",
    titre: "IBM — Levallois-Perret",
    description: "Curage TCE plateaux bureaux & parkings, rénovation revêtements, adaptation CVC & CFO",
    annee: "2021",
    type: "Rénovation",
    duree: "2 mois",
    milieu_occupe: false,
    categorie: "Travaux Architecturaux",
    image: "/images/refs/ibm-levallois.jpg",
  },
  {
    id: 19,
    client: "ACMS",
    titre: "ACMS — Serris Val d'Europe (bureaux)",
    description: "Rénovation TCE 2 niveaux : cloisons acoustiques, faux plafond, mobiliers spécifiques, CVC",
    annee: "2022",
    type: "Rénovation",
    duree: "6 mois",
    milieu_occupe: false,
    categorie: "Travaux Architecturaux",
    image: "/images/refs/acms-bureaux.jpg",
  },

  // ── MULTI-TECHNIQUE ───────────────────────────────────────────
  {
    id: 20,
    client: "BRED",
    titre: "Agences bancaires Île-de-France",
    description: "CEA + CVC + Plomberie + CFO — Montreuil, Noisy-le-Grand, Bagnolet",
    annee: "2022–2023",
    type: "Rénovation",
    duree: "3 sem/agence",
    milieu_occupe: false,
    categorie: "Multi-technique",
    image: "/images/refs/bred-agences.jpg",
  },
  {
    id: 21,
    client: "ENGIE",
    titre: "Multi-sites ENGIE",
    description: "Génie climatique & plomberie — maintenance préventive niv. 4/5, VRV, chaudières, dépannage",
    annee: "2021–2022",
    type: "Création & Rénovation",
    duree: "Prestations continues",
    milieu_occupe: true,
    categorie: "Multi-technique",
    image: "/images/refs/engie-multisites.jpg",
  },
  {
    id: 22,
    client: "KEOLIS",
    titre: "Multi-sites KEOLIS",
    description: "VRV, chaudières, surpresseurs, plomberie — rénovation et création sur réseau de sites",
    annee: "2021–2022",
    type: "Rénovation & Création",
    duree: "Prestations continues",
    milieu_occupe: true,
    categorie: "Multi-technique",
    image: "/images/refs/keolis-multisites.jpg",
  },
];

const CATEGORIES: Categorie[] = [
  "Tous",
  "Génie Climatique",
  "Génie Électrique",
  "Plomberie & Réseaux",
  "Travaux Architecturaux",
  "Multi-technique",
];

/* ─── Icônes SVG inline ─── */
const IconOui = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 8 6 12 14 4" />
  </svg>
);

const IconNon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="3" y1="3" x2="13" y2="13" />
    <line x1="13" y1="3" x2="3" y2="13" />
  </svg>
);

const IconCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/* ─── Composant carte ─── */
function RefCard({ projet, index, filtreKey }: { projet: Projet; index: number; filtreKey: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="ref-card-v2"
      style={{ opacity: 0, animation: "fadeUp 0.45s ease forwards", animationDelay: `${index * 0.07}s` }}
    >
      {/* Photo */}
      <div className="ref-card-img">
        {!imgError ? (
          <img
            src={projet.image}
            alt={projet.titre}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="ref-card-img-placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
        {/* Badge catégorie */}
        <span className="ref-cat-badge">{projet.categorie}</span>
      </div>

      {/* Contenu */}
      <div className="ref-card-body">
        <div className="ref-card-client">{projet.client}</div>
        <h3 className="ref-card-titre">{projet.titre}</h3>
        <p className="ref-card-desc">{projet.description}</p>

        {/* Métadonnées */}
        <div className="ref-card-meta">
          <span className="ref-meta-item">
            <IconCalendar />
            {projet.annee}
          </span>
          <span className="ref-meta-item">
            <IconClock />
            {projet.duree}
          </span>
          <span className={`ref-meta-occupe ${projet.milieu_occupe ? "oui" : "non"}`}>
            {projet.milieu_occupe ? <IconOui /> : <IconNon />}
            Milieu occupé
          </span>
        </div>

        {/* Footer */}
        <div className="ref-card-footer">
          <span className="ref-type-badge">{projet.type}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Composant principal ─── */
export default function ReferencesSection() {
  const [filtre, setFiltre] = useState<Categorie>("Tous");

  const projets = filtre === "Tous"
    ? PROJETS
    : PROJETS.filter((p) => p.categorie === filtre);

  return (
    <section id="references">

      {/* Intro */}
      <div className="refs-intro reveal">
        <span className="section-label">Références</span>
        <h2 className="section-title">
          Un accompagnement <em>plurisectoriel</em>
        </h2>
        <p>
          Nos clients principaux sont des entreprises multi-techniques et FM de
          premier plan, ainsi que des grands comptes privés et des collectivités.
        </p>
      </div>

      {/* Logos clients */}
      <div className="clients-images reveal">
        {[
          { src: "/images/engie.png",    alt: "ENGIE"      },
          { src: "/images/sodexo.png",   alt: "SODEXO"     },
          { src: "/images/spie.png",     alt: "SPIE"       },
          { src: "/images/bouygues.png", alt: "BOUYGUES"   },
          { src: "/images/hermes.png",   alt: "HERMÈS"     },
          { src: "/images/natixis.png",  alt: "NATIXIS"    },
          { src: "/images/bpce.png",     alt: "BPCE"       },
          { src: "/images/bred.png",     alt: "BRED"       },
          { src: "/images/fedex.png",    alt: "FEDEX"      },
          { src: "/images/keolis.png",   alt: "KEOLIS"     },
          { src: "/images/snef.png",     alt: "SNEF"       },
          { src: "/images/idf.png",      alt: "Région IDF" },
          { src: "/images/ratp.png",     alt: "RATP"       },
          { src: "/images/acms.png",     alt: "ACMS"       },
          { src: "/images/prodef.jpg",   alt: "PRODEF"     },
          { src: "/images/gecina.jpg",   alt: "GECINA"     },
        ].map(({ src, alt }) => (
          <div key={alt} className="client-logo">
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>

      {/* Filtres */}
      <div className="refs-filtres reveal">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`ref-filtre-btn${filtre === cat ? " active" : ""}`}
            onClick={() => setFiltre(cat)}
            aria-pressed={filtre === cat}
          >
            {cat}
            {cat !== "Tous" && (
              <span className="ref-filtre-count">
                {PROJETS.filter((p) => p.categorie === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grille projets */}
      <div className="refs-grid-v2" key={filtre}>
        {projets.length > 0 ? (
          projets.map((p, i) => <RefCard key={`${filtre}-${p.id}`} projet={p} index={i} filtreKey={filtre} />)
        ) : (
          <p className="refs-empty">Aucun projet dans cette catégorie.</p>
        )}
      </div>

    </section>
  );
}
