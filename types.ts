
export interface Project {
  id: string;
  title: string;
  date: string;
  completedTasks: number;
  totalTasks: number;
  progress: number;
  members: string[];
  status: 'on-track' | 'at-risk' | 'delayed';
}

export interface Task {
  id: string;
  projectTitle: string;
  time: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  assignee: {
    name: string;
    avatar: string;
  };
}

export interface DashboardStats {
  activeProjects: number;
  completedTasks: number;
  pendingTasks: number;
  teamMembers: number;
}
