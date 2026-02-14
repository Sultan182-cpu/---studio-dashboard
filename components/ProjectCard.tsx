
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isAtRisk = project.status === 'at-risk';

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 md:p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white group-hover:text-primary transition-colors truncate">{project.title}</h3>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span className="material-icons text-[14px] ml-1">calendar_today</span>
            <span className="truncate">{project.date}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
        <span className="material-icons text-[14px] ml-1 text-green-500">check_circle</span>
        {project.completedTasks}/{project.totalTasks} مهمة
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-400">التقدم</span>
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="3"
                className="text-gray-200 dark:text-gray-700"
              />
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={88}
                strokeDashoffset={88 - (88 * project.progress) / 100}
                className="text-primary transition-all duration-1000"
              />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-900 dark:text-gray-300">{project.progress}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {project.members.slice(0, 2).map((_, idx) => (
              <img
                key={idx}
                alt="Avatar"
                className="w-6 h-6 rounded-full border-2 border-surface-light dark:border-surface-dark"
                src={`https://picsum.photos/seed/project-${project.id}-${idx}/40/40`}
              />
            ))}
            {project.members.length > 2 && (
              <div className="w-6 h-6 rounded-full border-2 border-surface-light dark:border-surface-dark bg-gray-700 flex items-center justify-center text-[9px] text-white font-medium">
                +{project.members.length - 2}
              </div>
            )}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">{project.members.length} أعضاء</span>
        </div>
        <span className={`text-[10px] md:text-xs px-2 md:px-2.5 py-1 rounded-full font-medium transition-colors ${isAtRisk
            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500'
            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
          }`}>
          {isAtRisk ? 'في خطر' : 'على المسار'}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
