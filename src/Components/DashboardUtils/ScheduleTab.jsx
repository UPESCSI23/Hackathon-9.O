import React from 'react';
import { Calendar as CalendarIcon, Clock, Users, Plus } from 'lucide-react';

const events = [
  {
    id: '1',
    title: 'Team Standup',
    type: 'meeting',
    date: '2024-03-18',
    time: '10:00 AM',
    participants: 8
  },
  {
    id: '2',
    title: 'Project Review',
    type: 'review',
    date: '2024-03-18',
    time: '2:00 PM',
    participants: 5
  },
  {
    id: '3',
    title: 'Frontend MVP Deadline',
    type: 'deadline',
    date: '2024-03-20',
    time: '6:00 PM',
    participants: 4
  }
];

export function ScheduleTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Schedule</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Add Event</span>
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-4">
        {Array.from({ length: 7 }).map((_, i) => {
          const date = new Date();
          date.setDate(date.getDate() + i);
          const isToday = i === 0;

          return (
            <div
              key={i}
              className={`p-2 sm:p-4 rounded-lg text-center ${
                isToday ? 'bg-blue-600' : 'bg-[#1a1f2e]'
              }`}
            >
              <p className={`text-xs sm:text-sm ${isToday ? 'text-blue-200' : 'text-gray-400'}`}>
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </p>
              <p className={`text-base sm:text-lg font-semibold ${isToday ? 'text-white' : 'text-gray-300'}`}>
                {date.getDate()}
              </p>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-[#1a1f2e] rounded-lg p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${
                  event.type === 'meeting' ? 'bg-blue-500/20 text-blue-400' :
                  event.type === 'review' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{event.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-1">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.participants} participants</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-sm">{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}