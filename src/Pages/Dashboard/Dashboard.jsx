import React, { useState } from "react";
import { Users, FolderKanban, CheckCircle, Clock } from "lucide-react";
import { Sidebar } from "../../Components/DashboardUtils/Sidebar.jsx";
import { StatsCard } from "../../Components/DashboardUtils/StatsCard.jsx";
import { TeamList } from "../../Components/DashboardUtils/TeamList.jsx";
import { ActivityFeed } from "../../Components/DashboardUtils/ActivityFeed.jsx";
import { DeadlinesList } from "../../Components/DashboardUtils/DeadlinesList.jsx";
import { TeamTab } from "../../Components/DashboardUtils/TeamTab.jsx";
import { ProjectTab } from "../../Components/DashboardUtils/ProjectTab.jsx";
import { ScheduleTab } from "../../Components/DashboardUtils/ScheduleTab.jsx";
import { SettingsTab } from "../../Components/DashboardUtils/SettingsTab.jsx";
import {
  stats,
  teamMembers,
  recentActivities,
  upcomingDeadlines,
} from "../../data/mockData.js";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "team":
        return <TeamTab members={teamMembers} />;
      case "project":
        return <ProjectTab />;
      case "schedule":
        return <ScheduleTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatsCard
                icon={Users}
                label="Team Members"
                value={stats.teamMembers}
              />
              <StatsCard
                icon={FolderKanban}
                label="Projects"
                value={stats.projects}
              />
              <StatsCard
                icon={CheckCircle}
                label="Tasks Completed"
                value={stats.tasksCompleted}
              />
              <StatsCard
                icon={Clock}
                label="Time Remaining"
                value={stats.timeRemaining}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-[#1a1f2e] rounded-lg p-4 mb-8">
                  <h2 className="text-white font-semibold mb-4">
                    Project Timeline
                  </h2>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    Timeline visualization would go here
                  </div>
                </div>
                <ActivityFeed activities={recentActivities} />
              </div>

              <div className="space-y-8">
                <TeamList members={teamMembers} />
                <DeadlinesList tasks={upcomingDeadlines} />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0f1219]">
      <Sidebar
        onTabChange={setActiveTab}
        activeTab={activeTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 p-4 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 ">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-white p-2 pt-16"
            >
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text-xl lg:text-2xl font-bold text-white pt-14">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 pt-16">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#2a2f3e] flex items-center justify-center text-white font-semibold">
              M1
            </div>
            <span className="text-white hidden sm:block">Member 1</span>
          </div>
        </div>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;

