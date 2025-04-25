
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export interface VehicleCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  year: number;
  make: string;
  model: string;
  mileage: number;
  location: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  title,
  price,
  imageUrl,
  year,
  make,
  model,
  mileage,
  location
}) => {
  return (
    <Link to={`/vehicles/${id}`} className="block">
      <div className="rounded-lg overflow-hidden bg-white card-shadow animate-fade-in">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={`${year} ${make} ${model}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-wheels-primary text-white px-3 py-1 rounded-full font-semibold">
            ${price.toLocaleString()}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg text-wheels-text truncate">{title}</h3>
          
          <div className="flex items-center mt-1 text-sm text-wheels-textSecondary">
            <span>{year}</span>
            <span className="mx-1">•</span>
            <span>{mileage.toLocaleString()} mi</span>
          </div>
          
          <div className="flex items-center mt-2 text-sm text-wheels-textSecondary">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
