
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { User, Car, MessageSquare, ArrowRight } from 'lucide-react';

const ProfileLink: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
  badge?: number;
}> = ({ to, icon, label, badge }) => (
  <Link to={to} className="flex items-center justify-between p-4 hover:bg-gray-50">
    <div className="flex items-center">
      <div className="w-8 h-8 flex items-center justify-center mr-3 text-wheels-primary">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </div>
    <div className="flex items-center">
      {badge !== undefined && (
        <span className="bg-wheels-primary text-white text-xs rounded-full px-2 py-0.5 mr-2">
          {badge}
        </span>
      )}
      <ArrowRight size={18} className="text-gray-400" />
    </div>
  </Link>
);

const Profile: React.FC = () => {
  // Mock user data - in a real app this would come from auth state
  const user = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    joined: 'June 2023'
  };

  return (
    <MainLayout title="Profile">
      <div className="bg-white">
        {/* Profile Header */}
        <div className="p-6 flex items-center border-b border-gray-200">
          <div className="bg-wheels-secondary rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-wheels-textSecondary text-sm">Member since {user.joined}</p>
          </div>
        </div>
        
        {/* Profile menu */}
        <div className="divide-y divide-gray-200">
          <ProfileLink 
            to="/my-listings" 
            icon={<Car size={24} />} 
            label="My Listings" 
            badge={1} 
          />
          <ProfileLink 
            to="/messages" 
            icon={<MessageSquare size={24} />} 
            label="Messages" 
            badge={2} 
          />
          <ProfileLink 
            to="/favorites" 
            icon={<User size={24} />} 
            label="Saved Vehicles" 
          />
          <ProfileLink 
            to="/account-settings" 
            icon={<User size={24} />} 
            label="Account Settings" 
          />
        </div>
        
        {/* Sign out */}
        <div className="p-6">
          <button className="w-full text-center text-wheels-primary font-medium">
            Sign Out
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
