import React from 'react';
import { Plus, Search, BarChart2, Users, Clock, Tag } from 'lucide-react';

const projects = [
  {
    id: '1',
    name: 'Frontend Development',
    description: 'Implement new user interface components and features',
    progress: 75,
    team: 4,
    deadline: '2024-04-15',
    status: 'In Progress'
  },
  {
    id: '2',
    name: 'API Integration',
    description: 'Connect backend services with frontend application',
    progress: 90,
    team: 3,
    deadline: '2024-03-30',
    status: 'In Progress'
  },
  {
    id: '3',
    name: 'Database Migration',
    description: 'Upgrade database schema and migrate existing data',
    progress: 100,
    team: 2,
    deadline: '2024-03-10',
    status: 'Completed'
  }
];

export function ProjectTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New Project</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full bg-[#1a1f2e] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-[#1a1f2e] p-2 rounded-lg text-gray-400 hover:text-white">
          <Tag className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#1a1f2e] rounded-lg p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
              <div>
                <h3 className="text-white font-semibold">{project.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{project.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm w-fit ${
                project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">{project.progress}%</span>
                </div>
                <div className="h-2 bg-[#2a2f3e] rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{project.team} members</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Due {project.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <BarChart2 className="h-4 w-4" />
                  <span className="text-sm">{project.progress}% completed</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}