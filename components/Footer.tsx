import Link from "next/link";

/**
 * Footer global du site.
 *
 * Les styles sont définis dans `styles/components/footer.css`, importé
 * globalement via `app/globals.css`. Aucune classe scoped ici, tout est
 * géré par les classes `.site-footer`, `.footer-inner`, etc.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span className="footer-accent" aria-hidden="true" />
      <span className="footer-glow footer-glow-1" aria-hidden="true" />
      <span className="footer-glow footer-glow-2" aria-hidden="true" />

      <div className="footer-inner">
        <div className="footer-brand">
<Link href="/" className="footer-logo" aria-label="Retour à l'accueil">
              
            </Link>
          <Link href="/" className="footer-logo" aria-label="Retour à l'accueil">
            <span
              className="footer-logo-img"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-montserrat)",
                fontWeight: 800,
                fontSize: "1.5rem",
                letterSpacing: "-0.02em",
                color: "#fff",
              }}
            >
              [LOGO]
            </span>
          </Link>

          <p className="footer-tagline">
            Entreprise multi-technique au service des professionnels :
            électricité, CVC, plomberie, désenfumage et services généraux du
            bâtiment.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Navigation</h3>
          <ul className="footer-links">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/#about">À propos</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>

            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Informations</h3>
          <ul className="footer-links">
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Contact</h3>
          <ul className="footer-contact">
            <li>
              <span>44 CHEMIN DE LA FOSSETTE, 93220 GAGNY</span>
            </li>
            <li>
              <a href="mailto:contact@asgard-group.fr">contact@asgard-group.fr</a>
            </li>

          </ul>

          <Link href="/devis" className="footer-cta">
            <span>Demander un devis</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {currentYear} <strong>ASGARD GROUP</strong>. Tous droits
            réservés.
          </p>

          <ul className="footer-legal">
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
          </ul>


        </div>
      </div>
    </footer>
  );
}
