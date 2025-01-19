import React from "react";
import { Calendar } from "lucide-react";

export function DeadlinesList({ tasks }) {
  return (
    <div className="bg-[#1a1f2e] rounded-lg p-4">
      <h2 className="text-white font-semibold mb-4">Upcoming Deadlines</h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-gray-400" />
            <div>
              <p className="text-white text-sm">{task.title}</p>
              <p className="text-gray-400 text-xs">Due {task.dueDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

