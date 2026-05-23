import React, { useState } from "react";
import { motion } from "motion/react";
import { PawPrint, Eye, EyeOff, CircleAlert as AlertCircle } from "lucide-react";

const terra = "#c4522a";
const amber = "#c4a35a";
const brown = "#2a1a08";

export function LoginScreen({ onLogin }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async () => {
    if (!pw) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (res.ok) onLogin();
      else setError("Falsches Passwort. Bitte erneut versuchen.");
    } catch {
      setError("Verbindungsproblem. Bitte die Seite neu laden.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: `linear-gradient(135deg, ${brown} 0%, #4a2c10 100%)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-5"
            style={{
              background: `linear-gradient(135deg, ${terra}, ${amber})`,
            }}
          >
            <PawPrint size={42} className="text-white" />
          </div>
          <h1
            className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Boxerhof Admin
          </h1>
          <p className="text-white/50 text-sm">Willkommen, Manuela!</p>
        </div>

        <div
          className="rounded-3xl p-8"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
          }}
        >
          <p className="text-white/70 text-sm font-medium mb-2">Ihr Passwort</p>
          <div className="relative mb-5">
            <input
              type={show ? "text" : "password"}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full rounded-xl px-4 py-4 text-white text-base focus:outline-none pr-12"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              placeholder="Passwort eingeben..."
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <div
              className="flex items-center gap-2 rounded-xl px-4 py-3 mb-5 text-sm"
              style={{
                backgroundColor: "rgba(196,82,42,0.2)",
                color: "#ffb09a",
              }}
            >
              <AlertCircle size={15} /> {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading || !pw}
            className="w-full py-4 rounded-xl font-bold text-base text-white disabled:opacity-40 transition-all"
            style={{
              background: `linear-gradient(135deg, ${terra}, ${amber})`,
            }}
          >
            {loading ? "Wird ueberprueft..." : "Einloggen"}
          </button>

          <div
            className="mt-6 p-4 rounded-xl text-center text-xs"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Passwort eingeben um zuzugreifen
          </div>
        </div>

        <p className="text-center mt-6">
          <a href="/" style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
            Zurueck zur Website
          </a>
        </p>
      </motion.div>
    </div>
  );
}
