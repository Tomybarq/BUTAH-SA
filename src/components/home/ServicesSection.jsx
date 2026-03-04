import React from "react";
import { motion } from "framer-motion";
import { Droplets, UtensilsCrossed, Home, Heart, Package, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "الحالات الإنسانية",
    description: "دعم ومساندة الحالات الإنسانية الطارئة والمحتاجين في المجتمع",
    color: "from-rose-500/10 to-rose-500/5",
    iconColor: "text-rose-600",
    link: "https://store.hsw.org.sa/p/118870"
  },
  {
    icon: Droplets,
    title: "سقيا الماء",
    description: "توفير المياه النظيفة للمحتاجين وتحسين جودة حياتهم",
    color: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-600",
    link: "https://store.hsw.org.sa/p/118873"
  },
  {
    icon: UtensilsCrossed,
    title: "إفطار صائم",
    description: "تقديم وجبات الإفطار للصائمين خلال شهر رمضان المبارك",
    color: "from-amber-500/10 to-amber-500/5",
    iconColor: "text-amber-600",
    link: "https://store.hsw.org.sa/p/118868"
  },
  {
    icon: Home,
    title: "كفالة الأرامل",
    description: "توفير الكفالة المالية والدعم المعيشي للأرامل والمحتاجات",
    color: "from-purple-500/10 to-purple-500/5",
    iconColor: "text-purple-600",
    link: "https://store.hsw.org.sa/p/118871"
  },
  {
    icon: Package,
    title: "السلال الغذائية",
    description: "توزيع السلال الغذائية على الأسر المحتاجة بشكل دوري",
    color: "from-emerald-500/10 to-emerald-500/5",
    iconColor: "text-emerald-600",
    link: "https://store.hsw.org.sa/p/118874"
  },
  {
    icon: HandHeart,
    title: "البرادات المنزلية",
    description: "توزيع البرادات المنزلية لتحسين الظروف المعيشية للأسر",
    color: "from-teal-500/10 to-teal-500/5",
    iconColor: "text-teal-600",
    link: "https://store.hsw.org.sa/p/118872"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A24E] text-sm font-semibold tracking-widest">خدماتنا</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4">
            مشاريع <span className="text-[#1B6B3A]">التبرع</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            ساهم معنا في دعم المحتاجين من خلال مشاريعنا المتنوعة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-[#FAFAF7] rounded-3xl p-8 border border-gray-100 hover:border-[#1B6B3A]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#1B6B3A]/5 hover:-translate-y-1 cursor-pointer block"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-[#1B6B3A] group-hover:text-[#C8A24E] transition-colors duration-300">
                  تبرع الآن
                  <svg className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}