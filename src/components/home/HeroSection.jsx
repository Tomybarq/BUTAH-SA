import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-green-900 via-green-800 to-green-700" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-32 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/40 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                جمعية أهلية غير ربحية · رقم الترخيص: 1000706800
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                جمعية الخدمات
                <br />
                <span className="text-amber-400">الإنسانية</span>
                <br />
                بوتدة
              </h1>
              <p className="text-green-100 text-lg leading-relaxed max-w-xl mb-10">
                نعمل على تقديم الدعم والرعاية لأفراد المجتمع، وتحسين جودة حياة الأسر المحتاجة في منطقة وتدة وما حولها.
              </p>
              <div className="flex flex-wrap gap-4 justify-end">
                <a
                  href="#donate"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base"
                >
                  <Heart className="w-5 h-5" />
                  تبرع الآن
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 font-bold px-8 py-4 rounded-full transition-all duration-300 text-base"
                >
                  تعرف علينا
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Logo / Visual */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl" />
              <div className="absolute inset-6 bg-white/15 rounded-full border border-white/20" />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <img
                  src="https://hsw.org.sa/wp-content/uploads/2025/06/logo.png"
                  alt="شعار جمعية الخدمات الإنسانية بوتدة"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}