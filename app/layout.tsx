import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealEffect from "@/components/RevealEffect";
import FloatingAppCTA from "@/components/FloatingAppCTA";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

// ─── Métadonnées du site (incluant la configuration PWA) ────────────────
export const metadata: Metadata = {
  title: "ASGARD Group – Facilitateur de Projet Multi-technique",
  description:
    "Travaux et maintenance multi-technique : génie climatique, électrique, plomberie, architecture.",

  // 📱 PWA : manifest qui définit l'app installable
  manifest: "/manifest.json",

  // 📱 Configuration spécifique iPhone / iPad
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ASGARD",
  },

  // 📱 Icônes (Next.js génère les balises <link> automatiquement)
  icons: {
    icon: [
      { url: "/icons/logo-fond.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/logo-fond.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/logo-fond.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // SEO de base
  applicationName: "ASGARD Group",
  authors: [{ name: "ASGARD Group" }],
  formatDetection: {
    telephone: false,
  },
};

// ─── Viewport et couleur de la barre de statut mobile ───────────────────
export const viewport: Viewport = {
  themeColor: "#0D2F54", // bleu marine ASGARD pour la barre de statut
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />
        <RevealEffect />
        {children}
        <Footer />
        <ScrollToTop />
        <FloatingAppCTA />
      </body>
    </html>
  );
}
