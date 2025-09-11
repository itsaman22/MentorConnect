import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange, onFilterToggle }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Main Search Input */}
        <div className="flex-1 relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400"></i>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search mentors by name, skills, or company..."
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={onFilterToggle}
          className="px-6 py-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2 shadow-sm"
        >
          <i className="fas fa-filter text-gray-600"></i>
          <span className="font-medium text-gray-700">Filters</span>
        </button>
      </div>

      {/* Quick Search Suggestions */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <span className="text-sm text-gray-600">Popular searches:</span>
        {['React', 'Product Management', 'UI/UX Design', 'Data Science', 'Marketing', 'Leadership'].map((term) => (
          <button
            key={term}
            onClick={() => onSearchChange(term)}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
