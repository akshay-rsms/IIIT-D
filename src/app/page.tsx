import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramHighlights from "@/components/ProgramHighlights";
import WhyChoose from "@/components/WhyChoose";
import KeyHighlights from "@/components/KeyHighlights";
import ProgramStructure from "@/components/ProgramStructure";
import ToolsAndAdvantage from "@/components/ToolsAndAdvantage";
import DirectorMessage from "@/components/DirectorMessage";
import PedagogyAndAssessment from "@/components/PedagogyAndAssessment";
import PricingAndCertificates from "@/components/PricingAndCertificates";
import FAQAndFooter from "@/components/FAQAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProgramHighlights />
      <WhyChoose />
      <KeyHighlights />
      <ProgramStructure />
      <ToolsAndAdvantage />
      <DirectorMessage />
      <PedagogyAndAssessment />
      <PricingAndCertificates />
      <FAQAndFooter />
    </main>
  );
}
