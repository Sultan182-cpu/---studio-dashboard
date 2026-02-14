
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Close mobile sidebar when switching tabs
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [activeTab]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileSidebarOpen]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileSidebarOpen}
        closeMobileSidebar={() => setIsMobileSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab !== 'dashboard' && (
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <span className="material-icons text-5xl md:text-6xl text-gray-400 mb-4">construction</span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">هذه الصفحة قيد التطوير</h2>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">نحن نعمل بجد لإطلاق {activeTab} قريباً!</p>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="mt-6 px-6 py-3 bg-primary text-white rounded-full hover:bg-orange-600 transition-all active:scale-95 shadow-lg hover:shadow-xl"
                >
                  العودة للوحة التحكم
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
