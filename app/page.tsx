import { HeroSection } from "./components/HeroSection";
import { DescriptionSection } from "./components/DescriptionSection";
import { WorkplacesSection } from "./components/WorkplacesSection";
import { SkillsSection } from "./components/SkillsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <DescriptionSection />
      <WorkplacesSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
