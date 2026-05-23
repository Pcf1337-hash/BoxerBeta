import React from "react";
import { motion } from "motion/react";

export default function Manuela({ data }) {
  return (
    <section
      id="manuela"
      className="py-32"
      style={{ backgroundColor: "#f7f0e3" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {data.name}
                </h3>
                <p className="text-white/80 text-sm">{data.title}</p>
              </div>
            </motion.div>
            {/* Spinning ring decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
              style={{ border: "4px dashed #c4a35a", opacity: 0.5 }}
            />
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-widest"
                style={{ backgroundColor: "#3d6b5018", color: "#3d6b50" }}
              >
                Deine Gastgeberin
              </div>

              <h2
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                style={{
                  color: "#2a1a08",
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Herzlichkeit auf{" "}
                <span style={{ color: "#c4522a" }}>4.000 qm</span>
              </h2>

              <div
                className="relative mb-12 pl-8"
                style={{ borderLeft: "4px solid #c4a35a" }}
              >
                <p
                  className="text-2xl md:text-3xl italic leading-relaxed"
                  style={{
                    color: "#3a2010",
                    fontFamily: "'Fraunces', Georgia, serif",
                  }}
                >
                  "{data.quote}"
                </p>
              </div>

              <p
                className="text-lg mb-12 leading-relaxed max-w-xl"
                style={{ color: "#5a3a1a" }}
              >
                {data.bio}
              </p>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-6 pt-12"
                style={{ borderTop: "2px solid #c4a35a30" }}
              >
                {data.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-3xl md:text-5xl font-bold mb-1"
                      style={{
                        color: "#2a1a08",
                        fontFamily: "'Fraunces', Georgia, serif",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs md:text-sm uppercase tracking-wider font-semibold"
                      style={{ color: "#7a5c3a" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
