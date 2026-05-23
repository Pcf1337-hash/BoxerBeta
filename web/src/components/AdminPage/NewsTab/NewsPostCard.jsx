import React from "react";
import { Eye, EyeOff, Edit3, Trash2 } from "lucide-react";

export function NewsPostCard({ post, onEdit, onDelete, onTogglePublished }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4">
      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex gap-2 flex-wrap items-start justify-between">
          <h4 className="font-bold text-gray-900 leading-tight">
            {post.title}
          </h4>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => onTogglePublished(post)}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${post.published ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
            >
              {post.published ? (
                <>
                  <Eye size={12} /> Sichtbar
                </>
              ) : (
                <>
                  <EyeOff size={12} /> Versteckt
                </>
              )}
            </button>
            <button
              onClick={() => onEdit(post)}
              className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-medium transition-colors"
            >
              <Edit3 size={12} /> Bearbeiten
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-500 px-3 py-1 rounded-lg text-xs font-medium transition-colors"
            >
              <Trash2 size={12} /> Löschen
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-1 truncate">
          {post.excerpt || post.content.slice(0, 100)}
        </p>
        <p className="text-gray-300 text-xs mt-1">
          {new Date(post.created_at).toLocaleDateString("de-DE")}
        </p>
      </div>
    </div>
  );
}
