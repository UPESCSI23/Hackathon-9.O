import React from 'react';
import { User, Bell, Lock, Palette, Globe, HelpCircle } from 'lucide-react';

const settingsSections = [
  {
    icon: User,
    title: 'Profile Settings',
    description: 'Update your photo and personal details'
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Choose what notifications you receive'
  },
  {
    icon: Lock,
    title: 'Password & Security',
    description: 'Change password and security settings'
  },
  {
    icon: Palette,
    title: 'Appearance',
    description: 'Customize the interface and theme'
  },
  {
    icon: Globe,
    title: 'Language & Region',
    description: 'Set your language and regional preferences'
  },
  {
    icon: HelpCircle,
    title: 'Help & Support',
    description: 'Get help or contact support'
  }
];

export function SettingsTab() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {settingsSections.map((section) => (
          <button
            key={section.title}
            className="bg-[#1a1f2e] p-4 lg:p-6 rounded-lg text-left hover:bg-[#2a2f3e] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <section.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{section.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{section.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}