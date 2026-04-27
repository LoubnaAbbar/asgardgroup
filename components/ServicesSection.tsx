export default function ServicesSection() {
return (
<section id="services">
<div className="services-intro reveal">
<span className="section-label">Panel de prestations</span>
<h2 className="section-title">
Des solutions <em>globales</em>
</h2>
<p>
De la phase de conseil jusqu&apos;à la mise en service et l&apos;assistance, ASGARD Group couvre l&apos;ensemble des besoins techniques de vos bâtiments tertiaires.
</p>
</div>

<div className="services-grid reveal">
<div className="service-card">
<div className="service-icon">
<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
</div>
<h3>Génie Climatique</h3>
<p>Chauffage, ventilation, froid et climatisation — conception, réalisation et maintenance de vos installations thermiques et frigorifiques.</p>
<div className="service-tags">
<span className="tag">CVC</span><span className="tag">VRV</span><span className="tag">Chaudières</span><span className="tag">PAC</span>
</div>
</div>

<div className="service-card">
<div className="service-icon">
<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
</div>
<h3>Génie Électrique</h3>
<p>Courants forts et faibles — TGBT, distribution BT, éclairage, IRVE, contrôle d&apos;accès, SSI, sonorisation, vidéosurveillance.</p>
<div className="service-tags">
<span className="tag">CFO</span><span className="tag">CFA</span><span className="tag">IRVE</span><span className="tag">SSI</span>
</div>
</div>

<div className="service-card">
<div className="service-icon">
<svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
</div>
<h3>Plomberie & Réseaux</h3>
<p>Installation, rénovation et maintenance des réseaux hydrauliques, sanitaires et de plomberie pour tous types de bâtiments.</p>
<div className="service-tags">
<span className="tag">Plomberie</span><span className="tag">Tuyauterie</span><span className="tag">Sanitaire</span>
</div>
</div>

<div className="service-card">
<div className="service-icon">
<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 13h6M9 17h4" /></svg>
</div>
<h3>Travaux Architecturaux</h3>
<p>Entreprise générale pour la rénovation TCE — démolition, cloisonnement, faux-plafonds, revêtements, agencement mobilier.</p>
<div className="service-tags">
<span className="tag">CEA</span><span className="tag">TCE</span><span className="tag">Second-Œuvre</span>
</div>
</div>

<div className="service-card">
<div className="service-icon">
<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
</div>
<h3>Maintenance & Exploitation</h3>
<p>Contrats de maintenance mono ou multi-techniques — gestion des OT préventifs/curatifs, astreinte, reporting GMAO.</p>
<div className="service-tags">
<span className="tag">GMAO</span><span className="tag">Astreinte</span><span className="tag">Préventif</span>
</div>
</div>

<div className="service-card">
<div className="service-icon">
<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
</div>
<h3>Ingénierie & Conseil</h3>
<p>Études d&apos;exécution, notes de calculs, plans CAO/Autocad, bilans de puissance, DOE, audits diagnostics et plans pluriannuels.</p>
<div className="service-tags">
<span className="tag">Études</span><span className="tag">Autocad</span><span className="tag">Audit</span>
</div>
</div>
</div>
</section>
);
}