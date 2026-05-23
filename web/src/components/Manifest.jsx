import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Manifest({ data }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = data.text.split(" ");

  const KEYWORD_COLORS = [
    { bg: "#3d6b50", text: "#fff" },
    { bg: "#c4522a", text: "#fff" },
    { bg: "#6b7c3c", text: "#fff" },
    { bg: "#7c5a2e", text: "#fff" },
  ];

  return (
    <section
      ref={containerRef}
      id="manifest"
      className="py-40"
      style={{ backgroundColor: "#f7f0e3" }}
    >
      <div className="container mx-auto px-6">
        {/* Big word reveal */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex flex-wrap justify-center text-center gap-x-5 gap-y-4">
            {words.map((word, i) => {
              const start = i / words.length;
              return (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  range={[start * 0.5 + 0.1, start * 0.5 + 0.25]}
                />
              );
            })}
          </div>
        </div>

        {/* Keyword pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {data.keywords.map((keyword, i) => {
            const c = KEYWORD_COLORS[i % KEYWORD_COLORS.length];
            return (
              <span
                key={i}
                className="px-7 py-3 rounded-full text-base font-bold shadow-md"
                style={{ backgroundColor: c.bg, color: c.text }}
              >
                {keyword}
              </span>
            );
          })}
        </motion.div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-6 mt-20">
          <div
            className="h-px flex-1 max-w-xs"
            style={{ backgroundColor: "#c4a35a", opacity: 0.4 }}
          />
          <span className="text-3xl">🐾</span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{ backgroundColor: "#c4a35a", opacity: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
}

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.08, 1]);
  const y = useTransform(progress, range, [12, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        fontFamily: "'Fraunces', Georgia, serif",
        color: "#2a1a08",
      }}
      className="text-4xl md:text-6xl font-bold leading-tight"
    >
      {word}
    </motion.span>
  );
}
