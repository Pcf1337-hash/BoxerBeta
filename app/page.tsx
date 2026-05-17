import { Hero } from "@/components/sections/Hero";
import { Manifest } from "@/components/sections/Manifest";
import { Rooms } from "@/components/sections/Rooms";
import { Lifestyle } from "@/components/sections/Lifestyle";
import { Manuela } from "@/components/sections/Manuela";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

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
