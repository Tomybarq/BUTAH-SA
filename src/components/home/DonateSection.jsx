import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";

const donateLinks = [
  { label: "الحالات الإنسانية", href: "https://store.hsw.org.sa/p/118870" },
  { label: "سقيا الماء", href: "https://store.hsw.org.sa/p/118873" },
  { label: "إفطار صائم", href: "https://store.hsw.org.sa/p/118868" },
  { label: "كسوة العيد", href: "https://store.hsw.org.sa/p/118871" },
  { label: "السلة الغذائية", href: "https://store.hsw.org.sa/p/118872" },
];

export default function DonateSection() {
  return (
    <section id="donate" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-950" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-20 h-20 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-400/30">
            <Heart className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-5">
            شارك في العطاء
          </h2>
          <p className="text-green-200 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            تبرعاتكم تُحدث فارقاً حقيقياً في حياة الأسر المحتاجة. اختر المشروع الذي تريد دعمه وساهم معنا في البناء.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {donateLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/20 hover:border-white/40 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm"
              >
                {link.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>

          <a
            href="https://store.hsw.org.sa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-amber-500/30 transition-all duration-300"
          >
            <Heart className="w-6 h-6" />
            تبرع الآن
          </a>
        </motion.div>
      </div>
    </section>
  );
}