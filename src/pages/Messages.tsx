
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

// Mock data for the demo
const conversations = [
  {
    id: '1',
    user: 'John Smith',
    lastMessage: 'Is this vehicle still available?',
    timestamp: '10:30 AM',
    vehicle: '2021 Toyota Camry XLE',
    unread: true
  },
  {
    id: '2',
    user: 'Sarah Johnson',
    lastMessage: 'Would you accept $26,500?',
    timestamp: 'Yesterday',
    vehicle: '2017 Audi Q5 Premium Plus',
    unread: false
  },
  {
    id: '3',
    user: 'Mike Wilson',
    lastMessage: 'Great, can I come see it tomorrow?',
    timestamp: 'Mon',
    vehicle: '2019 Honda Accord Sport',
    unread: false
  }
];

const Messages: React.FC = () => {
  return (
    <MainLayout title="Messages">
      <div className="divide-y divide-gray-200">
        {conversations.map((conversation) => (
          <Link
            to={`/messages/${conversation.id}`}
            key={conversation.id}
            className="block px-4 py-4 hover:bg-gray-50"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-wheels-secondary rounded-full w-12 h-12 flex items-center justify-center text-white font-medium">
                  {conversation.user.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <span className="font-medium">{conversation.user}</span>
                    {conversation.unread && (
                      <span className="ml-2 w-2 h-2 bg-wheels-primary rounded-full"></span>
                    )}
                  </div>
                  <div className="text-sm text-wheels-textSecondary mt-0.5">
                    {conversation.vehicle}
                  </div>
                  <div className="text-sm text-wheels-textSecondary mt-1 line-clamp-1">
                    {conversation.lastMessage}
                  </div>
                </div>
              </div>
              <span className="text-xs text-wheels-textSecondary">
                {conversation.timestamp}
              </span>
            </div>
          </Link>
        ))}
        
        {conversations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-wheels-textSecondary">No messages yet</p>
            <p className="text-sm mt-2 text-wheels-textSecondary">
              When you contact sellers or receive inquiries, they'll appear here.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Messages;
