import React from "react";
import { Edit3 } from "lucide-react";

export function AlbumList({ albums, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {albums.map((album) => (
        <div
          key={album.id}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          {album.cover_image && (
            <img
              src={album.cover_image}
              alt={album.name}
              className="w-full h-36 object-cover"
            />
          )}
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-900">{album.name}</h4>
              <p className="text-gray-400 text-xs">
                {album.photos?.length || 0} Fotos
              </p>
            </div>
            <button
              onClick={() => onSelect(album)}
              className="flex items-center gap-1 bg-orange-100 hover:bg-orange-200 text-orange-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            >
              <Edit3 size={13} /> Verwalten
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
