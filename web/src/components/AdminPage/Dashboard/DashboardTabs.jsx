import React from "react";
import { BookOpen, Newspaper, Images } from "lucide-react";

const ICON_MAP = {
  guestbook: BookOpen,
  news: Newspaper,
  gallery: Images,
};

export function DashboardTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="bg-white border-b border-gray-100 px-6">
      <div className="flex gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = ICON_MAP[tab.id];
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-orange-600 text-orange-600"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              <Icon size={16} /> {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
