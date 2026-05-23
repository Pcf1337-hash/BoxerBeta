import React from "react";
import { Check, Trash2, PawPrint } from "lucide-react";

const C = {
  green: "#3d6b50",
  greenLight: "#e8f2ec",
  terra: "#c4522a",
  brown: "#2a1a08",
  brownMid: "#7a5c3a",
};

export function GuestbookEntry({ entry, onApprove, onReject }) {
  return (
    <div
      className="bg-white rounded-3xl p-6 shadow-sm"
      style={{ border: `1.5px solid ${entry.approved ? C.green : C.terra}18` }}
    >
      <div className="flex flex-wrap gap-3 justify-between items-start mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-base" style={{ color: C.brown }}>
              {entry.author_name}
            </span>
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: `${C.terra}15`, color: C.terra }}
            >
              {entry.dog_name}
              {entry.dog_breed ? ` - ${entry.dog_breed}` : ""}
            </span>
            {entry.visit_year && (
              <span className="text-xs" style={{ color: C.brownMid }}>
                Besuch {entry.visit_year}
              </span>
            )}
          </div>
          <div className="flex gap-0.5 mt-1.5">
            {[...Array(entry.rating)].map((_, i) => (
              <PawPrint
                key={i}
                size={14}
                style={{ color: C.terra, fill: C.terra }}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {!entry.approved && (
            <button
              onClick={() => onApprove(entry.id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold"
              style={{ backgroundColor: C.greenLight, color: C.green }}
            >
              <Check size={15} /> Freigeben
            </button>
          )}
          <button
            onClick={() => onReject(entry.id)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold"
            style={{ backgroundColor: `${C.terra}12`, color: C.terra }}
          >
            <Trash2 size={14} /> Loeschen
          </button>
        </div>
      </div>
      <div className="rounded-2xl p-4" style={{ backgroundColor: "#faf7f2" }}>
        <p
          className="italic leading-relaxed text-sm"
          style={{ color: "#5a3a1a", fontFamily: "Georgia, serif" }}
        >
          {entry.message}
        </p>
      </div>
      <p className="text-xs mt-3" style={{ color: "#bbb" }}>
        Eingegangen am{" "}
        {new Date(entry.created_at).toLocaleDateString("de-DE", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    </div>
  );
}
