
import ContactSection from "@/components/ContactSection";

import RevealEffect from "@/components/RevealEffect";

export const metadata = {
  title: "Contact | ASGARD Group",
  description:
    "Contactez ASGARD Group pour vos projets en génie climatique, électrique, plomberie, architecture et maintenance.",
};

export default function ContactPage() {
  return (
    <>
     
      <RevealEffect />
      <main>
        <ContactSection />
      </main>
     
    </>
  );
}