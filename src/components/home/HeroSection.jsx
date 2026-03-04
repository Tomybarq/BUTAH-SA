import React from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" dir="rtl">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#0F4D2E] via-[#1B6B3A] to-[#0A3520]" />
      
      {/* Decorative geometric patterns */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-32 right-32 w-72 h-72 border border-white rounded-full" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8A24E] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <img 
              src="https://hsw.org.sa/wp-content/uploads/2025/06/logo.png" 
              alt="جمعية الخدمات الإنسانية بوتدة" 
              className="w-16 h-16 object-contain"
            />
          </div>
        </motion.div>

        {/* Registration badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 text-xs tracking-widest text-[#C8A24E] border border-[#C8A24E]/30 rounded-full uppercase font-medium">
            رقم الترخيص: 1000706800
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
        >
          جمعية الخدمات
          <br />
          <span className="text-[#C8A24E]">الإنسانية بوتدة</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          جمعية أهلية غير ربحية تحت إشراف المركز الوطني لتنمية القطاع غير الربحي، 
          نسعى لخدمة المجتمع وتعزيز جودة حياة الأسر المحتاجة
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="https://store.hsw.org.sa" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#C8A24E] hover:bg-[#B8923E] text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-[#C8A24E]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A24E]/30 hover:-translate-y-0.5">
              <Heart className="w-5 h-5 ml-2" />
              تبرع الآن
            </Button>
          </a>
          <a href="#about">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-full backdrop-blur-sm">
              تعرف علينا
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}