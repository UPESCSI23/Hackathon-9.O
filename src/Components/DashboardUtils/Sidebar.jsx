import React from "react";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Calendar,
  Settings,
  X,
} from "lucide-react";

export function Sidebar({ activeTab, onTabChange, isOpen, onClose }) {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
    { icon: Users, label: "Team", value: "team" },
    { icon: FolderKanban, label: "Project", value: "project" },
    { icon: Calendar, label: "Schedule", value: "schedule" },
    { icon: Settings, label: "Settings", value: "settings" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
        fixed lg:static inset-y-0 left-0 w-64 bg-[#1a1f2e] p-4 flex flex-col
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6 text-white" />
            <span className="text-white font-semibold">HACKATHON 9.0</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                onTabChange(item.value);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1
                ${
                  item.value === activeTab
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-[#2a2f3e] hover:text-white"
                }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

