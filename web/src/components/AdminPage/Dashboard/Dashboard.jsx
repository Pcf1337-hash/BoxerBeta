import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  PawPrint,
  LogOut,
  Eye,
  Home,
  BookOpen,
  Newspaper,
  Images,
  Settings,
  MessageCircle,
  Camera,
  ChevronRight,
  Check,
  Phone,
  Mail,
  Clock,
  Lock,
  Save,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { GuestbookTab } from "../GuestbookTab/GuestbookTab";
import { NewsTab } from "../NewsTab/NewsTab";
import { GalleryTab } from "../GalleryTab/GalleryTab";

const C = {
  cream: "#f7f0e3",
  green: "#3d6b50",
  greenLight: "#e8f2ec",
  terra: "#c4522a",
  terraLight: "#fceee9",
  amber: "#c4a35a",
  amberLight: "#fdf6e3",
  brown: "#2a1a08",
  brownMid: "#7a5c3a",
};

function StatCard({ icon: Icon, label, value, color, sub }) {
  return (
    <div
      className="rounded-3xl p-5 bg-white shadow-sm"
      style={{ border: `1.5px solid ${color}22` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: color + "18" }}
        >
          <Icon size={20} style={{ color }} />
        </div>
        <span
          className="text-3xl font-bold"
          style={{ color: C.brown, fontFamily: "Georgia,serif" }}
        >
          {value}
        </span>
      </div>
      <p className="font-semibold text-sm" style={{ color: C.brownMid }}>
        {label}
      </p>
      {sub && (
        <p className="text-xs mt-0.5" style={{ color: "#aaa" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function LoadingSpinner() {
  return (
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
  );
}

function Toast({ msg, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl font-semibold text-sm text-white"
      style={{
        backgroundColor: type === "success" ? C.green : C.terra,
        maxWidth: 340,
      }}
    >
      {type === "success" ? (
        <CheckCircle size={18} />
      ) : (
        <AlertCircle size={18} />
      )}
      {msg}
    </motion.div>
  );
}

function useToast() {
  const [toast, setToast] = useState(null);
  const show = useCallback(
    (msg, type = "success") => setToast({ msg, type, id: Date.now() }),
    [],
  );
  const el = toast ? (
    <AnimatePresence>
      <Toast
        key={toast.id}
        msg={toast.msg}
        type={toast.type}
        onClose={() => setToast(null)}
      />
    </AnimatePresence>
  ) : null;
  return [show, el];
}

// ── Overview Tab ──────────────────────────────────────────────────────────────
function OverviewTab({ setActiveTab }) {
  const [stats, setStats] = useState({
    pending: 0,
    news: 0,
    albums: 0,
    photos: 0,
  });
  const [recentPending, setRecentPending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/guestbook?all=true").then((r) => r.json()),
      fetch("/api/news?all=true").then((r) => r.json()),
      fetch("/api/albums").then((r) => r.json()),
    ])
      .then(([g, n, a]) => {
        const pending = (g.entries || []).filter((e) => !e.approved);
        const photos = (a.albums || []).reduce(
          (s, al) => s + (al.photos?.length || 0),
          0,
        );
        setStats({
          pending: pending.length,
          news: (n.posts || []).length,
          albums: (a.albums || []).length,
          photos,
        });
        setRecentPending(pending.slice(0, 2));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="mb-8">
        <h2
          className="text-3xl font-bold mb-1"
          style={{ color: C.brown, fontFamily: "Georgia,serif" }}
        >
          Guten Tag, Manuela!
        </h2>
        <p style={{ color: C.brownMid }}>Hier ist Ihr taeglicher Ueberblick.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={MessageCircle}
          label="Warten auf Freigabe"
          value={stats.pending}
          color={C.terra}
          sub="Gaestebuch"
        />
        <StatCard
          icon={Newspaper}
          label="Neuigkeiten"
          value={stats.news}
          color={C.green}
          sub="Veroeffentlicht"
        />
        <StatCard
          icon={Images}
          label="Fotoalben"
          value={stats.albums}
          color={C.amber}
          sub="In der Galerie"
        />
        <StatCard
          icon={Camera}
          label="Fotos gesamt"
          value={stats.photos}
          color={C.brownMid}
          sub="In allen Alben"
        />
      </div>

      {recentPending.length > 0 && (
        <div
          className="rounded-3xl p-6 mb-8"
          style={{
            backgroundColor: C.terraLight,
            border: `1.5px solid ${C.terra}30`,
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${C.terra}25` }}
            >
              <MessageCircle size={16} style={{ color: C.terra }} />
            </div>
            <h3 className="font-bold" style={{ color: C.brown }}>
              {stats.pending === 1
                ? "1 neuer Eintrag wartet"
                : `${stats.pending} Eintraege warten`}{" "}
              auf Ihre Freigabe!
            </h3>
          </div>
          <div className="space-y-3 mb-4">
            {recentPending.map((e) => (
              <div key={e.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <p className="font-bold text-sm" style={{ color: C.brown }}>
                  {e.author_name} & {e.dog_name}
                </p>
                <p
                  className="text-sm mt-1 italic"
                  style={{ color: C.brownMid }}
                >
                  {e.message.slice(0, 100)}
                  {e.message.length > 100 ? "..." : ""}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setActiveTab("guestbook")}
            className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl text-white"
            style={{ backgroundColor: C.terra }}
          >
            Eintraege jetzt freigeben <ChevronRight size={15} />
          </button>
        </div>
      )}

      <h3 className="font-bold mb-4" style={{ color: C.brown }}>
        Schnellzugriff
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            label: "Neuigkeit schreiben",
            icon: Newspaper,
            desc: "Teilen Sie Neuigkeiten vom Hof",
            color: C.green,
            tab: "news",
          },
          {
            label: "Fotos verwalten",
            icon: Camera,
            desc: "Bilder hochladen und sortieren",
            color: C.amber,
            tab: "gallery",
          },
          {
            label: "Gaestebuch",
            icon: BookOpen,
            desc: "Eintraege lesen und freigeben",
            color: C.terra,
            tab: "guestbook",
          },
        ].map(({ label, icon: Icon, desc, color, tab }) => (
          <button
            key={label}
            onClick={() => setActiveTab(tab)}
            className="text-left bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-50"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{ backgroundColor: color + "18" }}
            >
              <Icon size={20} style={{ color }} />
            </div>
            <p className="font-bold text-sm mb-1" style={{ color: C.brown }}>
              {label}
            </p>
            <p className="text-xs" style={{ color: C.brownMid }}>
              {desc}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Settings Tab ──────────────────────────────────────────────────────────────
function SettingsTab({ onLogout }) {
  const [pw, setPw] = useState({ current: "", next: "", confirm: "" });
  const [showPw, setShowPw] = useState(false);
  const [pwLoading, setPwLoading] = useState(false);
  const [showToast, toastEl] = useToast();

  const changePw = async (e) => {
    e.preventDefault();
    if (pw.next !== pw.confirm) {
      showToast("Passwoerter stimmen nicht ueberein", "error");
      return;
    }
    if (pw.next.length < 6) {
      showToast("Mindestens 6 Zeichen erforderlich", "error");
      return;
    }
    setPwLoading(true);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw.current }),
    });
    if (!res.ok) {
      showToast("Aktuelles Passwort ist falsch", "error");
      setPwLoading(false);
      return;
    }
    showToast(
      "Bitte den Webmaster bitten, die ADMIN_PASSWORD Variable zu aktualisieren.",
    );
    setPw({ current: "", next: "", confirm: "" });
    setPwLoading(false);
  };

  return (
    <div>
      {toastEl}
      <div className="mb-6">
        <h2
          className="text-2xl font-bold"
          style={{ color: C.brown, fontFamily: "Georgia,serif" }}
        >
          Einstellungen
        </h2>
        <p className="text-sm mt-1" style={{ color: C.brownMid }}>
          Ihr Konto verwalten.
        </p>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3
            className="font-bold text-base mb-5 flex items-center gap-2"
            style={{ color: C.brown }}
          >
            <Lock size={16} style={{ color: C.terra }} /> Passwort aendern
          </h3>
          <form onSubmit={changePw} className="space-y-4">
            {[
              { field: "current", label: "Aktuelles Passwort" },
              { field: "next", label: "Neues Passwort (mind. 6 Zeichen)" },
              { field: "confirm", label: "Neues Passwort wiederholen" },
            ].map(({ field, label }) => (
              <div key={field}>
                <label
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: C.brown }}
                >
                  {label}
                </label>
                <input
                  type={showPw ? "text" : "password"}
                  value={pw[field]}
                  onChange={(e) =>
                    setPw((p) => ({ ...p, [field]: e.target.value }))
                  }
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  style={{
                    border: `1.5px solid ${C.terra}30`,
                    backgroundColor: "#faf7f2",
                    color: C.brown,
                  }}
                />
              </div>
            ))}
            <label
              className="flex items-center gap-2 text-sm cursor-pointer"
              style={{ color: C.brownMid }}
            >
              <input
                type="checkbox"
                checked={showPw}
                onChange={(e) => setShowPw(e.target.checked)}
                className="rounded"
              />
              Passwoerter anzeigen
            </label>
            <button
              type="submit"
              disabled={pwLoading || !pw.current || !pw.next}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white disabled:opacity-40"
              style={{ backgroundColor: C.terra }}
            >
              <Save size={14} />{" "}
              {pwLoading ? "Gespeichert..." : "Passwort speichern"}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3
            className="font-bold text-base mb-4 flex items-center gap-2"
            style={{ color: C.brown }}
          >
            <Phone size={16} style={{ color: C.green }} /> Kontaktdaten auf der
            Website
          </h3>
          <p className="text-xs mb-4" style={{ color: C.brownMid }}>
            Zum Aendern wenden Sie sich an Ihren Webmaster.
          </p>
          {[
            { label: "Telefon", value: "+49 123 456789", icon: Phone },
            { label: "WhatsApp", value: "+49 123 456789", icon: MessageCircle },
            { label: "E-Mail", value: "info@boxerhof.de", icon: Mail },
            {
              label: "Oeffnungszeiten",
              value: "Taeglich 08:00 - 20:00",
              icon: Clock,
            },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 py-3 border-b last:border-0"
              style={{ borderColor: "#f0e8da" }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: C.greenLight }}
              >
                <Icon size={15} style={{ color: C.green }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold"
                  style={{ color: C.brownMid }}
                >
                  {label}
                </p>
                <p className="text-sm font-medium" style={{ color: C.brown }}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-base mb-4" style={{ color: C.brown }}>
            Konto
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: C.greenLight, color: C.green }}
            >
              <Eye size={14} /> Website ansehen
            </a>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: `${C.terra}12`, color: C.terra }}
            >
              <LogOut size={14} /> Abmelden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Shell ─────────────────────────────────────────────────────────────────────
const TABS = [
  { id: "overview", label: "Ueberblick", icon: Home },
  { id: "guestbook", label: "Gaestebuch", icon: BookOpen },
  { id: "news", label: "Neuigkeiten", icon: Newspaper },
  { id: "gallery", label: "Galerie", icon: Images },
  { id: "settings", label: "Einstellungen", icon: Settings },
];

export function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");

  const comps = {
    overview: () => <OverviewTab setActiveTab={setActiveTab} />,
    guestbook: GuestbookTab,
    news: NewsTab,
    gallery: GalleryTab,
    settings: () => <SettingsTab onLogout={onLogout} />,
  };
  const ActiveComp = comps[activeTab];

  return (
    <div className="min-h-screen" style={{ backgroundColor: C.cream }}>
      {/* Top bar */}
      <div
        className="sticky top-0 z-50 bg-white shadow-sm"
        style={{ borderBottom: `1.5px solid #e8dece` }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${C.terra}, ${C.amber})`,
              }}
            >
              <PawPrint size={17} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <p
                className="font-bold text-sm leading-tight"
                style={{ color: C.brown }}
              >
                Boxerhof Admin
              </p>
              <p className="text-xs" style={{ color: C.brownMid }}>
                Hallo Manuela!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              className="hidden sm:flex items-center gap-1 text-xs font-medium"
              style={{ color: C.brownMid }}
            >
              <Eye size={13} /> Website ansehen
            </a>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg"
              style={{ color: C.terra, backgroundColor: `${C.terra}10` }}
            >
              <LogOut size={13} /> Abmelden
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div className="max-w-4xl mx-auto px-2 overflow-x-auto">
          <div className="flex">
            {TABS.map((t) => {
              const Icon = t.icon;
              const active = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap"
                  style={{
                    borderColor: active ? C.terra : "transparent",
                    color: active ? C.terra : C.brownMid,
                  }}
                >
                  <Icon size={15} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {ActiveComp && <ActiveComp />}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @keyframes bhSpin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
