import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "motion/react";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function FeaturedPost({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl mb-20 group"
      style={{ minHeight: 520 }}
    >
      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      <div
        className="relative z-10 p-10 md:p-16 flex flex-col justify-end h-full"
        style={{ minHeight: 520 }}
      >
        <span className="inline-flex items-center gap-2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
          <Newspaper size={11} /> Neueste Nachricht
        </span>
        <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
          <Calendar size={14} />
          {formatDate(post.created_at)}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight font-serif">
          {post.title}
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mb-8 leading-relaxed">
          {post.excerpt || post.content.slice(0, 160) + "…"}
        </p>
        <button
          onClick={() =>
            document
              .getElementById(`post-${post.id}`)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors w-fit"
        >
          Weiterlesen <ArrowRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}

function PostCard({ post, index }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.article
      id={`post-${post.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
    >
      {post.image_url && (
        <div className="overflow-hidden" style={{ height: 220 }}>
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center gap-2 text-orange-500 text-xs font-semibold mb-3">
          <Calendar size={13} />
          {formatDate(post.created_at)}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-500 leading-relaxed mb-4">
          {expanded
            ? post.content
            : post.excerpt || post.content.slice(0, 200) + "…"}
        </p>
        {post.content.length > 200 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
          >
            {expanded ? "Weniger anzeigen" : "Weiterlesen"}{" "}
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default function NeuigkeitenPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((d) => setPosts(d.posts || []))
      .finally(() => setLoading(false));
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-[#FDFAF6]">
      <Navigation />

      {/* Header */}
      <section className="pt-40 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-20 left-10 text-[180px] font-black text-gray-100 opacity-50 leading-none">
            NEWS
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Newspaper size={14} />
              Vom Hof direkt zu Ihnen
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 font-serif">
              Neuigkeiten
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mx-auto">
              Was auf dem Boxerhof so passiert. Aktuell, ehrlich, mit Herz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32">
        {loading ? (
          <div className="flex justify-center py-32">
            <div
              className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full"
              style={{ animation: "spin 1s linear infinite" }}
            />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-32 text-gray-400">
            <Newspaper size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-xl">Noch keine Neuigkeiten vorhanden.</p>
          </div>
        ) : (
          <>
            {featured && <FeaturedPost post={featured} />}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700&family=Inter:wght@400;500;600;700&display=swap');
        h1, h2, h3, .font-serif { font-family: 'Crimson Pro', serif; }
        body { font-family: 'Inter', sans-serif; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
