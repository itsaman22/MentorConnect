import React, { useState } from 'react';

const FilterSidebar = ({ filters, onFiltersChange, isVisible, onClose }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...localFilters, [key]: value };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handlePriceRangeChange = (index, value) => {
    const newPriceRange = [...localFilters.priceRange];
    newPriceRange[index] = parseInt(value);
    handleFilterChange('priceRange', newPriceRange);
  };

  const clearFilters = () => {
    const defaultFilters = {
      priceRange: [0, 500],
      experience: '',
      rating: 0,
      availability: false,
    };
    setLocalFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isVisible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 lg:w-64 bg-white shadow-lg lg:shadow-none z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isVisible ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            <div className="flex space-x-2">
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="lg:hidden text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Price Range (per hour)</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={localFilters.priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={localFilters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Max"
                />
              </div>
              <div className="text-sm text-gray-600">
                ${localFilters.priceRange[0]} - ${localFilters.priceRange[1]}
              </div>
            </div>
          </div>

          {/* Experience Level */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Experience Level</h4>
            <div className="space-y-2">
              {[
                { value: '', label: 'Any Level' },
                { value: 'junior', label: '1-3 years' },
                { value: 'mid', label: '4-7 years' },
                { value: 'senior', label: '8-15 years' },
                { value: 'expert', label: '15+ years' },
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="experience"
                    value={option.value}
                    checked={localFilters.experience === option.value}
                    onChange={(e) => handleFilterChange('experience', e.target.value)}
                    className="text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
            <div className="space-y-2">
              {[
                { value: 0, label: 'Any Rating' },
                { value: 4, label: '4+ Stars' },
                { value: 4.5, label: '4.5+ Stars' },
                { value: 4.8, label: '4.8+ Stars' },
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="rating"
                    value={option.value}
                    checked={localFilters.rating === option.value}
                    onChange={(e) => handleFilterChange('rating', parseFloat(e.target.value))}
                    className="text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 flex items-center">
                    {option.label}
                    {option.value > 0 && (
                      <i className="fas fa-star text-yellow-400 ml-1 text-xs"></i>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={localFilters.availability}
                onChange={(e) => handleFilterChange('availability', e.target.checked)}
                className="text-blue-600 focus:ring-2 focus:ring-blue-500 rounded"
              />
              <span className="text-sm text-gray-700">Available now</span>
            </label>
          </div>

          {/* Popular Filters (Quick Access) */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Quick Filters</h4>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                <i className="fas fa-star text-yellow-400 mr-2"></i>
                Top Rated
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                <i className="fas fa-dollar-sign text-green-500 mr-2"></i>
                Budget Friendly
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                <i className="fas fa-clock text-blue-500 mr-2"></i>
                Available Today
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                <i className="fas fa-certificate text-purple-500 mr-2"></i>
                Certified
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
