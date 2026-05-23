import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Images, ZoomIn } from "lucide-react";

export const metadata = {
  title: "Galerie – Boxerhof Hundepension",
  description: "Fotoalben vom Boxerhof: Hofleben, Zimmer, Natur & Abenteuer. Echte Momente mit unseren Hunden.",
  openGraph: {
    title: "Galerie – Boxerhof Hundepension",
    description: "Sehen Sie unsere Fotoalben und erleben Sie den Boxerhof mit all seinen schönen Momenten.",
    type: "website",
    locale: "de_DE",
  },
};

function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }) {
  const photo = photos[currentIndex];
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white z-10 p-2 bg-white/10 rounded-full"
      >
        <X size={24} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 text-white/60 hover:text-white z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 text-white/60 hover:text-white z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
      >
        <ChevronRight size={28} />
      </button>
      <motion.div
        key={currentIndex}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-5xl max-h-[85vh] w-full px-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.url}
          alt={photo.caption || "Boxerhof"}
          className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
        />
        {photo.caption && (
          <p className="text-white/70 text-sm mt-4 text-center italic">
            {photo.caption}
          </p>
        )}
        <p className="text-white/30 text-xs mt-2">
          {currentIndex + 1} / {photos.length}
        </p>
      </motion.div>
    </motion.div>
  );
}

function AlbumCard({ album, onClick }) {
  const cover = album.cover_image || album.photos[0]?.url;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="cursor-pointer group rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-shadow"
    >
      <div className="relative overflow-hidden" style={{ height: 280 }}>
        {cover ? (
          <img
            src={cover}
            alt={album.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
            <Images size={48} className="text-orange-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
          {album.photos.length} Fotos
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white font-serif">
            {album.name}
          </h3>
          {album.description && (
            <p className="text-white/70 text-sm mt-1">{album.description}</p>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <ZoomIn className="text-white" size={28} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AlbumView({ album, onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const photos = album.photos;

  return (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors font-medium"
        >
          <ChevronLeft size={20} /> Alle Alben
        </button>
        <span className="text-gray-200">/</span>
        <h2 className="text-2xl font-bold text-gray-900 font-serif">
          {album.name}
        </h2>
      </div>
      {photos.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          Noch keine Fotos in diesem Album.
        </div>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={photo.url}
                alt={photo.caption || `Foto ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {photo.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs">{photo.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() =>
              setLightboxIndex((i) => (i - 1 + photos.length) % photos.length)
            }
            onNext={() => setLightboxIndex((i) => (i + 1) % photos.length)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GaleriePage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    fetch("/api/albums")
      .then((r) => r.json())
      .then((d) => setAlbums(d.albums || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f7f0e3" }}>
      <Navigation />

      <section className="pt-40 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div
            className="absolute -bottom-10 -right-10 text-[200px] font-black leading-none"
            style={{ color: "#2a1a08", opacity: 0.04 }}
          >
            FOTOS
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "#3d6b5018", color: "#3d6b50" }}
            >
              <Images size={14} />
              Einblicke in unser Hofleben
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{
                color: "#2a1a08",
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Galerie
            </h1>
            <p
              className="text-xl max-w-lg mx-auto"
              style={{ color: "#7a5c3a" }}
            >
              Echte Momente. Echte Hunde. Echtes Glueck.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32">
        {loading ? (
          <div className="flex justify-center py-32">
            <div
              className="w-12 h-12 rounded-full border-4 border-gray-200"
              style={{
                borderTopColor: "#3d6b50",
                animation: "galerySpin 1s linear infinite",
              }}
            />
          </div>
        ) : selectedAlbum ? (
          <AlbumView
            album={selectedAlbum}
            onBack={() => setSelectedAlbum(null)}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
                onClick={() => setSelectedAlbum(album)}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@400;500;600;700&display=swap');
        h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; }
        body { font-family: 'Inter', sans-serif; }
        @keyframes galerySpin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
