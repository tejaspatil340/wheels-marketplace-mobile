
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import VehicleCard from '@/components/VehicleCard';
import { Button } from '@/components/ui/button';

// Mock data for the demo
const myListings = [
  {
    id: '5',
    title: '2017 Audi Q5 Premium Plus',
    price: 26900,
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&h=400',
    year: 2017,
    make: 'Audi',
    model: 'Q5',
    mileage: 45800,
    location: 'Portland, OR'
  }
];

const MyListings: React.FC = () => {
  return (
    <MainLayout title="My Listings">
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Active Listings</h2>
          <Button className="bg-wheels-primary text-white">
            Create Listing
          </Button>
        </div>
        
        {myListings.length > 0 ? (
          <div className="space-y-4">
            {myListings.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-wheels-textSecondary mb-4">You don't have any active listings</p>
            <Button className="bg-wheels-primary text-white">
              Create Your First Listing
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default MyListings;
