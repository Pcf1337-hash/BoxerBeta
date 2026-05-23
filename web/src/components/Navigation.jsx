import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, PawPrint, Settings } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Manifest", href: "/#manifest" },
    { name: "Zimmer", href: "/#rooms" },
    { name: "Galerie", href: "/galerie" },
    { name: "Neuigkeiten", href: "/neuigkeiten" },
    { name: "Hofleben", href: "/#lifestyle" },
    { name: "Gästebuch", href: "/gaestebuch" },
    { name: "Kontakt", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <PawPrint
              className={`w-8 h-8 ${isScrolled ? "text-orange-600" : "text-white"}`}
            />
          </motion.div>
          <span
            className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            Boxerhof
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? "text-gray-600" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              isScrolled
                ? "bg-orange-600 text-white hover:bg-orange-700 shadow-md"
                : "bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
            }`}
          >
            Jetzt anfragen
          </a>
          <a
            href="/admin"
            title="Admin"
            className={`p-2 rounded-full transition-colors ${isScrolled ? "text-gray-400 hover:text-gray-700" : "text-white/40 hover:text-white/80"}`}
          >
            <Settings size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-orange-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-md"
              >
                Jetzt anfragen
              </a>
              <a href="/admin" className="text-sm text-center text-gray-400">
                Admin-Bereich
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
