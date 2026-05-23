import React from "react";

export function GuestbookFilters({ filter, setFilter, entries }) {
  return (
    <div className="flex gap-3 mb-6">
      {["pending", "approved"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === f ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          {f === "pending"
            ? `Ausstehend (${entries.filter((e) => !e.approved).length})`
            : `Freigegeben (${entries.filter((e) => e.approved).length})`}
        </button>
      ))}
    </div>
  );
}
