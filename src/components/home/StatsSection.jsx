import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Activity, HandHeart } from "lucide-react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("ar-SA")}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Users, value: 1500, label: "مستفيد", suffix: "+" },
  { icon: Activity, value: 50, label: "نشاط ومبادرة", suffix: "+" },
  { icon: HandHeart, value: 200, label: "متطوع", suffix: "+" }
];

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#0F4D2E] via-[#1B6B3A] to-[#0A3520]" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
        <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A24E] text-sm font-semibold tracking-widest">أرقامنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">إنجازاتنا بالأرقام</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A24E]/20 group-hover:border-[#C8A24E]/30 transition-all duration-500">
                <stat.icon className="w-7 h-7 text-[#C8A24E]" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}