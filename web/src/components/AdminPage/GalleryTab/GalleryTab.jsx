import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import { PlusCircle } from "lucide-react";
import { AlbumList } from "./AlbumList";
import { AlbumDetail } from "./AlbumDetail";
import { NewAlbumForm } from "./NewAlbumForm";

export function GalleryTab() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [newAlbumForm, setNewAlbumForm] = useState({
    show: false,
    name: "",
    description: "",
  });

  const load = useCallback(() => {
    setLoading(true);
    fetch("/api/albums")
      .then((r) => r.json())
      .then((d) => {
        setAlbums(d.albums || []);
        if (selectedAlbum) {
          const updated = d.albums?.find((a) => a.id === selectedAlbum.id);
          if (updated) setSelectedAlbum(updated);
        }
      })
      .finally(() => setLoading(false));
  }, [selectedAlbum?.id]);

  useEffect(() => {
    load();
  }, []);

  const createAlbum = async () => {
    if (!newAlbumForm.name) return;
    await fetch("/api/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newAlbumForm.name,
        description: newAlbumForm.description,
      }),
    });
    setNewAlbumForm({ show: false, name: "", description: "" });
    load();
  };

  const deleteAlbum = async (id) => {
    if (!confirm("Album und alle Fotos löschen?")) return;
    await fetch(`/api/albums/${id}`, { method: "DELETE" });
    setSelectedAlbum(null);
    load();
  };

  if (selectedAlbum) {
    const current =
      albums.find((a) => a.id === selectedAlbum.id) || selectedAlbum;
    return (
      <AlbumDetail
        album={current}
        onBack={() => setSelectedAlbum(null)}
        onDelete={deleteAlbum}
        onUpdate={load}
      />
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-500 text-sm">{albums.length} Alben</span>
        <button
          onClick={() => setNewAlbumForm((f) => ({ ...f, show: !f.show }))}
          className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-orange-700 transition-colors text-sm"
        >
          <PlusCircle size={16} /> Neues Album
        </button>
      </div>
      <AnimatePresence>
        {newAlbumForm.show && (
          <NewAlbumForm
            form={newAlbumForm}
            setForm={setNewAlbumForm}
            onCreate={createAlbum}
          />
        )}
      </AnimatePresence>
      {loading ? (
        <div className="py-20 text-center text-gray-400">Lädt…</div>
      ) : (
        <AlbumList albums={albums} onSelect={setSelectedAlbum} />
      )}
    </div>
  );
}
