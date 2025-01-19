import React from "react";

export function ActivityFeed({ activities }) {
  return (
    <div className="bg-[#1a1f2e] rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">Recent Activity</h2>
        <button className="text-blue-500 text-sm hover:text-blue-400">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <img
              src={activity.user.avatar}
              alt={activity.user.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-white text-sm">
                <span className="font-medium">{activity.user.name}</span>{" "}
                {activity.action}
              </p>
              <p className="text-gray-400 text-xs">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

