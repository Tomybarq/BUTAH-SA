import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";

const news = [
  {
    title: "جمعية الخدمات الإنسانية بوتدة تنفّذ مشروع توزيع البرادات المنزلية",
    desc: "في إطار جهودها المتواصلة لخدمة المجتمع وتعزيز جودة حياة الأسر، نفّذت الجمعية مشروع توزيع البرادات المنزلية بدعم كريم من منصة إحسان.",
    image: "https://hsw.org.sa/wp-content/uploads/2025/10/%D8%A8%D9%88%D8%B3%D8%AA-%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF-1080x675.png",
    date: "أكتوبر 2025",
    category: "أخبار",
    href: "https://hsw.org.sa",
  },
  {
    title: "جمعية الخدمات بوتدة تُودع الكفالة المالية للأرامل",
    desc: "قدّمت الجمعية دعمها المالي للأرامل بكفالة شهرية بدعم سخي من مؤسسة فهد بن عبدالله العويضة الخيرية.",
    image: "https://hsw.org.sa/wp-content/uploads/2025/10/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%83%D9%81%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D8%B1%D8%A7%D9%85%D9%84-1-80x80.jpg",
    date: "أكتوبر 2025",
    category: "أخبار",
    href: "https://hsw.org.sa",
  },
  {
    title: "التقرير السنوي لعام 2025",
    desc: "يسعدنا مشاركتكم التقرير السنوي للجمعية لعام 2025، الذي يستعرض أبرز الإنجازات والبرامج التي نفّذتها الجمعية خلال العام.",
    image: "https://hsw.org.sa/wp-content/uploads/2025/06/IMG-20250613-WA0009.jpg",
    date: "يونيو 2025",
    category: "تقارير",
    href: "https://hsw.org.sa",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <a
            href="https://hsw.org.sa/category/news/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-green-700 font-bold hover:gap-3 transition-all duration-200"
          >
            عرض كل الأخبار <ArrowLeft className="w-5 h-5" />
          </a>
          <div className="text-right">
            <span className="inline-block text-green-700 font-bold text-sm bg-green-100 px-4 py-1.5 rounded-full mb-2">
              آخر المستجدات
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              أخبار <span className="text-green-700">الجمعية</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 block"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6 text-right">
                <div className="flex items-center gap-2 justify-end text-gray-400 text-xs mb-3">
                  <span>{item.date}</span>
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-lg font-black text-gray-900 leading-snug mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}