import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}