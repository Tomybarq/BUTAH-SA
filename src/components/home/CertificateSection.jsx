import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

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
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-teal-100"
          dir="rtl"
        >
          {/* Header teal bar */}
          <div className="bg-gradient-to-l from-teal-600 to-teal-800 px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="w-7 h-7 text-teal-200" />
              <span className="font-black text-lg">شهادة ترخيص ( ترخيص جمع تبرعات - برنامج )</span>
            </div>
            <span className="text-teal-200 text-xs font-medium">المركز الوطني لتنمية القطاع غير الربحي</span>
          </div>

          {/* Body */}
          <div className="bg-gradient-to-br from-gray-50 to-teal-50 px-8 py-8">
            {/* Main info */}
            <div className="text-center space-y-3 mb-8 border-b border-teal-100 pb-8">
              <p className="text-gray-800 text-lg">
                <span className="font-black text-teal-700">اسم الكيان</span> | الخدمات الإنسانية بوتدة
              </p>
              <p className="text-gray-800 text-lg">
                <span className="font-black text-teal-700">نوع الكيان</span> | جمعية أهلية
              </p>
              <p className="text-gray-800 text-lg">
                <span className="font-black text-teal-700">تاريخ التأسيس</span> | 2024-12-17
              </p>
              <p className="text-gray-800 text-lg">
                <span className="font-black text-teal-700">مقرها</span> | منطقة حائل
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-loose text-center max-w-2xl mx-auto mb-8">
              بناء على المعلومات المسجلة أعلاه، يصرح للكيان إقامة ترخيص لجمع التبرعات - برنامج، وبموجب موافقة المركز الوطني لتنمية القطاع غير الربحي كجهة مشرفة على هذا الكيان. تم تطبيق اللوائح والتعليمات والضوابط الخاصة بجمع التبرعات على هذا الترخيص مع أخذ الموافقات من الجهات المعنية وذات العلاقة.
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "رقم ترخيص الكيان", value: "1000706800" },
                { label: "رقم ترخيص التبرعات", value: "14092" },
                { label: "تاريخ الإصدار", value: "2025 - 03 - 26" },
                { label: "تاريخ الانتهاء", value: "2025 - 12 - 31" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl px-6 py-4 flex items-center justify-between border border-teal-100 shadow-sm"
                >
                  <span className="font-black text-gray-900">{item.value}</span>
                  <span className="text-gray-500 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}