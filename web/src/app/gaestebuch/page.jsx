import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Star, PawPrint, Send, Heart, ChevronDown } from "lucide-react";

const COLORS = [
  { bg: "#FFF8F0", border: "#F6D9B4", tape: "#F59E0B" },
  { bg: "#F0FFF8", border: "#B4E8D1", tape: "#10B981" },
  { bg: "#FFF0F8", border: "#F4B4D8", tape: "#EC4899" },
  { bg: "#F0F4FF", border: "#B4C8F8", tape: "#6366F1" },
  { bg: "#FFFBF0", border: "#F8E5B4", tape: "#F59E0B" },
];

function PawRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange && onChange(n)}
          onMouseEnter={() => onChange && setHovered(n)}
          onMouseLeave={() => onChange && setHovered(0)}
          className="transition-transform hover:scale-125"
        >
          <PawPrint
            size={22}
            className={
              n <= (hovered || value)
                ? "text-orange-500 fill-orange-400"
                : "text-gray-300"
            }
          />
        </button>
      ))}
    </div>
  );
}

function PolaroidCard({ entry, index }) {
  const colorSet = COLORS[index % COLORS.length];
  const rotations = [-2, 1.5, -1, 2.5, -1.5, 1, -2.5, 2];
  const rot = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rot }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
      className="relative cursor-default"
      style={{ transformOrigin: "center top" }}
    >
      {/* Tape */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-6 rounded-sm opacity-80 z-10"
        style={{ backgroundColor: colorSet.tape }}
      />
      {/* Card */}
      <div
        className="rounded-2xl p-6 shadow-lg relative overflow-hidden"
        style={{
          backgroundColor: colorSet.bg,
          border: `2px solid ${colorSet.border}`,
        }}
      >
        {/* Quote mark */}
        <div className="absolute top-4 right-4 text-6xl font-serif text-gray-100 leading-none select-none">
          "
        </div>
        {/* Dog name badge */}
        <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
          <PawPrint size={11} />
          {entry.dog_name}
          {entry.dog_breed && (
            <span className="opacity-60">· {entry.dog_breed}</span>
          )}
        </div>
        {/* Rating */}
        <div className="mb-3">
          <PawRating value={entry.rating} />
        </div>
        {/* Message */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 italic font-serif">
          „{entry.message}"
        </p>
        {/* Footer */}
        <div className="flex justify-between items-end">
          <div>
            <p className="font-bold text-gray-800 text-sm">
              {entry.author_name}
            </p>
            {entry.visit_year && (
              <p className="text-xs text-gray-400">
                Zu Besuch {entry.visit_year}
              </p>
            )}
          </div>
          <div className="text-gray-300 text-xs">
            {new Date(entry.created_at).toLocaleDateString("de-DE", {
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GaestebuchPage() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    author_name: "",
    dog_name: "",
    dog_breed: "",
    rating: 5,
    message: "",
    visit_year: new Date().getFullYear().toString(),
  });

  useEffect(() => {
    fetch("/api/guestbook")
      .then((r) => r.json())
      .then((d) => setEntries(d.entries || []))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setShowForm(false);
        setForm({
          author_name: "",
          dog_name: "",
          dog_breed: "",
          rating: 5,
          message: "",
          visit_year: new Date().getFullYear().toString(),
        });
      }
    } catch (e) {
      console.error(e);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFAF6]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-5"
              style={{
                left: `${(i * 17 + 5) % 95}%`,
                top: `${(i * 23 + 10) % 90}%`,
                transform: `rotate(${(i * 37) % 360}deg)`,
                fontSize: `${24 + (i % 3) * 12}px`,
              }}
            >
              🐾
            </div>
          ))}
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart size={14} className="fill-orange-500" />
              Was unsere Gäste sagen
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-serif">
              Das Gästebuch
            </h1>
            <p className="text-xl text-gray-500 max-w-xl mx-auto mb-10">
              Stimmen aus der Familie. Von Menschen, die uns ihr Liebstes
              anvertraut haben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowForm(!showForm)}
                className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-orange-700 transition-colors"
              >
                {showForm
                  ? "Formular schließen"
                  : "Eigenen Eintrag schreiben ✍️"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success message */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-6 mb-8"
          >
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">🐾</div>
              <h3 className="font-bold text-green-800 text-lg">
                Vielen Dank für Ihren Eintrag!
              </h3>
              <p className="text-green-600 mt-1">
                Nach kurzer Prüfung durch Manuela wird er hier erscheinen.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <AnimatePresence>
        {showForm && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="container mx-auto px-6 pb-16">
              <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                  Ihr Erlebnis teilen
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Ihr Name *
                      </label>
                      <input
                        required
                        value={form.author_name}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            author_name: e.target.value,
                          }))
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50"
                        placeholder="z.B. Familie Müller"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Name Ihres Hundes *
                      </label>
                      <input
                        required
                        value={form.dog_name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, dog_name: e.target.value }))
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50"
                        placeholder="z.B. Balu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Rasse (optional)
                      </label>
                      <input
                        value={form.dog_breed}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, dog_breed: e.target.value }))
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50"
                        placeholder="z.B. Boxer, Labrador..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Besuchsjahr
                      </label>
                      <input
                        value={form.visit_year}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, visit_year: e.target.value }))
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50"
                        placeholder="2025"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ihre Bewertung
                    </label>
                    <PawRating
                      value={form.rating}
                      onChange={(n) => setForm((f) => ({ ...f, rating: n }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50 resize-none"
                      placeholder="Was hat Ihnen und Ihrem Hund beim Boxerhof besonders gut gefallen?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    {submitting ? "Wird gesendet..." : "Eintrag absenden"}
                  </button>
                </form>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Entries grid */}
      <section className="container mx-auto px-6 pb-32">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin" />
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-32 text-gray-400">
            <PawPrint size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-xl">Noch keine Einträge. Sei der Erste!</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {entries.map((entry, i) => (
              <div key={entry.id} className="break-inside-avoid">
                <PolaroidCard entry={entry} index={i} />
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        h1, h2, .font-serif { font-family: 'Crimson Pro', serif; }
        body { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
}
