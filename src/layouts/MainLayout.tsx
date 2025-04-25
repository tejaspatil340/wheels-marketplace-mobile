
import React from 'react';
import BottomNavigation from '@/components/BottomNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showNavigation = true,
  title
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {title && (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
          <div className="px-4 py-4">
            <h1 className="text-xl font-bold text-wheels-text">{title}</h1>
          </div>
        </header>
      )}
      
      <main className="flex-1 pb-20">
        {children}
      </main>
      
      {showNavigation && <BottomNavigation />}
    </div>
  );
};

export default MainLayout;
