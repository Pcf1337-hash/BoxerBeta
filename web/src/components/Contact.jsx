import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Phone,
} from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <section
        id="contact"
        className="py-32"
        style={{ backgroundColor: "#3d6b50" }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <CheckCircle2 className="w-24 h-24 mb-6" />
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Wau! Das ging fix.
            </h2>
            <p
              className="text-xl max-w-md mx-auto mb-10"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Deine Anfrage ist bei uns gelandet. Manuela meldet sich so schnell
              wie möglich bei dir und deinem Vierbeiner.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-8 py-3 bg-white rounded-full font-bold shadow-lg"
              style={{ color: "#3d6b50" }}
            >
              Noch eine Nachricht?
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-32"
      style={{ backgroundColor: "#f7f0e3" }}
    >
      <div className="container mx-auto px-6">
        <div
          className="max-w-6xl mx-auto rounded-[4rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2"
          style={{ backgroundColor: "#fff", border: "1px solid #e8dece" }}
        >
          {/* Info side */}
          <div
            className="p-12 lg:p-20 text-white relative overflow-hidden"
            style={{ backgroundColor: "#2a1a08" }}
          >
            <div className="relative z-10">
              <h2
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Lass uns{" "}
                <span
                  style={{
                    color: "#c4a35a",
                    textDecoration: "underline wavy",
                    textUnderlineOffset: "8px",
                  }}
                >
                  schnacken
                </span>
              </h2>
              <p
                className="text-lg mb-12"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Hast du Fragen zum Aufenthalt oder möchtest du direkt einen
                Zeitraum anfragen? Schreib uns einfach!
              </p>
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Telefon", value: "+49 123 456789" },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "+49 123 456789",
                  },
                  {
                    icon: Calendar,
                    label: "Oeffnungszeiten",
                    value: "Taeglich 08:00 - 20:00",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-6 group">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(196,163,90,0.15)" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "#c4a35a" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-bold"
                        style={{ color: "#c4a35a" }}
                      >
                        {label}
                      </p>
                      <p className="text-xl font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#c4a35a" }}
            />
          </div>

          {/* Form side */}
          <div className="p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Dein Name", placeholder: "Max Mustermann" },
                  { label: "Name deines Hundes", placeholder: "Bello" },
                ].map(({ label, placeholder }) => (
                  <div key={label}>
                    <label
                      className="block text-sm font-bold mb-2"
                      style={{ color: "#2a1a08" }}
                    >
                      {label}
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-4 transition-all"
                      style={{
                        border: "1px solid #e8dece",
                        backgroundColor: "#fdf8f2",
                        focusRingColor: "#3d6b5020",
                      }}
                      placeholder={placeholder}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  style={{ color: "#2a1a08" }}
                >
                  E-Mail Adresse
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-6 py-4 rounded-2xl focus:outline-none transition-all"
                  style={{
                    border: "1px solid #e8dece",
                    backgroundColor: "#fdf8f2",
                  }}
                  placeholder="max@beispiel.de"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  style={{ color: "#2a1a08" }}
                >
                  Deine Nachricht
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl focus:outline-none transition-all resize-none"
                  style={{
                    border: "1px solid #e8dece",
                    backgroundColor: "#fdf8f2",
                  }}
                  placeholder="Wie koennen wir euch helfen?"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-5 rounded-2xl font-bold text-lg text-white shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 transition-all"
                style={{ backgroundColor: "#c4522a" }}
              >
                {status === "loading" ? (
                  "Wird versendet..."
                ) : (
                  <>
                    <span>Anfrage abschicken</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
