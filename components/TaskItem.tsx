
import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const priorityStyles = {
    high: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-primary',
    medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500',
    low: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  };

  const priorityLabels = {
    high: 'عالية',
    medium: 'متوسطة',
    low: 'منخفضة',
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 shadow-sm cursor-pointer">
      <div className="flex justify-between items-start text-xs text-gray-500 dark:text-gray-400 mb-2 gap-2">
        <span className="truncate flex-1">{task.projectTitle}</span>
        <span className="whitespace-nowrap">{task.time}</span>
      </div>
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 min-h-[2.5rem]">{task.title}</h4>
      <div className="flex items-center justify-between gap-2">
        <span className={`${priorityStyles[task.priority]} text-[10px] uppercase font-bold px-2 py-1 rounded whitespace-nowrap`}>
          {priorityLabels[task.priority]}
        </span>
        <div className="flex items-center gap-2 min-w-0">
          <img alt={task.assignee.name} className="w-6 h-6 rounded-full flex-shrink-0" src={task.assignee.avatar} />
          <span className="text-xs text-gray-500 dark:text-gray-400 truncate">{task.assignee.name}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
