
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import VehicleCard from '@/components/VehicleCard';
import SearchFilters from '@/components/SearchFilters';
import { FilterOptions } from '@/components/SearchFilters';

// Mock data for the demo
const featuredVehicles = [
  {
    id: '1',
    title: '2021 Toyota Camry XLE',
    price: 28500,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400',
    year: 2021,
    make: 'Toyota',
    model: 'Camry',
    mileage: 15200,
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    title: '2019 Honda Accord Sport',
    price: 24700,
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400',
    year: 2019,
    make: 'Honda',
    model: 'Accord',
    mileage: 28500,
    location: 'Los Angeles, CA'
  },
  {
    id: '3',
    title: '2020 Tesla Model 3',
    price: 42999,
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400',
    year: 2020,
    make: 'Tesla',
    model: 'Model 3',
    mileage: 18700,
    location: 'Seattle, WA'
  },
  {
    id: '4',
    title: '2018 BMW 5 Series',
    price: 32500,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400', 
    year: 2018,
    make: 'BMW',
    model: '5 Series',
    mileage: 38600,
    location: 'Chicago, IL'
  }
];

const Index: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // In a real app, this would trigger an API call to search vehicles
  };

  const handleFilter = (filters: FilterOptions) => {
    console.log('Applied filters:', filters);
    // In a real app, this would trigger an API call with the filters
  };

  return (
    <MainLayout>
      <div className="px-4 pt-4 pb-6">
        <h1 className="text-2xl font-bold mb-4 text-wheels-text">Wheels Marketplace</h1>
        
        <SearchFilters onSearch={handleSearch} onFilter={handleFilter} />
        
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Featured Vehicles</h2>
          <div className="grid grid-cols-1 gap-4">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
