export const teamMembers = [
  {
    id: '1',
    name: 'Member 1',
    role: 'Project Lead',
    avatar: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%234A5568"/><text x="50" y="50" font-family="Arial" font-size="35" fill="white" text-anchor="middle" dy=".3em">M1</text></svg>',
  },
  {
    id: '2',
    name: 'Member 2',
    role: 'Senior Developer',
    avatar: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%234A5568"/><text x="50" y="50" font-family="Arial" font-size="35" fill="white" text-anchor="middle" dy=".3em">M2</text></svg>',
  },
  {
    id: '3',
    name: 'Member 3',
    role: 'Frontend Developer',
    avatar: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%234A5568"/><text x="50" y="50" font-family="Arial" font-size="35" fill="white" text-anchor="middle" dy=".3em">M3</text></svg>',
  },
];

export const stats = {
  teamMembers: 12,
  projects: 284,
  tasksCompleted: 45,
  timeRemaining: 154,
};

export const upcomingDeadlines = [
  {
    id: '1',
    title: 'Frontend MVP',
    dueDate: '2024-03-20',
    status: 'pending',
  },
  {
    id: '2',
    title: 'API Documentation',
    dueDate: '2024-03-25',
    status: 'pending',
  },
];

export const recentActivities = [
  {
    id: '1',
    user: teamMembers[1],
    action: 'committed to main branch',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    user: teamMembers[2],
    action: 'completed API integration',
    timestamp: '5 hours ago',
  },
];