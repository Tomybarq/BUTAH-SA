import { motion } from "framer-motion";
import { Droplets, UtensilsCrossed, Home, GraduationCap, Heart, Users } from "lucide-react";

const programs = [
  {
    icon: Droplets,
    title: "سقيا الماء",
    desc: "توفير مياه الشرب النقية للمناطق المحتاجة وإقامة مشاريع سقيا مستدامة.",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: UtensilsCrossed,
    title: "إفطار صائم",
    desc: "توزيع وجبات الإفطار الرمضانية على الأسر الفقيرة والمحتاجة خلال شهر رمضان المبارك.",
    color: "from-orange-400 to-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Home,
    title: "الحالات الإنسانية",
    desc: "دعم الحالات الإنسانية الطارئة وتقديم المساعدات العينية والمادية للمحتاجين.",
    color: "from-red-500 to-red-700",
    bg: "bg-red-50",
  },
  {
    icon: Heart,
    title: "كفالة الأرامل",
    desc: "تقديم الكفالة المالية الشهرية للأرامل لضمان استقرار معيشتهن وأسرهن.",
    color: "from-pink-500 to-pink-700",
    bg: "bg-pink-50",
  },
  {
    icon: GraduationCap,
    title: "الدعم التعليمي",
    desc: "دعم الطلاب المحتاجين بالمستلزمات الدراسية والمنح التعليمية.",
    color: "from-purple-500 to-purple-700",
    bg: "bg-purple-50",
  },
  {
    icon: Users,
    title: "التطوع المجتمعي",
    desc: "برامج تطوعية لبناء قدرات الشباب وتعزيز روح العطاء في المجتمع.",
    color: "from-green-600 to-green-800",
    bg: "bg-green-50",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-green-700 font-bold text-sm bg-green-50 px-4 py-1.5 rounded-full mb-3">
            ما نقدمه
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            برامجنا و<span className="text-green-700">مشاريعنا</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            نقدم مجموعة متنوعة من البرامج الإنسانية والاجتماعية لخدمة المجتمع.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${program.bg} rounded-2xl p-7 group hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 text-right">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed text-right text-sm">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}