"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface FormData {
  selectedPrestations: string[];
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  localisation: string;
  echeance: string;
  typeSite: string;
  description: string;
  comment: string;
  fichiers: File[];
}

const prestationsList = [
  {
    id: "cvc",
    label: "Génie Climatique",
    desc: "CVC / Chauffage / Ventilation",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    id: "froid",
    label: "Froid & Climatisation",
    desc: "VRV / Groupes froids / Eau glacée",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "elec",
    label: "Génie Électrique",
    desc: "CFO / CFA / IRVE / SSI",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "plomb",
    label: "Plomberie & Réseaux",
    desc: "EF / ECS / Sanitaires",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 12a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7z" />
        <path d="M6 12H4a2 2 0 0 0 0 4h16" />
        <path d="M18 8h2a2 2 0 0 1 0 4h-2" />
      </svg>
    ),
  },
  {
    id: "archi",
    label: "Travaux Architecturaux",
    desc: "CEA / TCE / Second-œuvre",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "maint",
    label: "Maintenance & Exploitation",
    desc: "GMAO / Préventif / Curatif",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: "ingenierie",
    label: "Ingénierie & Conseil",
    desc: "Études / Audit / DOE",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V10l8-8 8 8v10" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="4" y1="14" x2="20" y2="14" />
      </svg>
    ),
  },
  {
    id: "ao",
    label: "Appel d'offres",
    desc: "Accompagnement / Renégociation",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

const echeanceOptions = [
  "Urgent (< 1 mois)",
  "Court terme (1–3 mois)",
  "Moyen terme (3–6 mois)",
  "Long terme (> 6 mois)",
  "À définir",
];

const typeSiteOptions = [
  { value: "tertiaire_prive",  label: "Tertiaire privé",          desc: "Bureaux, commerces, hôtels, logements" },
  { value: "industrie",        label: "Industrie & Logistique",   desc: "Usines, entrepôts, data centers" },
  { value: "sante_social",     label: "Santé & Médico-social",    desc: "Hôpitaux, cliniques, EHPAD" },
  { value: "enseignement",     label: "Enseignement & Recherche", desc: "Écoles, universités, laboratoires" },
  { value: "collectivite",     label: "Collectivité territoriale",desc: "Mairies, intercommunalités, régions" },
  { value: "etat",             label: "Bâtiment de l'État",       desc: "Ministères, préfectures, justice, défense" },
  { value: "particulier",      label: "Particulier / Copropriété",desc: "Maison individuelle, résidence" },
  { value: "autre",            label: "Autre",                    desc: "" },
];

const commentOptions = ["Recommandation", "Site web", "LinkedIn", "Appel d'offres", "Autre"];

const ACCEPTED_TYPES = ".pdf,.doc,.docx,.xls,.xlsx,.dwg,.png,.jpg,.jpeg";
const MAX_FILES = 5;
const MAX_SIZE_MB = 10;

const initialFormData: FormData = {
  selectedPrestations: [],
  nom: "", entreprise: "", email: "", telephone: "",
  localisation: "", echeance: "", typeSite: "",
  description: "", comment: "", fichiers: [],
};

export default function DevisSection() {
  const [step, setStep]         = useState(1);
  const [stepKey, setStepKey]   = useState(0); // incrémenté à chaque changement → relance l'animation
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [fileError, setFileError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePrestation = (id: string) =>
    setFormData((prev) => ({
      ...prev,
      selectedPrestations: prev.selectedPrestations.includes(id)
        ? prev.selectedPrestations.filter((p) => p !== id)
        : [...prev.selectedPrestations, id],
    }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    setFileError("");
    const arr = Array.from(newFiles);
    if (arr.some((f) => f.size > MAX_SIZE_MB * 1024 * 1024)) {
      setFileError(`Certains fichiers dépassent ${MAX_SIZE_MB} Mo.`); return;
    }
    setFormData((prev) => {
      const merged = [...prev.fichiers, ...arr];
      if (merged.length > MAX_FILES) { setFileError(`Maximum ${MAX_FILES} fichiers.`); return prev; }
      return { ...prev, fichiers: merged };
    });
  };

  const removeFile = (i: number) => {
    setFormData((prev) => ({ ...prev, fichiers: prev.fichiers.filter((_, j) => j !== i) }));
    setFileError("");
  };

  const fmt = (b: number) => b < 1024 * 1024 ? `${(b / 1024).toFixed(0)} Ko` : `${(b / (1024 * 1024)).toFixed(1)} Mo`;

  const nextStep = () => { setStep((p) => Math.min(p + 1, 3)); setStepKey((k) => k + 1); };
  const prevStep = () => { setStep((p) => Math.max(p - 1, 1)); setStepKey((k) => k + 1); };

  const canProceedStep1 = formData.selectedPrestations.length > 0;
  const canProceedStep2 = formData.echeance.length > 0;
  const canProceedStep3 = formData.nom && formData.email;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const payload = new FormData();
      payload.append("prestations", JSON.stringify(formData.selectedPrestations));
      payload.append("localisation", formData.localisation);
      payload.append("delai", formData.echeance);
      payload.append("typeSite", formData.typeSite);
      payload.append("nom", formData.nom);
      payload.append("societe", formData.entreprise);
      payload.append("email", formData.email);
      payload.append("telephone", formData.telephone);
      payload.append("description", formData.description);
      payload.append("comment", formData.comment);
      formData.fichiers.forEach((f) => payload.append("fichiers", f));

      const res  = await fetch("/api/devis", { method: "POST", body: payload });
      const text = await res.text();
      if (!res.ok) throw new Error(`Erreur ${res.status}: ${text}`);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const labels = () => formData.selectedPrestations.map((id) => prestationsList.find((p) => p.id === id)?.label ?? id);
  const typeSiteLabel = () => typeSiteOptions.find((t) => t.value === formData.typeSite)?.label ?? "—";

  /* ── Succès ── */
  if (submitted) {
    return (
      <div className="devis-page">
        <div className="devis-container">
          <div
            className="devis-card success-screen"
            style={{ opacity: 0, animation: "fadeUp 0.6s ease forwards 0.1s" }}
          >
            <div className="success-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="success-title">Demande envoyée !</h2>
            <p className="success-sub">Votre demande a bien été reçue. Notre équipe vous recontactera sous <strong>24h</strong>.</p>
            <Link href="/" className="btn-primary">Retour à l'accueil</Link>
            <div className="dot-trail"><span /><span /><span /></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="devis-page">
      <div className="devis-container">

        {/* ── En-tête ── */}
        <div className="devis-header" style={{ opacity: 0, animation: "fadeUp 0.55s ease forwards 0.05s" }}>
          <Link href="/" className="devis-back">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Retour à l'accueil
          </Link>
          <div className="devis-label" style={{ opacity: 0, animation: "fadeUp 0.55s ease forwards 0.15s" }}>Configuration</div>
          <h1 className="devis-title" style={{ opacity: 0, animation: "fadeUp 0.6s ease forwards 0.25s" }}>Demande de devis</h1>
        </div>

        {/* ── Stepper ── */}
        <div className="stepper" style={{ opacity: 0, animation: "fadeUp 0.55s ease forwards 0.35s" }}>
          {[{ n: 1, label: "Prestations" }, { n: 2, label: "Projet" }, { n: 3, label: "Récapitulatif" }].map(({ n, label }) => (
            <div key={n} className={`step-item${step >= n ? " active" : ""}${step > n ? " done" : ""}`}>
              <span className="step-num">{step > n ? "✓" : n}</span>
              <span className="step-label">{label}</span>
            </div>
          ))}
        </div>

        {/* ── Card principale — reanime à chaque étape via key ── */}
        <div
          key={stepKey}
          className="devis-card"
          style={{ opacity: 0, animation: "fadeUp 0.45s ease forwards 0.05s" }}
        >

          {/* ── ÉTAPE 1 ── */}
          {step === 1 && (
            <>
              <div className="step-intro">
                <div className="step-intro-text">
                  <p className="step-title">Type de prestation</p>
                  <p className="step-desc">Sélectionnez une ou plusieurs prestations correspondant à votre besoin.</p>
                </div>
                {formData.selectedPrestations.length > 0 && (
                  <div className="step-selection-count">
                    <span>{formData.selectedPrestations.length} sélectionné{formData.selectedPrestations.length > 1 ? "s" : ""}</span>
                  </div>
                )}
              </div>

              <div className="presta-grid-full">
                {prestationsList.map((p) => (
                  <div
                    key={p.id}
                    className={`presta-card-v2${formData.selectedPrestations.includes(p.id) ? " selected" : ""}`}
                    onClick={() => togglePrestation(p.id)}
                    role="checkbox"
                    aria-checked={formData.selectedPrestations.includes(p.id)}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === " " && togglePrestation(p.id)}
                  >
                    <div className="presta-card-v2-check">
                      <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="1.5 6 4.5 9 10.5 3" />
                      </svg>
                    </div>
                    <div className="presta-card-v2-icon">{p.icon}</div>
                    <div className="presta-card-v2-body">
                      <h4>{p.label}</h4>
                      <span>{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="devis-nav">
                <button className="btn-back-step" disabled>← Retour</button>
                <button className="btn-next-step" onClick={nextStep} disabled={!canProceedStep1}>
                  Étape suivante →
                </button>
              </div>
            </>
          )}

          {/* ── ÉTAPE 2 ── */}
          {step === 2 && (
            <>
              <div className="step-intro">
                <div className="step-intro-text">
                  <p className="step-title">Votre projet</p>
                  <p className="step-desc">Quelques informations pour mieux qualifier votre besoin.</p>
                </div>
                <div className="presta-tags-inline">
                  {labels().map((l, i) => <span key={i} className="presta-tag">{l}</span>)}
                </div>
              </div>

              {/* Grille 3 colonnes pour les champs courts */}
              <div className="projet-grid">
                <div className="fg col-span-2">
                  <label>Localisation du chantier
                    <em className="label-hint">Ville, département ou région</em>
                  </label>
                  <input type="text" name="localisation" value={formData.localisation} onChange={handleChange}
                    placeholder="Ex : Paris 8e, Seine-Saint-Denis, Île-de-France…" />
                </div>

                <div className="fg">
                  <label>Échéance souhaitée <span className="required">*</span></label>
                  <select name="echeance" value={formData.echeance} onChange={handleChange}>
                    <option value="">Sélectionnez</option>
                    {echeanceOptions.map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                </div>

                <div className="fg col-span-3">
                  <label>Type de site / Maître d'ouvrage
                    <em className="label-hint">Optionnel</em>
                  </label>
                  {/* Sélecteur visuel en pills */}
                  <div className="type-site-pills">
                    {typeSiteOptions.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        className={`type-site-pill${formData.typeSite === t.value ? " selected" : ""}`}
                        onClick={() => setFormData((prev) => ({ ...prev, typeSite: prev.typeSite === t.value ? "" : t.value }))}
                      >
                        <strong>{t.label}</strong>
                        {t.desc && <span>{t.desc}</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="fg col-span-3">
                  <label>Description du projet</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} rows={5}
                    placeholder="Type de bâtiment, surface, contraintes techniques, besoins spécifiques…" />
                </div>

                {/* Zone dépôt fichiers */}
                <div className="fg col-span-3">
                  <label>Pièces jointes
                    <em className="label-hint">Plans, CCTP, photos — max {MAX_FILES} fichiers · {MAX_SIZE_MB} Mo chacun</em>
                  </label>
                  <div
                    className={`file-drop-zone${dragOver ? " drag-over" : ""}`}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <p><strong>Cliquez pour parcourir</strong> ou glissez-déposez vos fichiers</p>
                    <p className="drop-hint">PDF, DOC, XLS, DWG, JPG, PNG</p>
                    <input ref={fileInputRef} type="file" multiple accept={ACCEPTED_TYPES} style={{ display: "none" }} onChange={(e) => addFiles(e.target.files)} />
                  </div>
                  {formData.fichiers.length > 0 && (
                    <ul className="file-list">
                      {formData.fichiers.map((f, i) => (
                        <li key={i} className="file-item">
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span className="file-name">{f.name}</span>
                          <span className="file-size">{fmt(f.size)}</span>
                          <button type="button" className="file-remove" onClick={(e) => { e.stopPropagation(); removeFile(i); }} aria-label="Supprimer">
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {fileError && <p className="field-error">{fileError}</p>}
                </div>
              </div>

              <div className="devis-nav">
                <button className="btn-back-step" onClick={prevStep}>← Retour</button>
                <button className="btn-next-step" onClick={nextStep} disabled={!canProceedStep2}>Voir le récapitulatif →</button>
              </div>
            </>
          )}

          {/* ── ÉTAPE 3 ── */}
          {step === 3 && (
            <>
              <div className="step-intro">
                <div className="step-intro-text">
                  <p className="step-title">Récapitulatif & coordonnées</p>
                  <p className="step-desc">Vérifiez votre demande et renseignez vos coordonnées avant d'envoyer.</p>
                </div>
                <button className="btn-modify" onClick={() => setStep(2)}>
                  <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
                  </svg>
                  Modifier le projet
                </button>
              </div>

              {/* Deux colonnes : récap + coordonnées */}
              <div className="recap-two-col">

                {/* Colonne gauche : récap projet */}
                <div className="recap-col">
                  <div className="recap-panel">
                    <div className="recap-panel-title">Projet</div>
                    <div className="recap-rows">
                      <div className="recap-row-item">
                        <span className="rk">Localisation</span>
                        <span className="rv">{formData.localisation || "—"}</span>
                      </div>
                      <div className="recap-row-item">
                        <span className="rk">Échéance</span>
                        <span className="rv">{formData.echeance || "—"}</span>
                      </div>
                      <div className="recap-row-item">
                        <span className="rk">Type de site</span>
                        <span className="rv">{formData.typeSite ? typeSiteLabel() : "—"}</span>
                      </div>
                      {formData.fichiers.length > 0 && (
                        <div className="recap-row-item">
                          <span className="rk">Pièces jointes</span>
                          <span className="rv">{formData.fichiers.length} fichier{formData.fichiers.length > 1 ? "s" : ""}</span>
                        </div>
                      )}
                    </div>
                    {formData.description && (
                      <div className="recap-desc">
                        <span className="rk">Description</span>
                        <p>{formData.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="recap-panel">
                    <div className="recap-panel-title">Services sélectionnés</div>
                    <div className="presta-badges">
                      {labels().map((l, i) => <span key={i} className="presta-badge">{l}</span>)}
                    </div>
                  </div>
                </div>

                {/* Colonne droite : coordonnées */}
                <div className="coords-col">
                  <div className="recap-panel coords-panel">
                    <div className="recap-panel-title">Vos coordonnées</div>
                    <div className="coords-grid">
                      <div className="fg">
                        <label>Nom complet <span className="required">*</span></label>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Jean Dupont" />
                      </div>
                      <div className="fg">
                        <label>Entreprise</label>
                        <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="ASGARD Group" />
                      </div>
                      <div className="fg">
                        <label>Email <span className="required">*</span></label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jean@exemple.fr" />
                      </div>
                      <div className="fg">
                        <label>Téléphone</label>
                        <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="06 00 00 00 00" />
                      </div>
                      <div className="fg col-span-2">
                        <label>Comment nous avez-vous connu ?</label>
                        <select name="comment" value={formData.comment} onChange={handleChange}>
                          <option value="">Sélectionnez</option>
                          {commentOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                    {error && <div className="error-banner" style={{ marginTop: "1.25rem" }}>{error}</div>}
                  </div>
                </div>

              </div>

              <div className="devis-nav">
                <button className="btn-back-step" onClick={prevStep}>← Retour</button>
                <button className="btn-submit" onClick={handleSubmit} disabled={!canProceedStep3 || loading}>
                  {loading ? <><span className="spinner" />Envoi en cours…</> : <>Envoyer la demande <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg></>}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
