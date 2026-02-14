
import React from 'react';

interface StatCardProps {
  label: string;
  value: number | string;
  change: string;
  icon: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, change, icon, color }) => {
  const colorMap: Record<string, string> = {
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500',
    red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-primary',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500',
  };

  const textChangeColor = color === 'red' ? 'text-red-400 dark:text-primary' : (color === 'green' ? 'text-green-500' : 'text-gray-400 dark:text-gray-500');

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 md:p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-0.5 group cursor-default">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className={`w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${colorMap[color]}`}>
          <span className="material-icons text-[20px] md:text-[22px]">{icon}</span>
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
      <div className="flex flex-col">
        <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">{label}</span>
        <span className={`${textChangeColor} text-[10px] md:text-xs font-medium mt-1`}>{change}</span>
      </div>
    </div>
  );
};

export default StatCard;
