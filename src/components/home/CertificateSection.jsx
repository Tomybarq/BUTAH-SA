import { motion } from "framer-motion";

export default function CertificateSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-teal-700 font-bold text-sm bg-teal-50 px-4 py-1.5 rounded-full mb-3">
            الاعتماد الرسمي
          </span>
          <h2 className="text-4xl font-black text-gray-900">
            شهادة <span className="text-teal-700">الترخيص</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-teal-100"
        >
          <img
            src="https://media.base44.com/images/public/69a8acf59dbbcb073d6e98a8/13124853f_-.png"
            alt="شهادة ترخيص جمع التبرعات - جمعية الخدمات الإنسانية بوتدة"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}