import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import { PlusCircle } from "lucide-react";
import { NewsForm } from "./NewsForm";
import { NewsPostCard } from "./NewsPostCard";

export function NewsTab() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const load = useCallback(() => {
    setLoading(true);
    fetch("/api/news?all=true")
      .then((r) => r.json())
      .then((d) => setPosts(d.posts || []))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const openNew = () => {
    setEditPost(null);
    setShowForm(true);
  };

  const openEdit = (post) => {
    setEditPost(post);
    setShowForm(true);
  };

  const deletePost = async (id) => {
    if (!confirm("Diesen Beitrag löschen?")) return;
    await fetch(`/api/news/${id}`, { method: "DELETE" });
    load();
  };

  const togglePublished = async (post) => {
    await fetch(`/api/news/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !post.published }),
    });
    load();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-500 text-sm">{posts.length} Beiträge</span>
        <button
          onClick={openNew}
          className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-orange-700 transition-colors text-sm"
        >
          <PlusCircle size={16} /> Neuer Beitrag
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <NewsForm
            editPost={editPost}
            onClose={() => setShowForm(false)}
            onSave={load}
          />
        )}
      </AnimatePresence>

      {loading ? (
        <div className="py-20 text-center text-gray-400">Lädt…</div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <NewsPostCard
              key={post.id}
              post={post}
              onEdit={openEdit}
              onDelete={deletePost}
              onTogglePublished={togglePublished}
            />
          ))}
        </div>
      )}
    </div>
  );
}
