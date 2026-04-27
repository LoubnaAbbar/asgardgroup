export default function AboutSection() {
return (
<section className="about" id="about">
<div className="about-grid reveal">
<div className="about-text">
<span className="section-label">Qui sommes-nous</span>
<h2 className="section-title">
Un double socle de <em>compétences</em>
</h2>

<p>
Créée en 2019, ASGARD Group est une entreprise spécialisée dans la réalisation de travaux et la maintenance des installations techniques des bâtiments tertiaires.
</p>
<p>
Notre activité repose sur <strong>deux compétences principales</strong> : la maintenance et l&apos;exploitation technique, et les travaux de rénovation. Ce double socle nous permet d&apos;apporter à nos clients des solutions globales en intervenant sur l&apos;intégralité de la chaîne de valeurs.
</p>
<p>
Nous disposons d&apos;un savoir-faire multidisciplinaire couvrant le chauffage, la ventilation, le froid/climatisation, la plomberie, l&apos;électricité et les travaux de corps d&apos;état architecturaux.
</p>

<div className="quals">
<div className="qual-item">
<div className="qual-dot"></div>
<span>
<strong>GE-FRO_21</strong> — Attestation d&apos;aptitude Froid, Catégorie 1 — Technicien expérimenté
</span>
</div>

<div className="qual-item">
<div className="qual-dot"></div>
<span>
<strong>Habilitations électriques</strong> — B1(V), BC, H0-H0V — Basse Tension (BT)
</span>
</div>

<div className="qual-item">
<div className="qual-dot"></div>
<span>
<strong>ASGARD Group</strong> dispose de 120 m² d’espace de stockage, 80 m² de bureaux et 50 m² dédiés aux études.
</span>
</div>
</div>
</div>

<div className="about-visual">
<div className="ca-chart">
<h4>Chiffre d&apos;affaires</h4>

<div className="ca-bar">
<div className="ca-bar-label"><span>2022</span><span>1,2 M€</span></div>
<div className="ca-track"><div className="ca-fill" style={{ width: "44%" }}></div></div>
</div>

<div className="ca-bar">
<div className="ca-bar-label"><span>2023</span><span>1,6 M€</span></div>
<div className="ca-track"><div className="ca-fill" style={{ width: "59%" }}></div></div>
</div>

<div className="ca-bar">
<div className="ca-bar-label"><span>2024</span><span>2,7 M€</span></div>
<div className="ca-track"><div className="ca-fill" style={{ width: "100%" }}></div></div>
</div>

<p style={{ fontSize: "0.8rem", color: "var(--gris-clair)", marginTop: "2rem", lineHeight: 1.7 }}>
Croissance constante depuis notre création, portée par la confiance de grands comptes comme ENGIE, SODEXO, SPIE et la Région Île-de-France.
</p>
</div>
</div>
</div>
</section>
);
}