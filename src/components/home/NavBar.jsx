import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "عن الجمعية", href: "#about" },
  { label: "برامجنا", href: "#programs" },
  { label: "أخبارنا", href: "#news" },
  { label: "تبرع الآن", href: "#donate" },
  { label: "تواصل معنا", href: "#footer" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://hsw.org.sa/wp-content/uploads/2025/06/logo.png"
            alt="شعار الجمعية"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 hover:text-green-700 ${
                scrolled ? "text-gray-700" : "text-white drop-shadow"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Search className={`w-5 h-5 cursor-pointer ${scrolled ? "text-gray-600" : "text-white"}`} />
          <a
            href="#donate"
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            تبرع الآن
          </a>
        </div>

        {/* Mobile menu btn */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-gray-700 font-semibold border-b border-gray-50 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#donate"
              className="block text-center bg-amber-500 text-white font-bold py-3 rounded-full"
            >
              تبرع الآن
            </a>
          </div>
        </div>
      )}
    </header>
  );
}