"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const rseSubItems = [
  {
    href: "/rse/environnement",
    label: "Environnement",
    desc: "Empreinte carbone, économie circulaire, déchets",
  },
  {
    href: "/rse/societal",
    label: "Engagement sociétal",
    desc: "Inclusion par l'emploi, santé et sécurité",
  },
  {
    href: "/rse/prevention",
    label: "Prévention",
    desc: "Maîtrise des risques sur site occupé",
  },
];

const navItems = [
  { href: "/services",   label: "Notre savoir-faire" },
  { href: "/references", label: "Nos références" },
  { href: "/rse",        label: "RSE", dropdown: true },
  { href: "/contact",    label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="Accueil">
          <Image
            src="/logos/logoo3.png"
            alt="Asgard Group"
            width={160}
            height={48}
            priority
          />
        </Link>

        <nav className="header-nav" aria-label="Navigation principale">
          <ul>
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              if (item.dropdown) {
                const isDropdownOpen = openDropdown === item.href;
                return (
                  <li
                    key={item.href}
                    className="header-dropdown-wrap"
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`header-link header-link-dropdown${active ? " active" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="header-chevron"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </Link>

                    <div
                      className={`header-dropdown${isDropdownOpen ? " open" : ""}`}
                      role="menu"
                    >
                      <ul className="header-dropdown-list">
                        {rseSubItems.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="header-dropdown-item"
                              role="menuitem"
                            >
                              <span className="header-dropdown-item-bar" />
                              <span className="header-dropdown-item-label">
                                {sub.label}
                              </span>
                              <span className="header-dropdown-item-desc">
                                {sub.desc}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`header-link${active ? " active" : ""}`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/devis" className="header-cta">
            <span>Demander un devis</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <button
            className={`header-burger${isOpen ? " open" : ""}`}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className="mobile-nav-list">
          {navItems.map((item, i) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            if (item.dropdown) {
              return (
                <li
                  key={item.href}
                  style={{ animationDelay: `${0.08 + i * 0.06}s` }}
                >
                  <Link
                    href={item.href}
                    className={`mobile-link${active ? " active" : ""}`}
                  >
                    <span className="mobile-link-num">0{i + 1}</span>
                    <span className="mobile-link-label">{item.label}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>

                  <ul className="mobile-submenu">
                    {rseSubItems.map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href} className="mobile-sublink">
                          <span className="mobile-sublink-bullet" />
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li
                key={item.href}
                style={{ animationDelay: `${0.08 + i * 0.06}s` }}
              >
                <Link
                  href={item.href}
                  className={`mobile-link${active ? " active" : ""}`}
                >
                  <span className="mobile-link-num">0{i + 1}</span>
                  <span className="mobile-link-label">{item.label}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </li>
            );
          })}

          <li
            className="mobile-cta-wrap"
            style={{ animationDelay: `${0.08 + navItems.length * 0.06}s` }}
          >
            <Link href="/devis" className="mobile-cta">
              Demander un devis
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}