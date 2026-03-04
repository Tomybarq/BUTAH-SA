import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const values = [
  "جمعية أهلية غير ربحية تحت إشراف المركز الوطني لتنمية القطاع غير الربحي",
  "مسجلة برقم الترخيص (1000706800)",
  "تعمل على خدمة المجتمع وتعزيز التكافل الاجتماعي",
  "تقديم الدعم للأسر الأكثر احتياجاً في المنطقة",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image side */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-green-100 rounded-3xl" />
              <div className="relative bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-10 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: "٥٠٠+", label: "مستفيد" },
                    { num: "٣٠+", label: "برنامج" },
                    { num: "١٠٠+", label: "متطوع" },
                    { num: "٢٠+", label: "شريك" },
                  ].map((item) => (
                    <div key={item.label} className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                      <div className="text-4xl font-black text-amber-400 mb-1">{item.num}</div>
                      <div className="text-green-100 text-sm font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center text-green-200 text-sm">
                  أرقام تعكس حجم العمل الخيري منذ التأسيس
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="flex-1 text-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-green-700 font-bold text-sm tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full">
              من نحن
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              عن <span className="text-green-700">الجمعية</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              جمعية الخدمات الإنسانية بوتدة، جمعية أهلية غير ربحية تحت إشراف المركز الوطني لتنمية القطاع غير الربحي. تسعى الجمعية إلى تحقيق التنمية المجتمعية الشاملة وتعزيز قيم التكافل والعطاء.
            </p>
            <ul className="space-y-3 mb-8">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-right">
                  <span className="text-gray-700 leading-relaxed flex-1">{v}</span>
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                </li>
              ))}
            </ul>
            <a
              href="https://hsw.org.sa/aboutus"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              تعرف علينا أكثر
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}