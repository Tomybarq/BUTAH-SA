import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "مرخصة رسمياً",
    description: "تحت إشراف المركز الوطني لتنمية القطاع غير الربحي"
  },
  {
    icon: Users,
    title: "خدمة المجتمع",
    description: "نسعى لتقديم أفضل الخدمات الإنسانية للأسر المحتاجة"
  },
  {
    icon: Target,
    title: "أثر مستدام",
    description: "نعمل على تحقيق أثر إيجابي ومستدام في المجتمع"
  },
  {
    icon: Award,
    title: "شفافية تامة",
    description: "التزام كامل بمعايير الحوكمة والشفافية في جميع أعمالنا"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAFAF7]" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#C8A24E] text-sm font-semibold tracking-widest mb-4">
              من نحن
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              عن <span className="text-[#1B6B3A]">الجمعية</span>
            </h2>
            <div className="w-16 h-1 bg-[#C8A24E] rounded-full mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              جمعية الخدمات الإنسانية بوتدة، جمعية أهلية غير ربحية تحت إشراف المركز الوطني لتنمية القطاع غير الربحي، مسجلة برقم (1000706800).
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              نعمل بشكل مستمر على تقديم الخدمات الإنسانية والاجتماعية للفئات الأكثر احتياجاً في المجتمع، من خلال برامج ومبادرات متنوعة تسهم في تحسين جودة الحياة وتعزيز التكافل الاجتماعي.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B6B3A]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B6B3A] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#1B6B3A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}