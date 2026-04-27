"use client";

import { useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
};

const initialState: FormData = {
  name: "",
  company: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        console.error("Erreur API contact :", data);
        throw new Error("Erreur lors de l'envoi");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner reveal">
        <div>
          <span className="section-label">Nous contacter</span>
          <h2 className="section-title">
            Parlons de <em>votre projet</em>
          </h2>
          <p>
            ASGARD Group est à votre écoute pour tout projet de maintenance, de
            rénovation ou d&apos;ingénierie technique. Contactez-nous pour un
            premier échange.
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:contact@asgard-group.fr">contact@asgard-group.fr</a>
          </div>

          <div className="contact-detail">
            <span>Site web</span>
            <a href="https://asgardgroup.fr" target="_blank" rel="noreferrer">
              asgardgroup.fr
            </a>
          </div>

          <div className="contact-detail">
            <span>Adresse</span>
            <p>
              44 Chemin de la Fossette
              <br />
              93220 GAGNY, Île-de-France
            </p>
          </div>

          <div className="contact-detail">
            <span>Fondée en</span>
            <p>2019</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Société</label>
              <input
                id="company"
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Votre société"
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Type de prestation</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              autoComplete="off"
            >
              <option value="">Sélectionner…</option>
              <option value="Maintenance & Exploitation">
                Maintenance & Exploitation
              </option>
              <option value="Génie Climatique (CVC / Froid)">
                Génie Climatique (CVC / Froid)
              </option>
              <option value="Génie Électrique (CFO / CFA)">
                Génie Électrique (CFO / CFA)
              </option>
              <option value="Plomberie & Réseaux">
                Plomberie & Réseaux
              </option>
              <option value="Travaux Architecturaux (CEA)">
                Travaux Architecturaux (CEA)
              </option>
              <option value="Ingénierie & Conseil">
                Ingénierie & Conseil
              </option>
              <option value="Appel d&apos;offres">Appel d&apos;offres</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet ou votre besoin…"
              required
              autoComplete="off"
            />
          </div>

          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer le message"}
          </button>

          {status === "success" && (
            <p style={{ color: "#176f28", marginTop: "1rem" }}>
               Message envoyé avec succès !
            </p>
          )}

          {status === "error" && (
            <p style={{ color: "#810303", marginTop: "1rem" }}>
               Erreur lors de l&apos;envoi. Réessayez.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}