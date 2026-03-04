import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="text-right">
            <img
              src="https://hsw.org.sa/wp-content/uploads/2025/06/logo.png"
              alt="شعار الجمعية"
              className="h-16 mb-5 brightness-0 invert opacity-90"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              جمعية الخدمات الإنسانية بوتدة — جمعية أهلية غير ربحية تسعى لخدمة المجتمع وتحقيق التنمية المستدامة.
            </p>
            <p className="text-gray-600 text-xs mt-3">رقم الترخيص: 1000706800</p>
          </div>

          {/* Links */}
          <div className="text-right">
            <h4 className="text-white font-black text-lg mb-5">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "#" },
                { label: "عن الجمعية", href: "#about" },
                { label: "برامجنا", href: "#programs" },
                { label: "أخبارنا", href: "#news" },
                { label: "تواصل معنا", href: "#footer" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="text-white font-black text-lg mb-5">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-end">
                <span className="text-gray-400 text-sm">المملكة العربية السعودية، منطقة جازان، وتدة</span>
                <div className="w-9 h-9 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
              </li>
              <li className="flex items-center gap-3 justify-end">
                <a href="mailto:info@hsw.org.sa" className="text-gray-400 hover:text-white text-sm transition-colors">
                  info@hsw.org.sa
                </a>
                <div className="w-9 h-9 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
              </li>
              <li className="flex items-center gap-3 justify-end">
                <a href="https://hsw.org.sa" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors">
                  hsw.org.sa <ExternalLink className="w-3 h-3" />
                </a>
                <div className="w-9 h-9 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-gray-600 text-xs">
            جميع الحقوق محفوظة © {new Date().getFullYear()} جمعية الخدمات الإنسانية بوتدة
          </p>
          <p className="text-gray-600 text-xs">
            تحت إشراف المركز الوطني لتنمية القطاع غير الربحي
          </p>
        </div>
      </div>
    </footer>
  );
}