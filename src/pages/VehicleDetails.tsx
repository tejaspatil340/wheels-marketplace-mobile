
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/MainLayout';

// Mock data - in a real app this would come from an API
const vehicleDetails = {
  id: '1',
  title: '2021 Toyota Camry XLE',
  description: 'Clean title, one owner, well maintained with all service records. Features include leather seats, sunroof, Apple CarPlay and Android Auto integration, adaptive cruise control, and blind spot monitoring.',
  price: 28500,
  images: [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=500',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500',
  ],
  year: 2021,
  make: 'Toyota',
  model: 'Camry',
  trim: 'XLE',
  mileage: 15200,
  exteriorColor: 'Midnight Black Metallic',
  interiorColor: 'Black Leather',
  fuelType: 'Gasoline',
  transmission: 'Automatic',
  drivetrain: 'FWD',
  engine: '2.5L 4-Cylinder',
  location: 'San Francisco, CA',
  sellerName: 'John D.',
  sellerJoined: 'March 2023',
};

const VehicleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // In a real app, you'd fetch the vehicle details using the id
  
  return (
    <MainLayout showNavigation={false}>
      <div className="pb-20">
        {/* Header with back button */}
        <div className="fixed top-0 left-0 right-0 bg-white z-40 border-b border-gray-200">
          <div className="flex items-center h-14 px-4">
            <button 
              onClick={() => navigate(-1)} 
              className="p-2 -ml-2 rounded-full hover:bg-gray-100"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-lg font-semibold ml-2">Vehicle Details</h1>
          </div>
        </div>
        
        {/* Main content with padding for fixed header */}
        <div className="pt-14">
          {/* Image gallery */}
          <div className="relative bg-gray-100 overflow-hidden">
            <img 
              src={vehicleDetails.images[0]} 
              alt={vehicleDetails.title} 
              className="w-full h-64 object-cover"
            />
            
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-xs font-medium">
              1/{vehicleDetails.images.length} Photos
            </div>
          </div>
          
          {/* Vehicle info */}
          <div className="p-4">
            <h1 className="text-2xl font-bold text-wheels-text">{vehicleDetails.title}</h1>
            
            <div className="mt-1 text-2xl font-bold text-wheels-primary">
              ${vehicleDetails.price.toLocaleString()}
            </div>
            
            <div className="flex items-center mt-2 text-wheels-textSecondary">
              <MapPin size={16} className="mr-1" />
              <span>{vehicleDetails.location}</span>
            </div>
            
            {/* Specs grid */}
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <div className="text-sm text-wheels-textSecondary">Year</div>
                <div className="font-medium">{vehicleDetails.year}</div>
              </div>
              <div>
                <div className="text-sm text-wheels-textSecondary">Make</div>
                <div className="font-medium">{vehicleDetails.make}</div>
              </div>
              <div>
                <div className="text-sm text-wheels-textSecondary">Model</div>
                <div className="font-medium">{vehicleDetails.model}</div>
              </div>
              <div>
                <div className="text-sm text-wheels-textSecondary">Trim</div>
                <div className="font-medium">{vehicleDetails.trim}</div>
              </div>
              <div>
                <div className="text-sm text-wheels-textSecondary">Mileage</div>
                <div className="font-medium">{vehicleDetails.mileage.toLocaleString()} mi</div>
              </div>
              <div>
                <div className="text-sm text-wheels-textSecondary">Transmission</div>
                <div className="font-medium">{vehicleDetails.transmission}</div>
              </div>
              <div>
                <div className="text-sm text-wheels-textSecondary">Exterior Color</div>
                <div className="font-medium">{vehicleDetails.exteriorColor}</div>
              </div>
              <div>
                <div className="text-sm text-wheels-textSecondary">Interior Color</div>
                <div className="font-medium">{vehicleDetails.interiorColor}</div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="mt-2 text-wheels-text">{vehicleDetails.description}</p>
            </div>
            
            {/* Seller info */}
            <div className="mt-6 p-4 bg-wheels-accent rounded-lg">
              <div className="flex items-center">
                <div className="bg-wheels-secondary rounded-full w-12 h-12 flex items-center justify-center text-white">
                  <User size={24} />
                </div>
                <div className="ml-3">
                  <div className="font-medium">{vehicleDetails.sellerName}</div>
                  <div className="text-sm text-wheels-textSecondary">Member since {vehicleDetails.sellerJoined}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <Button className="w-full flex items-center justify-center gap-2 bg-wheels-primary">
            <MessageSquare size={20} />
            Contact Seller
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default VehicleDetails;
