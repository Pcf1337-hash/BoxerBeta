import React, { useState } from "react";
import { motion } from "motion/react";
import { Save, Upload } from "lucide-react";
import useUpload from "@/utils/useUpload";

export function NewsForm({ editPost, onClose, onSave }) {
  const [form, setForm] = useState({
    title: editPost?.title || "",
    content: editPost?.content || "",
    excerpt: editPost?.excerpt || "",
    image_url: editPost?.image_url || "",
    published: editPost?.published ?? true,
  });
  const [saving, setSaving] = useState(false);
  const [upload, { loading: uploading }] = useUpload();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const { url, error } = await upload({ url: URL.createObjectURL(file) });
      if (error) {
        alert("Upload fehlgeschlagen");
        return;
      }
      setForm((f) => ({ ...f, image_url: url }));
    };
    reader.readAsDataURL(file);
  };

  const save = async () => {
    setSaving(true);
    try {
      if (editPost) {
        await fetch(`/api/news/${editPost.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/news", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      onClose();
      onSave();
    } catch (e) {
      alert("Fehler beim Speichern");
    }
    setSaving(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden mb-8"
    >
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 space-y-4">
        <h3 className="font-bold text-gray-900">
          {editPost ? "Beitrag bearbeiten" : "Neuer Beitrag"}
        </h3>
        <input
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Titel"
        />
        <textarea
          value={form.excerpt}
          onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
          rows={2}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
          placeholder="Kurztext (optional)"
        />
        <textarea
          value={form.content}
          onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
          rows={6}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
          placeholder="Vollständiger Text"
        />
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Bild-URL oder hochladen
          </p>
          <div className="flex gap-3">
            <input
              value={form.image_url}
              onChange={(e) =>
                setForm((f) => ({ ...f, image_url: e.target.value }))
              }
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="https://..."
            />
            <label className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-3 rounded-xl cursor-pointer text-sm font-medium transition-colors">
              <Upload size={14} /> {uploading ? "…" : "Upload"}{" "}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          {form.image_url && (
            <img
              src={form.image_url}
              alt="Preview"
              className="mt-2 h-24 w-auto rounded-lg object-cover"
            />
          )}
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) =>
              setForm((f) => ({ ...f, published: e.target.checked }))
            }
            className="rounded"
          />
          Sofort veröffentlichen
        </label>
        <div className="flex gap-3">
          <button
            onClick={save}
            disabled={saving}
            className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50"
          >
            <Save size={15} /> {saving ? "Wird gespeichert…" : "Speichern"}
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </motion.div>
  );
}
