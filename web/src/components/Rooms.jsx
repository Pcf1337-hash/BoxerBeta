import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronRight } from "lucide-react";

export default function Rooms({ data }) {
  const [active, setActive] = useState(0);
  const room = data[active];

  return (
    <section id="rooms" className="py-0 overflow-hidden">
      {/* Section header */}
      <div className="bg-[#f7f0e3] py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#3d6b50] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Unterkünfte
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold text-[#2a1a08]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Die Zimmer
          </h2>
          <p className="text-[#7a5c3a] text-xl max-w-xl mx-auto mt-4">
            Echte Zimmer mit echten Betten. Kein Zwinger, keine Box — nur
            Zuhause.
          </p>
        </motion.div>
      </div>

      {/* Tab selector */}
      <div className="bg-[#2a1a08] py-4 px-6 overflow-x-auto">
        <div className="flex gap-2 justify-center min-w-max mx-auto">
          {data.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                active === i
                  ? "text-[#2a1a08]"
                  : "text-white/50 hover:text-white/80"
              }`}
              style={active === i ? { backgroundColor: room.accent } : {}}
            >
              {r.emoji} {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Room display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]"
        >
          {/* Left: stacked images */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            {/* Main image */}
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 hidden lg:block" />
            {/* Gallery thumbnails */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {room.gallery.map((src, i) => (
                <div
                  key={i}
                  className="w-20 h-16 rounded-xl overflow-hidden border-2 border-white/60 shadow-lg"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Price badge */}
            <div
              className="absolute top-4 right-4 px-4 py-2 rounded-2xl text-white font-bold shadow-xl"
              style={{ backgroundColor: room.accent }}
            >
              Ab {room.price} €
              <span className="text-xs font-normal opacity-80"> / Nacht</span>
            </div>
          </div>

          {/* Right: info */}
          <div
            className="p-12 lg:p-16 flex flex-col justify-center"
            style={{ backgroundColor: room.accent + "18" }}
          >
            <div className="text-5xl mb-4">{room.emoji}</div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#2a1a08] mb-4"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              {room.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-[#5a3a1a] text-lg leading-relaxed mb-8"
            >
              {room.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {room.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: room.accent }}
                  >
                    <Check size={11} className="text-white" />
                  </div>
                  <span className="text-[#3a2010] font-medium text-sm">
                    {f}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-lg w-fit"
              style={{ backgroundColor: room.accent }}
            >
              Anfragen <ChevronRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows */}
      <div
        className="py-6 px-6 flex items-center justify-between"
        style={{ backgroundColor: "#2a1a08" }}
      >
        <button
          onClick={() => setActive((a) => (a - 1 + data.length) % data.length)}
          className="text-white/50 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
        >
          ← Vorheriges
        </button>
        <div className="flex gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor:
                  active === i ? data[i].accent : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setActive((a) => (a + 1) % data.length)}
          className="text-white/50 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
        >
          Nächstes →
        </button>
      </div>
    </section>
  );
}
