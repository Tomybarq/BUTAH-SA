import React from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
{ label: "عن الجمعية", href: "https://hsw.org.sa/aboutus" },
{ label: "أخبارنا", href: "https://hsw.org.sa/category/news/" },
{ label: "التقارير", href: "https://hsw.org.sa/category/reports/" },
{ label: "الوظائف", href: "https://hsw.org.sa/" },
{ label: "اتصل بنا", href: "https://hsw.org.sa/" }];


const donationLinks = [
{ label: "الحالات الإنسانية", href: "https://store.hsw.org.sa/p/118870" },
{ label: "سقيا الماء", href: "https://store.hsw.org.sa/p/118873" },
{ label: "إفطار صائم", href: "https://store.hsw.org.sa/p/118868" },
{ label: "كفالة الأرامل", href: "https://store.hsw.org.sa/p/118871" }];


export default function FooterSection() {
  return (
    <footer className="bg-[#0A1F14] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://hsw.org.sa/wp-content/uploads/2025/06/logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain" />
              
              <div>
                <h3 className="font-bold text-lg">جمعية الخدمات الإنسانية</h3>
                <p className="text-white/50 text-sm">بوتدة</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              جمعية أهلية غير ربحية تحت إشراف المركز الوطني لتنمية القطاع غير الربحي
            </p>
            <p className="text-[#C8A24E] text-sm font-medium">
              رقم الترخيص: 1000706800
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative">
              روابط سريعة
              <div className="absolute -bottom-2 right-0 w-8 h-0.5 bg-[#C8A24E] rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) =>
              <li key={i}>
                  <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#C8A24E] transition-colors duration-300 text-sm inline-flex items-center gap-2">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Donation Projects */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative">
              مشاريع التبرع
              <div className="absolute -bottom-2 right-0 w-8 h-0.5 bg-[#C8A24E] rounded-full" />
            </h4>
            <ul className="space-y-3">
              {donationLinks.map((link, i) =>
              <li key={i}>
                  <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#C8A24E] transition-colors duration-300 text-sm inline-flex items-center gap-2">
                  
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative">
              تواصل معنا
              <div className="absolute -bottom-2 right-0 w-8 h-0.5 bg-[#C8A24E] rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A24E] mt-1 flex-shrink-0" />
                <span className="text-white/50 text-sm">المملكة العربية السعودية - وتدة</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A24E] flex-shrink-0" />
                <a href="mailto:info@butah-sa.org" className="text-white/50 hover:text-[#C8A24E] transition-colors text-sm">info@butah-

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} جمعية الخدمات الإنسانية بوتدة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-2">
            <a href="https://hsw.org.sa" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#C8A24E] transition-colors text-sm">
              hsw.org.sa
            </a>
          </div>
        </div>
      </div>
    </footer>);

}