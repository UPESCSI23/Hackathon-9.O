import React from "react";
import { DivideIcon as LucideIcon } from "lucide-react";

export function StatsCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-[#1a1f2e] p-4 rounded-lg">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-blue-500" />
        <div>
          <p className="text-sm text-gray-400">{label}</p>
          <p className="text-2xl font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

