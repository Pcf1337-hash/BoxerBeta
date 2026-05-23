import React from "react";
import { motion } from "motion/react";

export default function Lifestyle({ data }) {
  const row1 = data.row1 || data.images?.slice(0, 7) || [];
  const row2 = data.row2 || data.images?.slice(7) || [];

  return (
    <section
      id="lifestyle"
      className="py-32 overflow-hidden"
      style={{ backgroundColor: "#1a0e04" }}
    >
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#c4a35a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Jeden Tag
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            {data.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {data.captionWords.map((word, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl italic"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  color: "#c4a35a",
                  opacity: 0.7 + i * 0.05,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Row 1 – scrolls left */}
      <div
        className="flex gap-6 mb-6"
        style={{ animation: "marquee-left 50s linear infinite" }}
      >
        {[...row1, ...row1].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl"
            style={{ width: 380, height: 260 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      {/* Row 2 – scrolls right */}
      <div
        className="flex gap-6"
        style={{ animation: "marquee-right 60s linear infinite" }}
      >
        {[...row2, ...row2].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl"
            style={{ width: 340, height: 240 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
