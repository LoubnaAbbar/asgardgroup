"use client";

import { useEffect } from "react";

export default function ExpertiseSection() {
  useEffect(() => {
    const items = document.querySelectorAll(".exp-nav-item");

    const handleClick = (item) => () => {
      const panel = item.getAttribute("data-panel");

      document.querySelectorAll(".exp-nav-item").forEach((i) => i.classList.remove("active"));
      document.querySelectorAll(".exp-panel").forEach((p) => p.classList.remove("active"));

      item.classList.add("active");

      if (panel) {
        document.getElementById("panel-" + panel)?.classList.add("active");
      }
    };

    const handlers = [];
    items.forEach((item) => {
      const handler = handleClick(item);
      item.addEventListener("click", handler);
      handlers.push({ item, handler });
    });

    return () => {
      handlers.forEach(({ item, handler }) => {
        item.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <section className="expertise" id="expertise">
      <span className="section-label">Domaines d&apos;intervention</span>
      <h2 className="section-title" style={{ marginBottom: "3rem" }}>
        Notre <em>expertise</em> technique
      </h2>

      <div className="expertise-grid reveal">
        <div className="expertise-nav">
          {/* ─── Section 1 : Travaux ─── */}
          <div className="exp-nav-group">
            <div className="exp-nav-group-title">Travaux de rénovation & installation</div>
            <div className="exp-nav-item active" data-panel="cvc">Chauffage & Ventilation</div>
            <div className="exp-nav-item" data-panel="froid">Froid & Climatisation</div>
            <div className="exp-nav-item" data-panel="elec">Génie Électrique</div>
            <div className="exp-nav-item" data-panel="plomb">Plomberie</div>
            <div className="exp-nav-item" data-panel="archi">Travaux Architecturaux</div>
          </div>

          {/* ─── Section 2 : Exploitation & Maintenance ─── */}
          <div className="exp-nav-group">
            <div className="exp-nav-group-title">Exploitation & Maintenance</div>
            <div className="exp-nav-item" data-panel="maint-multi">Maintenance multi-technique</div>
            <div className="exp-nav-item" data-panel="intervention">Intervention</div>
            <div className="exp-nav-item" data-panel="depannage">Dépannage curatif</div>
            <div className="exp-nav-item" data-panel="audit">Audit de prise en charge</div>
          </div>
        </div>

        <div className="exp-panels">
          {/* ═══ SECTION 1 : TRAVAUX ═══ */}

          <div className="exp-panel active" id="panel-cvc">
            <h3>Chauffage & Ventilation</h3>
            <p>Conception, réalisation et maintenance des installations de production et distribution thermique pour sites tertiaires, commerciaux et habitat.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>Chaudières</strong>Gaz, fuel, biomasse</div>
              <div className="exp-item"><strong>Pompes à chaleur</strong>Air/eau, eau/eau</div>
              <div className="exp-item"><strong>Sous-stations</strong>Raccordement réseaux urbains</div>
              <div className="exp-item"><strong>CTA / VMC</strong>Centrales de traitement d&apos;air</div>
              <div className="exp-item"><strong>Réseaux de gaines</strong>Distribution, équilibrage</div>
              <div className="exp-item"><strong>Régulation</strong>GTB, capteurs, actionneurs</div>
            </div>
          </div>

          <div className="exp-panel" id="panel-froid">
            <h3>Froid & Climatisation</h3>
            <p>Installation et maintenance de systèmes VRV, groupes froids, armoires de climatisation pour tous types de bâtiments.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>VRV / DRV</strong>Systèmes 2 et 3 tubes</div>
              <div className="exp-item"><strong>Groupes froids</strong>Condensation eau/air</div>
              <div className="exp-item"><strong>Aéroréfrigérants</strong>Tours de refroidissement</div>
              <div className="exp-item"><strong>Unités intérieures</strong>Cassettes, gainables, consoles</div>
              <div className="exp-item"><strong>Récupération fluides</strong>Attestation Catégorie 1</div>
              <div className="exp-item"><strong>Eau glacée</strong>Production, distribution</div>
            </div>
          </div>

          <div className="exp-panel" id="panel-elec">
            <h3>Génie Électrique CFO/CFA</h3>
            <p>De l&apos;alimentation en énergie du bâtiment à la mise en lumière de vos espaces et aux systèmes de sécurité.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>TGBT / TD</strong>Tableaux généraux BT</div>
              <div className="exp-item"><strong>Distribution BT</strong>Réseaux terminaux</div>
              <div className="exp-item"><strong>Éclairage</strong>LED, BAES, relamping</div>
              <div className="exp-item"><strong>IRVE</strong>Bornes recharge VE</div>
              <div className="exp-item"><strong>Contrôle d&apos;accès</strong>Anti-intrusion, interphonie</div>
              <div className="exp-item"><strong>SSI / Détection</strong>Incendie, sonorisation</div>
            </div>
          </div>

          <div className="exp-panel" id="panel-plomb">
            <h3>Plomberie & Réseaux</h3>
            <p>Installation, rénovation et maintenance complète des réseaux hydrauliques et sanitaires.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>Réseaux EF/ECS</strong>Distribution eau froide/chaude</div>
              <div className="exp-item"><strong>Équipements sanitaires</strong>Pose, raccordement</div>
              <div className="exp-item"><strong>Chauffe-eau</strong>Ballons, production ECS</div>
              <div className="exp-item"><strong>Colonnes sèches</strong>Incendie, sécurité</div>
              <div className="exp-item"><strong>Dégorgement</strong>Entretien réseaux EU/EV</div>
              <div className="exp-item"><strong>Calorifuge</strong>Isolation thermique réseaux</div>
            </div>
          </div>

          <div className="exp-panel" id="panel-archi">
            <h3>Travaux Corps d&apos;État Architecturaux</h3>
            <p>En tant qu&apos;entreprise générale, ASGARD Group planifie et réalise l&apos;ensemble du processus de rénovation.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>Démolition / Curage</strong>Techniques et second-œuvre</div>
              <div className="exp-item"><strong>Cloisonnement</strong>BA13, cloisons modulaires</div>
              <div className="exp-item"><strong>Faux-plafonds</strong>Dalles, placo, acoustique</div>
              <div className="exp-item"><strong>Revêtements sols</strong>Carrelage, parquet, moquette</div>
              <div className="exp-item"><strong>Revêtements muraux</strong>Peinture, faïence</div>
              <div className="exp-item"><strong>Agencement</strong>Mobilier, serrurerie</div>
            </div>
          </div>

          {/* ═══ SECTION 2 : EXPLOITATION & MAINTENANCE ═══ */}

          <div className="exp-panel" id="panel-maint-multi">
            <h3>Maintenance multi-technique</h3>
            <p>Contrats d&apos;entretien tous corps d&apos;état pour assurer la pérennité, la performance et la conformité réglementaire de vos installations techniques.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>OT Préventifs</strong>Gammes de maintenance planifiées</div>
              <div className="exp-item"><strong>Contrats P1/P2/P3</strong>Combustible, conduite, garantie</div>
              <div className="exp-item"><strong>GMAO</strong>Suivi, reporting, RMA/RME</div>
              <div className="exp-item"><strong>Conformité réglementaire</strong>Décret tertiaire, veille</div>
              <div className="exp-item"><strong>Contrôles périodiques</strong>Organismes agréés, suivi</div>
              <div className="exp-item"><strong>Optimisation énergétique</strong>Audit, plan d&apos;action</div>
            </div>
          </div>

          <div className="exp-panel" id="panel-intervention">
            <h3>Intervention</h3>
            <p>Équipes techniques mobilisables rapidement pour toutes vos demandes ponctuelles, petits travaux et modifications d&apos;installations existantes.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>Petits travaux</strong>Modifications, adaptations</div>
              <div className="exp-item"><strong>Mise en conformité</strong>Remise à niveau réglementaire</div>
              <div className="exp-item"><strong>Travaux planifiés</strong>Interventions programmées</div>
              <div className="exp-item"><strong>Multi-technique</strong>CVC, élec, plomberie</div>
              <div className="exp-item"><strong>Reporting détaillé</strong>Comptes-rendus, photos</div>
              <div className="exp-item"><strong>Coordination</strong>Multi-corps d&apos;état</div>
            </div>
          </div>

          <div className="exp-panel" id="panel-depannage">
            <h3>Dépannage curatif</h3>
            <p>Service d&apos;intervention rapide pour rétablir vos installations en cas de panne ou de dysfonctionnement, avec astreinte 24h/24 et 7j/7.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>OT Curatifs</strong>Dépannage, remise en service</div>
              <div className="exp-item"><strong>Astreinte 24/7</strong>Intervention d&apos;urgence</div>
              <div className="exp-item"><strong>Diagnostic technique</strong>Analyse, recherche de panne</div>
              <div className="exp-item"><strong>Réparations</strong>Toutes spécialités techniques</div>
              <div className="exp-item"><strong>Pièces détachées</strong>Stock, approvisionnement rapide</div>
              <div className="exp-item"><strong>Suivi GMAO</strong>Traçabilité des interventions</div>
            </div>
          </div>

          <div className="exp-panel" id="panel-audit">
            <h3>Audit de prise en charge</h3>
            <p>État des lieux complet et structuré de vos installations en amont d&apos;un contrat de maintenance, pour identifier les actions prioritaires.</p>
            <div className="exp-items">
              <div className="exp-item"><strong>État des lieux</strong>Inventaire technique complet</div>
              <div className="exp-item"><strong>Diagnostic installation</strong>Analyse de l&apos;existant</div>
              <div className="exp-item"><strong>Carnet sanitaire</strong>Mise à jour, création</div>
              <div className="exp-item"><strong>Plan de levée</strong>Réserves, préconisations</div>
              <div className="exp-item"><strong>Évaluation conformité</strong>Réglementaire et sécurité</div>
              <div className="exp-item"><strong>Reporting</strong>Synthèse, recommandations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}