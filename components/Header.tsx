
import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  toggleMobileSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode, toggleMobileSidebar }) => {
  return (
    <header className="h-16 md:h-16 flex items-center justify-between px-4 md:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-background-dark/80 backdrop-blur-md z-10 transition-colors duration-300">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="القائمة"
        >
          <span className="material-icons text-[24px]">menu</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
          <span className="material-icons text-sm">access_time</span>
          <span className="hidden md:inline">آخر تعديل منذ ساعتين</span>
          <span className="md:hidden">ساعتين</span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          className="hidden sm:flex p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors items-center justify-center"
          aria-label="المفضلة"
        >
          <span className="material-icons text-[20px]">star_border</span>
        </button>
        <button
          className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative flex items-center justify-center"
          aria-label="الإشعارات"
        >
          <span className="material-icons text-[20px]">notifications_none</span>
          <span className="absolute top-1.5 left-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center justify-center"
          aria-label={isDarkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
        >
          <span className="material-icons text-[20px]">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <button className="bg-primary hover:bg-orange-600 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-medium text-sm transition-all shadow-lg shadow-orange-500/20 active:scale-95">
          <span className="hidden sm:inline">مشاركة</span>
          <span className="material-icons text-[18px] sm:hidden">share</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
