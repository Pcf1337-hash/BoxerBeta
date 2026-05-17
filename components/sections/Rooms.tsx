"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useInViewOnce } from "@/lib/hooks";
import { useRef } from "react";

const rooms = [
  {
    id: 1,
    name: "Eichen-Zimmer",
    description: "Geräumig und lichtdurchflutet mit Blick auf die Wiese.",
    sqm: 18,
    price: 35,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Birken-Zimmer",
    description: "Gemütlich eingerichtet mit eigenem Zugang zum Garten.",
    sqm: 15,
    price: 32,
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Tannen-Zimmer",
    description: "Ruhig gelegen am Waldrand, perfekt für sensible Hunde.",
    sqm: 16,
    price: 34,
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Erlen-Zimmer",
    description: "Unser größtes Zimmer, ideal für mehrere Hunde.",
    sqm: 22,
    price: 38,
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&h=600&fit=crop",
  },
];

const customEase = [0.22, 1, 0.36, 1] as const;

function RoomCard({ room, index }: { room: typeof rooms[0]; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: customEase,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-background border border-foreground/5"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          transition={{ duration: 0.5, ease: customEase }}
        >
          <Image
            src={room.image}
            alt={`${room.name} - Hundepension Boxerhof`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <motion.div
        className="flex flex-1 flex-col p-5 md:p-6"
        whileHover={prefersReducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.3, ease: customEase }}
      >
        <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground">
          {room.name}
        </h3>
        <p className="mt-2 flex-1 text-sm md:text-base text-foreground/70 leading-relaxed">
          {room.description}
        </p>
        <div className="mt-4 flex items-end justify-between border-t border-foreground/5 pt-4">
          <span className="text-sm text-foreground/50">{room.sqm} m²</span>
          <span className="font-serif text-lg md:text-xl font-medium text-primary">
            Ab {room.price}&nbsp;€ <span className="text-sm font-sans font-normal text-foreground/50">/ Nacht</span>
          </span>
        </div>
      </motion.div>

      {/* Hover shadow effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl bg-foreground/5"
        initial={{ opacity: 0, y: 0 }}
        whileHover={prefersReducedMotion ? {} : { opacity: 1, y: 8 }}
        transition={{ duration: 0.3, ease: customEase }}
      />
    </motion.article>
  );
}

export function Rooms() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          ref={ref}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: customEase }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            Die Zimmer
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            Echte Zimmer mit echten Betten. Kein Zwinger, keine Box.
          </p>
        </motion.header>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
