
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen: boolean;
  closeMobileSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isMobileOpen, closeMobileSidebar }) => {
  const navItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: 'dashboard' },
    { id: 'projects', label: 'المشاريع', icon: 'folder_open' },
    { id: 'tasks', label: 'المهام', icon: 'check_box' },
    { id: 'calendar', label: 'التقويم', icon: 'calendar_today' },
    { id: 'team', label: 'الفريق', icon: 'group' },
    { id: 'settings', label: 'الإعدادات', icon: 'settings' },
  ];

  const workspaces = [
    { label: 'حملة التسويق', color: 'bg-primary' },
    { label: 'تطوير المنتج', color: 'bg-yellow-500' },
    { label: 'مشاريع العملاء', color: 'bg-green-500' },
    { label: 'إدارة التواصل الاجتماعي', color: 'bg-blue-500' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-backdrop"
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 right-0 z-50
        w-72 lg:w-64 flex-shrink-0 
        bg-surface-light dark:bg-[#0F0F0F] 
        border-l border-gray-200 dark:border-gray-800 
        flex flex-col justify-between overflow-y-auto
        transition-all duration-300
        ${isMobileOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile close button */}
        <div className="lg:hidden flex justify-start px-4 pt-4">
          <button
            onClick={closeMobileSidebar}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="إغلاق القائمة"
          >
            <span className="material-icons">close</span>
          </button>
        </div>

        <div>
          <div className="px-4 mt-4 lg:mt-8 mb-6">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer mb-3 px-2 py-2">
              <span className="material-icons text-[20px]">search</span>
              <span className="text-sm">بحث</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer px-2 py-2">
              <span className="material-icons text-[20px]">chat_bubble_outline</span>
              <span className="text-sm">الدردشة الذكية</span>
            </div>
          </div>

          <nav className="px-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all ${activeTab === item.id
                    ? 'bg-gray-100 dark:bg-card-dark text-primary dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
              >
                <span className={`material-icons text-[20px] ${activeTab === item.id ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 px-6">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              <span>مساحات العمل</span>
              <button className="material-icons text-sm cursor-pointer hover:text-primary transition-colors" aria-label="إضافة مساحة عمل">add</button>
            </div>
            <div className="space-y-3">
              {workspaces.map((ws, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${ws.color}`}></span>
                  <span className="truncate">{ws.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
            <img
              alt="User"
              className="w-9 h-9 rounded-full object-cover border border-gray-300 dark:border-gray-600 flex-shrink-0"
              src="https://picsum.photos/seed/user123/100/100"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">أوياسم</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">oyasim1@gmail.com</p>
            </div>
            <span className="material-icons text-gray-400 text-sm flex-shrink-0">unfold_more</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
