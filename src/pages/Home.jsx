import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import NewsSection from "../components/home/NewsSection";
import FooterSection from "../components/home/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Tajawal', 'Inter', sans-serif" }}>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <NewsSection />
      <FooterSection />
    </div>
  );
}