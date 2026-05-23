import React, { useState } from "react";
import { Trash2, X } from "lucide-react";
import { AddPhotoForm } from "./AddPhotoForm";

export function AlbumDetail({ album, onBack, onDelete, onUpdate }) {
  const deletePhoto = async (id) => {
    if (!confirm("Foto löschen?")) return;
    await fetch(`/api/photos/${id}`, { method: "DELETE" });
    onUpdate();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 font-medium text-sm"
        >
          ← Alle Alben
        </button>
        <button
          onClick={() => onDelete(album.id)}
          className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm font-medium"
        >
          <Trash2 size={14} /> Album löschen
        </button>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">{album.name}</h3>

      <AddPhotoForm albumId={album.id} onAdd={onUpdate} />

      {/* Photos grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {album.photos?.map((photo) => (
          <div
            key={photo.id}
            className="relative group rounded-xl overflow-hidden aspect-square bg-gray-100"
          >
            <img
              src={photo.url}
              alt={photo.caption || "Foto"}
              className="w-full h-full object-cover"
            />
            {photo.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-xs truncate">{photo.caption}</p>
              </div>
            )}
            <button
              onClick={() => deletePhoto(photo.id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
