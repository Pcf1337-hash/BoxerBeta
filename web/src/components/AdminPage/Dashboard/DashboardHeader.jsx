import React from "react";
import { PawPrint, LogOut } from "lucide-react";

export function DashboardHeader({ onLogout }) {
  return (
    <div className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
          <PawPrint className="text-orange-600" size={20} />
        </div>
        <div>
          <h1 className="font-bold text-gray-900 text-lg leading-tight">
            Boxerhof Admin
          </h1>
          <p className="text-gray-400 text-xs">Hallo Manuela 🐾</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="/"
          className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
        >
          Website ansehen
        </a>
        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-500 transition-colors"
        >
          <LogOut size={15} /> Abmelden
        </button>
      </div>
    </div>
  );
}
