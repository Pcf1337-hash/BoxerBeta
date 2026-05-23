import React from "react";
import { PawPrint, Instagram, Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white py-20 overflow-hidden relative"
      style={{ backgroundColor: "#1a0e04" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <PawPrint className="w-10 h-10" style={{ color: "#c4a35a" }} />
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Boxerhof
              </span>
            </div>
            <p
              className="text-lg max-w-sm mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Die exklusive Hundepension ohne Zwinger. Seit 2009 mit Herz und
              Leidenschaft fuer euren Vierbeiner.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#c4522a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.06)")
                  }
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Navigation</h4>
            <ul
              className="space-y-4"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {[
                { label: "Manifest", href: "/#manifest" },
                { label: "Zimmer", href: "/#rooms" },
                { label: "Galerie", href: "/galerie" },
                { label: "Neuigkeiten", href: "/neuigkeiten" },
                { label: "Hofleben", href: "/#lifestyle" },
                { label: "Gaestebuch", href: "/gaestebuch" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Rechtliches</h4>
            <ul
              className="space-y-4"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {["Impressum", "Datenschutz", "AGB"].map((t) => (
                <li key={t}>
                  <a href="#" className="hover:text-white transition-colors">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <p>© {new Date().getFullYear()} Boxerhof. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-2">
            Gemacht mit{" "}
            <Heart size={14} className="fill-red-500 text-red-500" /> fuer
            Manuela & alle Hunde.
          </p>
        </div>
      </div>

      <div
        className="absolute -bottom-10 -right-20 text-[200px] font-black select-none pointer-events-none whitespace-nowrap"
        style={{
          color: "rgba(255,255,255,0.03)",
          fontFamily: "'Fraunces', Georgia, serif",
        }}
      >
        BOXERHOF
      </div>
    </footer>
  );
}
