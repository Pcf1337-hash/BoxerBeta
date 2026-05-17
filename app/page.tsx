'use client';

import { Hero } from '@/components/sections/Hero';
import { Manifest } from '@/components/sections/Manifest';
import { Rooms } from '@/components/sections/Rooms';
import { Manuela } from '@/components/sections/Manuela';
import { Process } from '@/components/sections/Process';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import dynamic from 'next/dynamic';

// Dynamically import Lifestyle (contains heavy GSAP bundle) to optimize initial page performance
const Lifestyle = dynamic(
  () => import('@/components/sections/Lifestyle').then((mod) => mod.Lifestyle),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-full flex items-center justify-center bg-muted text-muted-foreground font-serif text-lg">
        Lade Bildergalerie...
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifest />
      <Rooms />
      <Lifestyle />
      <Manuela />
      <Process />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
