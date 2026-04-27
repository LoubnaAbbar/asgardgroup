import DevisSection from "@/components/DevisSection";

import RevealEffect from "@/components/RevealEffect";

export const metadata = {
  title: "Demande de devis | ASGARD Group",
  description:
    "Demandez un devis pour vos projets en génie climatique, électrique, plomberie, architecture et maintenance.",
};

export default function DevisPage() {
    
  return (
    <>
      
      <RevealEffect />
      <main>
        <DevisSection />
      </main>
      
    </>
  );
}