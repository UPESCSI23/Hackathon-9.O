import React from "react";
import { MoreVertical } from "lucide-react";

export function TeamList({ members }) {
  return (
    <div className="bg-[#1a1f2e] rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">Team Members</h2>
        <button className="text-gray-400 hover:text-white">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-white text-sm">{member.name}</p>
                <p className="text-gray-400 text-xs">{member.role}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

