import React, { useState } from 'react';

const PremiumFilters = ({ isLoggedIn, onFiltersChange }) => {
  const [premiumFilters, setPremiumFilters] = useState({
    location: '',
    languages: [],
    timezone: '',
    responseTime: '',
    sessionFormat: '',
    certifications: false,
    backgroundCheck: false,
    trialSession: false,
  });

  if (!isLoggedIn) {
    return (
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 border border-amber-200 mb-6">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center">
            <i className="fas fa-lock text-white"></i>
          </div>
          <h4 className="font-semibold text-amber-800 mb-2">Premium Filters</h4>
          <p className="text-sm text-amber-700 mb-3">
            Unlock advanced search options with premium access
          </p>
          <div className="text-xs text-amber-600 space-y-1 mb-4">
            <div>• Location-based search</div>
            <div>• Language preferences</div>
            <div>• Timezone matching</div>
            <div>• Response time filters</div>
            <div>• Session format options</div>
            <div>• Verified certifications</div>
          </div>
          <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all">
            <i className="fas fa-crown mr-2"></i>
            Upgrade to Premium
          </button>
        </div>
      </div>
    );
  }

  const handlePremiumFilterChange = (key, value) => {
    const updatedFilters = { ...premiumFilters, [key]: value };
    setPremiumFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handleLanguageToggle = (language) => {
    const updatedLanguages = premiumFilters.languages.includes(language)
      ? premiumFilters.languages.filter(lang => lang !== language)
      : [...premiumFilters.languages, language];
    handlePremiumFilterChange('languages', updatedLanguages);
  };

  const languages = ['English', 'Spanish', 'French', 'German', 'Mandarin', 'Japanese', 'Hindi', 'Arabic'];

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200 mb-6">
      {/* Premium Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
            <i className="fas fa-crown text-white text-sm"></i>
          </div>
          <h4 className="font-semibold text-emerald-800">Premium Filters</h4>
        </div>
        <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold">
          ACTIVE
        </div>
      </div>

      <div className="space-y-4">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-emerald-800 mb-2">Location</label>
          <select
            value={premiumFilters.location}
            onChange={(e) => handlePremiumFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-emerald-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">Any Location</option>
            <option value="north-america">North America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="australia">Australia</option>
            <option value="remote">Remote Only</option>
          </select>
        </div>

        {/* Languages */}
        <div>
          <label className="block text-sm font-medium text-emerald-800 mb-2">Languages</label>
          <div className="flex flex-wrap gap-2">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageToggle(language)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  premiumFilters.languages.includes(language)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>

        {/* Timezone */}
        <div>
          <label className="block text-sm font-medium text-emerald-800 mb-2">Timezone Preference</label>
          <select
            value={premiumFilters.timezone}
            onChange={(e) => handlePremiumFilterChange('timezone', e.target.value)}
            className="w-full px-3 py-2 border border-emerald-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">Any Timezone</option>
            <option value="similar">Similar to mine</option>
            <option value="utc-8">UTC-8 (PST)</option>
            <option value="utc-5">UTC-5 (EST)</option>
            <option value="utc+0">UTC+0 (GMT)</option>
            <option value="utc+8">UTC+8 (CST)</option>
          </select>
        </div>

        {/* Response Time */}
        <div>
          <label className="block text-sm font-medium text-emerald-800 mb-2">Response Time</label>
          <select
            value={premiumFilters.responseTime}
            onChange={(e) => handlePremiumFilterChange('responseTime', e.target.value)}
            className="w-full px-3 py-2 border border-emerald-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">Any Response Time</option>
            <option value="1hour">Within 1 hour</option>
            <option value="24hours">Within 24 hours</option>
            <option value="3days">Within 3 days</option>
          </select>
        </div>

        {/* Session Format */}
        <div>
          <label className="block text-sm font-medium text-emerald-800 mb-2">Session Format</label>
          <select
            value={premiumFilters.sessionFormat}
            onChange={(e) => handlePremiumFilterChange('sessionFormat', e.target.value)}
            className="w-full px-3 py-2 border border-emerald-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">Any Format</option>
            <option value="video">Video Call</option>
            <option value="audio">Audio Call</option>
            <option value="chat">Text Chat</option>
            <option value="in-person">In Person</option>
          </select>
        </div>

        {/* Special Options */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="certifications"
              checked={premiumFilters.certifications}
              onChange={(e) => handlePremiumFilterChange('certifications', e.target.checked)}
              className="text-emerald-600 focus:ring-2 focus:ring-emerald-500 rounded"
            />
            <label htmlFor="certifications" className="text-sm text-emerald-700 flex items-center">
              <i className="fas fa-certificate text-emerald-600 mr-2"></i>
              Verified Certifications
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="backgroundCheck"
              checked={premiumFilters.backgroundCheck}
              onChange={(e) => handlePremiumFilterChange('backgroundCheck', e.target.checked)}
              className="text-emerald-600 focus:ring-2 focus:ring-emerald-500 rounded"
            />
            <label htmlFor="backgroundCheck" className="text-sm text-emerald-700 flex items-center">
              <i className="fas fa-shield-alt text-emerald-600 mr-2"></i>
              Background Verified
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="trialSession"
              checked={premiumFilters.trialSession}
              onChange={(e) => handlePremiumFilterChange('trialSession', e.target.checked)}
              className="text-emerald-600 focus:ring-2 focus:ring-emerald-500 rounded"
            />
            <label htmlFor="trialSession" className="text-sm text-emerald-700 flex items-center">
              <i className="fas fa-gift text-emerald-600 mr-2"></i>
              Offers Trial Session
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumFilters;
