
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, MessageSquare, User } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/') ? 'text-wheels-primary' : 'text-gray-500'}`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/search" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/search') ? 'text-wheels-primary' : 'text-gray-500'}`}
        >
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </Link>
        
        <Link 
          to="/messages" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/messages') ? 'text-wheels-primary' : 'text-gray-500'}`}
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">Messages</span>
        </Link>
        
        <Link 
          to="/profile" 
          className={`flex flex-col items-center justify-center w-full h-full ${isActive('/profile') ? 'text-wheels-primary' : 'text-gray-500'}`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
