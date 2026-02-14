
import React from 'react';
import StatCard from './StatCard';
import ProjectCard from './ProjectCard';
import TaskItem from './TaskItem';
import ProductivityInsight from './ProductivityInsight';
import { Project, Task } from '../types';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'المشاريع النشطة', value: 12, change: '+2 هذا الأسبوع', icon: 'bar_chart', color: 'yellow' },
    { label: 'المهام المنجزة', value: 86, change: '67% نسبة الإكمال', icon: 'check_circle_outline', color: 'green' },
    { label: 'مهام معلقة', value: 10, change: '5 تستحق اليوم', icon: 'schedule', color: 'red' },
    { label: 'أعضاء الفريق', value: 24, change: '3 متصلون الآن', icon: 'people_outline', color: 'blue' },
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'تطوير تطبيق الجوال',
      date: '12 فبراير 2026',
      completedTasks: 16,
      totalTasks: 18,
      progress: 65,
      status: 'on-track',
      members: ['user1', 'user2', 'user3']
    },
    {
      id: '2',
      title: 'إعادة تصميم الموقع',
      date: '15 فبراير 2026',
      completedTasks: 15,
      totalTasks: 20,
      progress: 40,
      status: 'on-track',
      members: ['user4', 'user5', 'user6']
    },
    {
      id: '3',
      title: 'تصميم 20 صفحة هبوط',
      date: '22 فبراير 2026',
      completedTasks: 15,
      totalTasks: 20,
      progress: 30,
      status: 'at-risk',
      members: ['user7', 'user8', 'user9']
    },
    {
      id: '4',
      title: 'التصميم المرئي لتطبيق الويب',
      date: '24 فبراير 2026',
      completedTasks: 15,
      totalTasks: 20,
      progress: 85,
      status: 'on-track',
      members: ['user10', 'user11', 'user12']
    },
  ];

  const upcomingTasks: Task[] = [
    {
      id: 't1',
      projectTitle: 'إعادة تصميم الموقع',
      time: 'اليوم، 3:00 م',
      title: 'مراجعة نماذج التصميم',
      priority: 'high',
      assignee: { name: 'فلويد ميلز', avatar: 'https://picsum.photos/seed/user1/40/40' }
    },
    {
      id: 't2',
      projectTitle: 'حملة التسويق للربع الأول',
      time: 'اليوم، 3:00 م',
      title: 'تحضير عرض العميل',
      priority: 'high',
      assignee: { name: 'تيريزا ويب', avatar: 'https://picsum.photos/seed/user2/40/40' }
    },
    {
      id: 't3',
      projectTitle: 'تطوير تطبيق الجوال',
      time: 'اليوم، 3:00 م',
      title: 'مراجعة الكود - المصادقة',
      priority: 'medium',
      assignee: { name: 'دارلين روبرتسون', avatar: 'https://picsum.photos/seed/user3/40/40' }
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">لوحة التحكم</h1>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">أهلاً بعودتك! إليك ما يحدث مع مشاريعك اليوم.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
        <div className="xl:col-span-2 space-y-6 md:space-y-8">
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">المشاريع الأخيرة</h2>
              <button className="text-xs md:text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">عرض الكل</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">المهام القادمة</h2>
              <button className="text-xs md:text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">عرض الكل</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {upcomingTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </section>
        </div>

        <div className="xl:col-span-1">
          <ProductivityInsight />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
