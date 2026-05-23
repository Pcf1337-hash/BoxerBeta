import React from "react";
import { motion } from "motion/react";
import { Save } from "lucide-react";

export function NewAlbumForm({ form, setForm, onCreate }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden mb-6"
    >
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 space-y-3">
        <input
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Album-Name *"
        />
        <input
          value={form.description}
          onChange={(e) =>
            setForm((f) => ({
              ...f,
              description: e.target.value,
            }))
          }
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Beschreibung (optional)"
        />
        <div className="flex gap-3">
          <button
            onClick={onCreate}
            className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-orange-700 transition-colors"
          >
            <Save size={14} /> Erstellen
          </button>
          <button
            onClick={() => setForm((f) => ({ ...f, show: false }))}
            className="text-gray-500 px-4 py-2 text-sm hover:text-gray-800"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </motion.div>
  );
}
