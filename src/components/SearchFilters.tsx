
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  priceRange: [number, number];
  make: string;
  model: string;
  yearRange: [number, number];
  sortBy: string;
}

const carMakes = ['Any', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Audi', 'Tesla'];

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 100000],
    make: 'Any',
    model: '',
    yearRange: [2000, 2025],
    sortBy: 'newest',
  });

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleFilterChange = (filterUpdate: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...filterUpdate };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search make, model, or keyword"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-wheels-textSecondary" />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <Filter size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <h3 className="font-medium">Filters</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
                    max={100000}
                    step={1000}
                    onValueChange={(value) => 
                      handleFilterChange({ priceRange: [value[0], value[1]] })
                    }
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${filters.priceRange[0].toLocaleString()}</span>
                  <span>${filters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Make</label>
                <Select 
                  value={filters.make}
                  onValueChange={(value) => handleFilterChange({ make: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    {carMakes.map((make) => (
                      <SelectItem key={make} value={make}>{make}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Year Range</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[filters.yearRange[0], filters.yearRange[1]]}
                    min={1990}
                    max={2025}
                    step={1}
                    onValueChange={(value) => 
                      handleFilterChange({ yearRange: [value[0], value[1]] })
                    }
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{filters.yearRange[0]}</span>
                  <span>{filters.yearRange[1]}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select 
                  value={filters.sortBy} 
                  onValueChange={(value) => handleFilterChange({ sortBy: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                className="w-full" 
                onClick={() => onFilter(filters)}
              >
                Apply Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SearchFilters;
