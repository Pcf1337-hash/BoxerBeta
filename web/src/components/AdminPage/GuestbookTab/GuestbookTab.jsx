import React, { useState, useEffect, useCallback } from "react";
import { BookOpen, RefreshCw } from "lucide-react";
import { GuestbookEntry } from "./GuestbookEntry";

const C = {
  green: "#3d6b50",
  terra: "#c4522a",
  amber: "#c4a35a",
  amberLight: "#fdf6e3",
  brown: "#2a1a08",
  brownMid: "#7a5c3a",
};

export function GuestbookTab() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("pending");

  const load = useCallback(() => {
    setLoading(true);
    fetch("/api/guestbook?all=true")
      .then((r) => r.json())
      .then((d) => setEntries(d.entries || []))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const approve = async (id) => {
    await fetch(`/api/guestbook/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved: true }),
    });
    load();
  };

  const reject = async (id) => {
    if (!confirm("Diesen Eintrag wirklich löschen?")) return;
    await fetch(`/api/guestbook/${id}`, { method: "DELETE" });
    load();
  };

  const pending = entries.filter((e) => !e.approved);
  const approved = entries.filter((e) => e.approved);
  const filtered = filter === "pending" ? pending : approved;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2
            className="text-2xl font-bold"
            style={{ color: C.brown, fontFamily: "Georgia, serif" }}
          >
            Gaestebuch
          </h2>
          <p className="text-sm mt-1" style={{ color: C.brownMid }}>
            Entscheiden Sie, welche Eintraege Ihre Gaeste sehen.
          </p>
        </div>
        <button
          onClick={load}
          className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
          title="Aktualisieren"
        >
          <RefreshCw size={16} style={{ color: C.brownMid }} />
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-3 mb-6">
        {[
          {
            id: "pending",
            label: `Noch nicht freigegeben (${pending.length})`,
          },
          { id: "approved", label: `Freigegeben (${approved.length})` },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className="px-4 py-2.5 rounded-full text-sm font-bold transition-all"
            style={
              filter === t.id
                ? {
                    backgroundColor: t.id === "pending" ? C.terra : C.green,
                    color: "#fff",
                  }
                : { backgroundColor: "#f0ebe3", color: C.brownMid }
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Hint */}
      {filter === "pending" && pending.length > 0 && (
        <div
          className="rounded-2xl p-4 mb-5 flex gap-3 items-start text-sm"
          style={{
            backgroundColor: C.amberLight,
            border: `1px solid ${C.amber}40`,
          }}
        >
          <span className="text-xl flex-shrink-0">💡</span>
          <div style={{ color: C.brownMid }}>
            <strong style={{ color: C.brown }}>So geht es:</strong> Lesen Sie
            die Nachricht und klicken Sie auf <strong>Freigeben</strong>, dann
            erscheint der Eintrag auf Ihrer Website.
          </div>
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div
            className="w-10 h-10 rounded-full border-4 border-gray-200"
            style={{
              borderTopColor: C.green,
              animation: "bhSpin 0.9s linear infinite",
            }}
          />
          <p className="text-sm" style={{ color: C.brownMid }}>
            Wird geladen...
          </p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: "#f0ebe3" }}
          >
            <BookOpen size={28} style={{ color: "#c4b09a" }} />
          </div>
          <p className="font-medium" style={{ color: C.brownMid }}>
            {filter === "pending"
              ? "Super! Alle Eintraege sind bearbeitet."
              : "Noch keine freigegebenen Eintraege."}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((entry) => (
            <GuestbookEntry
              key={entry.id}
              entry={entry}
              onApprove={approve}
              onReject={reject}
            />
          ))}
        </div>
      )}
      <style>{`@keyframes bhSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
