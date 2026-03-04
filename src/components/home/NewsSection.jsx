import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";

const news = [
  {
    title: "جمعية الخدمات الإنسانية بوتدة تنفّذ مشروع توزيع البرادات المنزلية بدعم من منصة إحسان",
    excerpt: "في إطار جهودها المتواصلة لخدمة المجتمع وتعزيز جودة حياة الأسر المحتاجة، نثذت الجمعية مشروع توزيع البرادات المنزلية...",
    image: "https://hsw.org.sa/wp-content/uploads/2025/10/%D8%A8%D9%88%D8%B3%D8%AA-%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF-1080x675.png",
    date: "2025",
    featured: true
  },
  {
    title: "جمعية الخدمات بوتدة تُودع الكفالة المالية للأرامل بدعم من مؤسسة فهد بن عبدالله العويضة الخيرية",
    excerpt: "ضمن مشاريع الجمعية لكفالة الأرامل والمحتاجات، تم إيداع الكفالة المالية بنجاح...",
    image: "https://hsw.org.sa/wp-content/uploads/2025/10/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%83%D9%81%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D8%B1%D8%A7%D9%85%D9%84-1-80x80.jpg",
    date: "2025",
    featured: false
  }
];

export default function NewsSection() {
  const featured = news[0];
  const otherNews = news.slice(1);

  return (
    <section id="news" className="py-24 md:py-32 bg-[#FAFAF7]" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-[#C8A24E] text-sm font-semibold tracking-widest">أحدث الأخبار</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-3">
              أخبار <span className="text-[#1B6B3A]">الجمعية</span>
            </h2>
          </div>
          <a
            href="https://hsw.org.sa/category/news/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#1B6B3A] font-semibold hover:text-[#C8A24E] transition-colors duration-300"
          >
            جميع الأخبار
            <ArrowLeft className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Featured news */}
          <motion.a
            href="https://hsw.org.sa/category/news/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 group cursor-pointer block"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] mb-6">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <span className="inline-flex items-center gap-1.5 text-white/80 text-sm mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#1B6B3A] transition-colors duration-300 mb-3 leading-relaxed">
              {featured.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">{featured.excerpt}</p>
          </motion.a>

          {/* Other news */}
          <div className="lg:col-span-2 space-y-6">
            {otherNews.map((item, index) => (
              <motion.a
                key={index}
                href="https://hsw.org.sa/category/news/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group flex gap-5 bg-white rounded-2xl p-4 border border-gray-100 hover:border-[#1B6B3A]/20 hover:shadow-lg transition-all duration-300 cursor-pointer block"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gray-400 mb-2 block">{item.date}</span>
                  <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#1B6B3A] transition-colors duration-300 line-clamp-3 text-sm leading-relaxed">
                    {item.title}
                  </h4>
                </div>
              </motion.a>
            ))}

            {/* Annual Report Card */}
            <motion.a
              href="https://hsw.org.sa/category/reports/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group block bg-gradient-to-bl from-[#1B6B3A] to-[#0A3520] rounded-2xl p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <span className="text-[#C8A24E] text-xs font-semibold tracking-wider">التقارير</span>
              <h4 className="text-xl font-bold mt-2 mb-3">التقرير السنوي لعام 2025</h4>
              <p className="text-white/60 text-sm mb-4">اطلع على إنجازات الجمعية وتقاريرها السنوية</p>
              <span className="inline-flex items-center gap-2 text-[#C8A24E] text-sm font-semibold">
                اقرأ التقرير
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}