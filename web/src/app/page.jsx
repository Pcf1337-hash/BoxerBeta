import React, { useEffect, useState, useRef } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Manifest from "../components/Manifest";
import Rooms from "../components/Rooms";
import Manuela from "../components/Manuela";
import Lifestyle from "../components/Lifestyle";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { boxerData } from "../data/boxerData";
import { motion } from "motion/react";
import { Calendar, ArrowRight, PawPrint, Heart, Star } from "lucide-react";

export const metadata = {
  title: "Boxerhof – Hundepension in Bad Oeynhausen",
  description: "Exklusive Hundepension ohne Zwinger in Bad Oeynhausen. Mit Herz und Leidenschaft betreuen wir Ihre Hunde seit 2009.",
  openGraph: {
    title: "Boxerhof – Hundepension in Bad Oeynhausen",
    description: "Exklusive Hundepension ohne Zwinger. 4000 qm Freilauffläche, gemütliche Zimmer, liebevolle Betreuung.",
    type: "website",
    locale: "de_DE",
  },
};

// ─── News Preview ──────────────────────────────────────────────────────────────
function NewsPreview() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((d) => setPosts((d.posts || []).slice(0, 3)));
  }, []);
  if (posts.length === 0) return null;
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Frisch vom Hof
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif">
              Neuigkeiten
            </h2>
          </div>
          <a
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors mt-6 md:mt-0"
          >
            Alle Neuigkeiten <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-[#FDFAF6] border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {post.image_url && (
                <div className="overflow-hidden h-52">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold mb-2">
                  <Calendar size={12} />
                  {new Date(post.created_at).toLocaleDateString("de-DE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <h3 className="font-bold text-gray-900 text-lg font-serif leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {post.excerpt || post.content.slice(0, 120)}
                </p>
                <a
                  href="/neuigkeiten"
                  className="inline-flex items-center gap-1 text-orange-600 text-sm font-semibold mt-3 hover:text-orange-700"
                >
                  Weiterlesen <ArrowRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Guestbook Teaser ──────────────────────────────────────────────────────────
function GuestbookTeaser() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch("/api/guestbook")
      .then((r) => r.json())
      .then((d) => setEntries((d.entries || []).slice(0, 3)));
  }, []);
  if (entries.length === 0) return null;
  const cardColors = ["#FFF8F0", "#F0FFF8", "#F0F4FF"];

  return (
    <section className="py-28 bg-gradient-to-br from-orange-50 via-[#FDFAF6] to-amber-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Was unsere Gäste sagen
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif">
              Das Gästebuch
            </h2>
          </div>
          <a
            href="/gaestebuch"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors mt-6 md:mt-0"
          >
            Alle Einträge <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: [-1.5, 1, -2][i] }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 shadow-md relative"
              style={{
                backgroundColor: cardColors[i],
                border: "2px solid rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(entry.rating || 5)].map((_, j) => (
                  <PawPrint
                    key={j}
                    size={14}
                    className="text-orange-500 fill-orange-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed mb-4 font-serif">
                „{entry.message.slice(0, 140)}
                {entry.message.length > 140 ? "…" : ""}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Heart
                    size={14}
                    className="text-orange-500 fill-orange-400"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">
                    {entry.author_name}
                  </p>
                  <p className="text-xs text-orange-500">& {entry.dog_name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/gaestebuch"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg"
          >
            Eigenen Eintrag schreiben ✍️
          </a>
        </div>
      </div>
    </section>
  );
}

export default function BoxerhofPage() {
  const videoUrl =
    "https://raw.createusercontent.com/c7b43a41-ec6c-401c-a048-4392cfeac8c2/";

  return (
    <div
      className="min-h-screen font-sans text-gray-900 overflow-x-hidden"
      style={{ backgroundColor: "#f7f0e3" }}
    >
      <Navigation />
      <main>
        <Hero data={boxerData.hero} videoUrl={videoUrl} />
        <Manifest data={boxerData.manifest} />
        <Rooms data={boxerData.rooms} />
        <Manuela data={boxerData.manuela} />
        <Lifestyle data={boxerData.lifestyle} />
        <NewsPreview />
        <GuestbookTeaser />
        <Contact />
      </main>
      <Footer />
      <PawTrail />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@300..700&display=swap');

        :root {
          --hof-cream: #f7f0e3;
          --hof-green: #3d6b50;
          --hof-terra: #c4522a;
          --hof-amber: #c4a35a;
          --hof-brown: #2a1a08;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--hof-cream);
          cursor: none;
        }
        h1, h2, h3 {
          font-family: 'Fraunces', Georgia, serif;
        }
        a, button { cursor: none; }
        .paw-trail { position: fixed; pointer-events: none; z-index: 100; color: rgba(196,82,42,0.35); transform: translate(-50%,-50%); animation: pawFade 1.2s forwards; }
        @keyframes pawFade { 0%{opacity:0.9;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(1.6)} }
        .custom-cursor { position:fixed;width:18px;height:18px;background:rgba(196,82,42,0.85);border-radius:50%;pointer-events:none;z-index:1000;mix-blend-mode:multiply;transition:width 0.15s,height 0.15s; }
        .custom-cursor-active { width:36px;height:36px; }
        .line-clamp-2 { display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }
        ::selection { background-color:#3d6b50;color:#fff; }
      `}</style>
    </div>
  );
}

function PawTrail() {
  const [paws, setPaws] = useState([]);
  const cursorRef = useRef(null);
  const [isPointerActive, setIsPointerActive] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (Math.random() > 0.9) {
        const newPaw = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          rotate: Math.random() * 360,
        };
        setPaws((prev) => [...prev.slice(-10), newPaw]);
        setTimeout(() => {
          setPaws((prev) => prev.filter((p) => p.id !== newPaw.id));
        }, 1000);
      }
    };
    const handleDown = () => setIsPointerActive(true);
    const handleUp = () => setIsPointerActive(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor hidden md:block ${isPointerActive ? "custom-cursor-active" : ""}`}
      />
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="paw-trail"
          style={{
            left: paw.x,
            top: paw.y,
            transform: `translate(-50%, -50%) rotate(${paw.rotate}deg)`,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm5.5 4c-1.38 0-2.5 1.12-2.5 2.5 0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-1.38-1.12-2.5-2.5-2.5zM6.5 6C5.12 6 4 7.12 4 8.5 4 9.88 5.12 11 6.5 11s2.5-1.12 2.5-2.5C9 7.12 7.88 6 6.5 6zm5.5 8c-3.5 0-7 2.5-7 6 0 1.5 1.5 2 3.5 2h7c2 0 3.5-.5 3.5-2 0-3.5-3.5-6-7-6z" />
          </svg>
        </div>
      ))}
    </>
  );
}
