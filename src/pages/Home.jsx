import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import ProgramsSection from "../components/home/ProgramsSection";
import NewsSection from "../components/home/NewsSection";
import DonateSection from "../components/home/DonateSection";
import FooterSection from "../components/home/FooterSection";
import NavBar from "../components/home/NavBar";

export default function Home() {
  return (
    <div dir="rtl" className="font-arabic bg-white min-h-screen overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProgramsSection />
      <NewsSection />
      <DonateSection />
      <FooterSection />
    </div>
  );
}