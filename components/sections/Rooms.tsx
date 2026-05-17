'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { easings, stagger } from '@/lib/motion';

const rooms = [
  {
    id: 1,
    name: 'Eichen-Zimmer',
    description: 'Geräumig und lichtdurchflutet mit Blick auf die Wiese.',
    sqm: 18,
    price: 35,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    name: 'Birken-Zimmer',
    description: 'Gemütlich eingerichtet mit eigenem Zugang zum Garten.',
    sqm: 15,
    price: 32,
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    name: 'Tannen-Zimmer',
    description: 'Ruhig gelegen am Waldrand, perfekt für sensible Hunde.',
    sqm: 16,
    price: 34,
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Erlen-Zimmer',
    description: 'Unser größtes Zimmer, ideal für mehrere Hunde.',
    sqm: 22,
    price: 38,
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&h=600&fit=crop',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.out,
    },
  },
};

function RoomCard({ room }: { room: typeof rooms[0] }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      variants={prefersReduced ? {} : cardVariants}
      whileHover={prefersReduced ? {} : { y: -8 }}
      tabIndex={0}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 cursor-pointer transition-shadow hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-out-expo ${
            prefersReduced ? '' : 'group-hover:scale-105'
          }`}
        >
          <Image
            src={room.image}
            alt={`${room.name} - Hundepension Boxerhof`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground">
          {room.name}
        </h3>
        <p className="mt-2 flex-1 text-sm md:text-base text-muted-foreground leading-relaxed">
          {room.description}
        </p>
        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <span className="text-sm text-muted-foreground">{room.sqm} m²</span>
          <span className="font-serif text-lg md:text-xl font-medium text-primary">
            Ab {room.price}&nbsp;€{' '}
            <span className="text-sm font-sans font-normal text-muted-foreground">/ Nacht</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Rooms() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal y={24} className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            Die Zimmer
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Echte Zimmer mit echten Betten. Kein Zwinger, keine Box.
          </p>
        </ScrollReveal>

        {/* Room Cards Grid with ScrollReveal Stagger */}
        <ScrollReveal
          staggerChildren={stagger.default}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
