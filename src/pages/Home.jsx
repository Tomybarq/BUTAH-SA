import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import CertificateSection from "../components/home/CertificateSection";
import ServicesSection from "../components/home/ServicesSection";
import NewsSection from "../components/home/NewsSection";
import FooterSection from "../components/home/FooterSection";
import WhatsAppButton from "../components/home/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Tajawal', 'Inter', sans-serif" }}>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <CertificateSection />
      <StatsSection />
      <ServicesSection />
      <NewsSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}