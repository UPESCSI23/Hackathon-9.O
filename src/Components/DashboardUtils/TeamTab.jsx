import React from 'react';
import { Mail, Phone, MapPin, MoreVertical, Plus } from 'lucide-react';

export function TeamTab({ members }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Team Members</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Add Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <div key={member.id} className="bg-[#1a1f2e] rounded-lg p-4 lg:p-6">
            <div className="flex justify-between">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
              />
              <button className="text-gray-400 hover:text-white">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            <h3 className="text-white font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-400 text-sm">{member.role}</p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm truncate">{member.name.toLowerCase().replace(' ', '.')}@company.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}