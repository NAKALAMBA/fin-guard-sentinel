import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ScanSection from "@/components/ScanSection";
import StatsSection from "@/components/StatsSection";
import ReportsSection from "@/components/ReportsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ScanSection />
      <ReportsSection />
      <Footer />
    </div>
  );
};

export default Index;
