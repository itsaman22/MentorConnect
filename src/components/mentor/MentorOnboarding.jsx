import React, { useState } from 'react';

const MentorOnboarding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    profilePicture: null,
    bio: '',
    phoneNumber: '',
    location: '',
    timezone: '',
    
    // Professional Information
    jobTitle: '',
    company: '',
    industry: '',
    experience: '',
    
    // Education
    education: [
      {
        degree: '',
        institution: '',
        field: '',
        graduationYear: '',
        certificate: null
      }
    ],
    
    // Expertise & Skills
    expertise: [],
    skills: [],
    languages: [],
    
    // Mentoring Information
    mentoringSince: '',
    specializations: [],
    sessionTypes: [],
    availability: {
      timezone: '',
      weekdays: [],
      preferredTimes: []
    },
    
    // Pricing
    hourlyRate: '',
    currency: 'USD',
    packageDeals: [],
    
    // Verification Documents
    identityProof: null,
    experienceProof: null,
    educationProofs: [],
    
    // Additional Information
    linkedinProfile: '',
    portfolioWebsite: '',
    achievements: '',
    whyMentor: '',
    expectations: ''
  });

  const [errors, setErrors] = useState({});

  const totalSteps = 6;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        degree: '',
        institution: '',
        field: '',
        graduationYear: '',
        certificate: null
      }]
    }));
  };

  const removeEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1: // Personal Information
        if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        if (!formData.timezone) newErrors.timezone = 'Timezone is required';
        break;
        
      case 2: // Professional Information
        if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.industry) newErrors.industry = 'Industry is required';
        if (!formData.experience) newErrors.experience = 'Experience level is required';
        break;
        
      case 3: // Education
        formData.education.forEach((edu, index) => {
          if (!edu.degree.trim()) newErrors[`education_${index}_degree`] = 'Degree is required';
          if (!edu.institution.trim()) newErrors[`education_${index}_institution`] = 'Institution is required';
          if (!edu.field.trim()) newErrors[`education_${index}_field`] = 'Field is required';
          if (!edu.graduationYear) newErrors[`education_${index}_year`] = 'Graduation year is required';
        });
        break;
        
      case 4: // Expertise & Skills
        if (formData.expertise.length === 0) newErrors.expertise = 'At least one area of expertise is required';
        if (formData.skills.length === 0) newErrors.skills = 'At least one skill is required';
        if (formData.languages.length === 0) newErrors.languages = 'At least one language is required';
        break;
        
      case 5: // Mentoring & Pricing
        if (!formData.hourlyRate) newErrors.hourlyRate = 'Hourly rate is required';
        if (formData.specializations.length === 0) newErrors.specializations = 'At least one specialization is required';
        if (formData.sessionTypes.length === 0) newErrors.sessionTypes = 'At least one session type is required';
        break;
        
      case 6: // Verification
        if (!formData.identityProof) newErrors.identityProof = 'Identity proof is required';
        if (!formData.experienceProof) newErrors.experienceProof = 'Experience proof is required';
        if (!formData.whyMentor.trim()) newErrors.whyMentor = 'Please tell us why you want to mentor';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      try {
        // Here you would submit the form data to your API
        console.log('Submitting mentor onboarding data:', formData);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        onComplete(formData);
      } catch (error) {
        console.error('Error submitting onboarding data:', error);
      }
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
      
      {/* Profile Picture */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            {formData.profilePicture ? (
              <img src={URL.createObjectURL(formData.profilePicture)} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
            ) : (
              <i className="fas fa-camera text-gray-400 text-2xl"></i>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload('profilePicture', e.target.files[0])}
            className="text-sm text-gray-500"
          />
        </div>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bio <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => handleInputChange('bio', e.target.value)}
          placeholder="Tell us about yourself, your background, and what makes you a great mentor..."
          rows={4}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.bio ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          placeholder="+1 (555) 123-4567"
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          placeholder="City, Country"
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
      </div>

      {/* Timezone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Timezone <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.timezone}
          onChange={(e) => handleInputChange('timezone', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.timezone ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select timezone</option>
          <option value="UTC-12:00">UTC-12:00</option>
          <option value="UTC-11:00">UTC-11:00</option>
          <option value="UTC-10:00">UTC-10:00</option>
          <option value="UTC-09:00">UTC-09:00</option>
          <option value="UTC-08:00">UTC-08:00</option>
          <option value="UTC-07:00">UTC-07:00</option>
          <option value="UTC-06:00">UTC-06:00</option>
          <option value="UTC-05:00">UTC-05:00</option>
          <option value="UTC-04:00">UTC-04:00</option>
          <option value="UTC-03:00">UTC-03:00</option>
          <option value="UTC-02:00">UTC-02:00</option>
          <option value="UTC-01:00">UTC-01:00</option>
          <option value="UTC+00:00">UTC+00:00</option>
          <option value="UTC+01:00">UTC+01:00</option>
          <option value="UTC+02:00">UTC+02:00</option>
          <option value="UTC+03:00">UTC+03:00</option>
          <option value="UTC+04:00">UTC+04:00</option>
          <option value="UTC+05:00">UTC+05:00</option>
          <option value="UTC+05:30">UTC+05:30 (India)</option>
          <option value="UTC+06:00">UTC+06:00</option>
          <option value="UTC+07:00">UTC+07:00</option>
          <option value="UTC+08:00">UTC+08:00</option>
          <option value="UTC+09:00">UTC+09:00</option>
          <option value="UTC+10:00">UTC+10:00</option>
          <option value="UTC+11:00">UTC+11:00</option>
          <option value="UTC+12:00">UTC+12:00</option>
        </select>
        {errors.timezone && <p className="text-red-500 text-sm mt-1">{errors.timezone}</p>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Professional Information</h3>
      
      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Job Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.jobTitle}
          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
          placeholder="Senior Software Engineer, Product Manager, etc."
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          placeholder="Google, Microsoft, Startup, etc."
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
      </div>

      {/* Industry */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Industry <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.industry}
          onChange={(e) => handleInputChange('industry', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.industry ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select industry</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="consulting">Consulting</option>
          <option value="marketing">Marketing</option>
          <option value="design">Design</option>
          <option value="sales">Sales</option>
          <option value="operations">Operations</option>
          <option value="hr">Human Resources</option>
          <option value="legal">Legal</option>
          <option value="other">Other</option>
        </select>
        {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
      </div>

      {/* Experience Level */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Years of Experience <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.experience}
          onChange={(e) => handleInputChange('experience', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.experience ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select experience level</option>
          <option value="1-2">1-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="6-10">6-10 years</option>
          <option value="11-15">11-15 years</option>
          <option value="16-20">16-20 years</option>
          <option value="20+">20+ years</option>
        </select>
        {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
      </div>

      {/* LinkedIn Profile */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
        <input
          type="url"
          value={formData.linkedinProfile}
          onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Portfolio Website */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/Website</label>
        <input
          type="url"
          value={formData.portfolioWebsite}
          onChange={(e) => handleInputChange('portfolioWebsite', e.target.value)}
          placeholder="https://yourportfolio.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Education Background</h3>
      
      {formData.education.map((edu, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-medium text-gray-800">Education {index + 1}</h4>
            {index > 0 && (
              <button
                onClick={() => removeEducation(index)}
                className="text-red-600 hover:text-red-700"
              >
                <i className="fas fa-trash"></i>
              </button>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Degree <span className="text-red-500">*</span>
              </label>
              <select
                value={edu.degree}
                onChange={(e) => handleArrayChange('education', index, { ...edu, degree: e.target.value })}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors[`education_${index}_degree`] ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select degree</option>
                <option value="high-school">High School</option>
                <option value="associate">Associate Degree</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="certification">Professional Certification</option>
                <option value="bootcamp">Coding Bootcamp</option>
                <option value="other">Other</option>
              </select>
              {errors[`education_${index}_degree`] && <p className="text-red-500 text-sm mt-1">{errors[`education_${index}_degree`]}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleArrayChange('education', index, { ...edu, institution: e.target.value })}
                placeholder="University/School name"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors[`education_${index}_institution`] ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors[`education_${index}_institution`] && <p className="text-red-500 text-sm mt-1">{errors[`education_${index}_institution`]}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of Study <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => handleArrayChange('education', index, { ...edu, field: e.target.value })}
                placeholder="Computer Science, Business, etc."
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors[`education_${index}_field`] ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors[`education_${index}_field`] && <p className="text-red-500 text-sm mt-1">{errors[`education_${index}_field`]}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Graduation Year <span className="text-red-500">*</span>
              </label>
              <select
                value={edu.graduationYear}
                onChange={(e) => handleArrayChange('education', index, { ...edu, graduationYear: e.target.value })}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors[`education_${index}_year`] ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select year</option>
                {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {errors[`education_${index}_year`] && <p className="text-red-500 text-sm mt-1">{errors[`education_${index}_year`]}</p>}
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Certificate/Diploma Upload</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleArrayChange('education', index, { ...edu, certificate: e.target.files[0] })}
              className="w-full text-sm text-gray-500"
            />
            <p className="text-xs text-gray-500 mt-1">Upload your degree certificate or diploma (PDF, JPG, PNG)</p>
          </div>
        </div>
      ))}
      
      <button
        onClick={addEducation}
        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
      >
        <i className="fas fa-plus mr-2"></i>
        Add Another Education
      </button>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Expertise & Skills</h3>
      
      {/* Areas of Expertise */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Areas of Expertise <span className="text-red-500">*</span>
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            'Software Development', 'Data Science', 'Product Management', 'UI/UX Design', 
            'Digital Marketing', 'Sales', 'Finance', 'Consulting', 'Leadership', 'Entrepreneurship',
            'Career Development', 'Interview Preparation', 'Technical Writing', 'Public Speaking'
          ].map(expertise => (
            <label key={expertise} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.expertise.includes(expertise)}
                onChange={(e) => {
                  const newExpertise = e.target.checked 
                    ? [...formData.expertise, expertise]
                    : formData.expertise.filter(item => item !== expertise);
                  handleInputChange('expertise', newExpertise);
                }}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{expertise}</span>
            </label>
          ))}
        </div>
        {errors.expertise && <p className="text-red-500 text-sm mt-1">{errors.expertise}</p>}
      </div>

      {/* Technical Skills */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technical Skills <span className="text-red-500">*</span>
        </label>
        <div className="grid md:grid-cols-3 gap-2">
          {[
            'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'AWS', 'Docker', 'Git',
            'Machine Learning', 'Data Analysis', 'Figma', 'Photoshop', 'Excel', 'PowerBI',
            'Salesforce', 'HubSpot', 'Google Analytics', 'SEO', 'Content Marketing', 'Agile'
          ].map(skill => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={(e) => {
                  const newSkills = e.target.checked 
                    ? [...formData.skills, skill]
                    : formData.skills.filter(item => item !== skill);
                  handleInputChange('skills', newSkills);
                }}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{skill}</span>
            </label>
          ))}
        </div>
        {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
      </div>

      {/* Languages */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Languages <span className="text-red-500">*</span>
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            'English', 'Spanish', 'French', 'German', 'Chinese (Mandarin)', 'Japanese',
            'Korean', 'Arabic', 'Hindi', 'Portuguese', 'Russian', 'Italian'
          ].map(language => (
            <label key={language} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.languages.includes(language)}
                onChange={(e) => {
                  const newLanguages = e.target.checked 
                    ? [...formData.languages, language]
                    : formData.languages.filter(item => item !== language);
                  handleInputChange('languages', newLanguages);
                }}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{language}</span>
            </label>
          ))}
        </div>
        {errors.languages && <p className="text-red-500 text-sm mt-1">{errors.languages}</p>}
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Mentoring & Pricing</h3>
      
      {/* Mentoring Since */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How long have you been mentoring?</label>
        <select
          value={formData.mentoringSince}
          onChange={(e) => handleInputChange('mentoringSince', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select experience</option>
          <option value="new">New to mentoring</option>
          <option value="6months">6 months</option>
          <option value="1year">1 year</option>
          <option value="2years">2 years</option>
          <option value="3-5years">3-5 years</option>
          <option value="5+years">5+ years</option>
        </select>
      </div>

      {/* Specializations */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mentoring Specializations <span className="text-red-500">*</span>
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            'Career Guidance', 'Technical Skills', 'Interview Preparation', 'Resume Review',
            'Leadership Development', 'Startup Advice', 'Industry Transition', 'Skill Development',
            'Personal Branding', 'Networking', 'Goal Setting', 'Work-Life Balance'
          ].map(spec => (
            <label key={spec} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.specializations.includes(spec)}
                onChange={(e) => {
                  const newSpecs = e.target.checked 
                    ? [...formData.specializations, spec]
                    : formData.specializations.filter(item => item !== spec);
                  handleInputChange('specializations', newSpecs);
                }}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{spec}</span>
            </label>
          ))}
        </div>
        {errors.specializations && <p className="text-red-500 text-sm mt-1">{errors.specializations}</p>}
      </div>

      {/* Session Types */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Session Types <span className="text-red-500">*</span>
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            '1-on-1 Video Call', 'Phone Call', 'In-Person Meeting', 'Group Sessions',
            'Email/Chat Support', 'Code Review', 'Mock Interviews', 'Portfolio Review'
          ].map(type => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.sessionTypes.includes(type)}
                onChange={(e) => {
                  const newTypes = e.target.checked 
                    ? [...formData.sessionTypes, type]
                    : formData.sessionTypes.filter(item => item !== type);
                  handleInputChange('sessionTypes', newTypes);
                }}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
        {errors.sessionTypes && <p className="text-red-500 text-sm mt-1">{errors.sessionTypes}</p>}
      </div>

      {/* Pricing */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hourly Rate <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <select
              value={formData.currency}
              onChange={(e) => handleInputChange('currency', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="CAD">CAD</option>
            </select>
            <input
              type="number"
              value={formData.hourlyRate}
              onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
              placeholder="50"
              min="1"
              className={`flex-1 px-3 py-2 border-t border-r border-b rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.hourlyRate ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          {errors.hourlyRate && <p className="text-red-500 text-sm mt-1">{errors.hourlyRate}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Verification & Final Details</h3>
      
      {/* Identity Proof */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Government ID Proof <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => handleFileUpload('identityProof', e.target.files[0])}
          className={`w-full text-sm text-gray-500 ${errors.identityProof ? 'border-red-500' : ''}`}
        />
        <p className="text-xs text-gray-500 mt-1">Upload a clear photo of your government-issued ID</p>
        {errors.identityProof && <p className="text-red-500 text-sm mt-1">{errors.identityProof}</p>}
      </div>

      {/* Experience Proof */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Work Experience Proof <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => handleFileUpload('experienceProof', e.target.files[0])}
          className={`w-full text-sm text-gray-500 ${errors.experienceProof ? 'border-red-500' : ''}`}
        />
        <p className="text-xs text-gray-500 mt-1">Upload your resume, offer letter, or employment verification</p>
        {errors.experienceProof && <p className="text-red-500 text-sm mt-1">{errors.experienceProof}</p>}
      </div>

      {/* Why Mentor */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Why do you want to be a mentor? <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.whyMentor}
          onChange={(e) => handleInputChange('whyMentor', e.target.value)}
          placeholder="Share your motivation for mentoring and what you hope to achieve..."
          rows={4}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.whyMentor ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.whyMentor && <p className="text-red-500 text-sm mt-1">{errors.whyMentor}</p>}
      </div>

      {/* Achievements */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Notable Achievements</label>
        <textarea
          value={formData.achievements}
          onChange={(e) => handleInputChange('achievements', e.target.value)}
          placeholder="Any awards, certifications, publications, or notable projects..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Expectations */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What are your expectations from this platform?</label>
        <textarea
          value={formData.expectations}
          onChange={(e) => handleInputChange('expectations', e.target.value)}
          placeholder="What do you hope to gain from mentoring on our platform..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  // Continue with other steps...
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      case 6: return renderStep6();
      default: return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Mentor Profile</h1>
          <p className="text-lg text-gray-600 mt-2">
            Help us understand your expertise to connect you with the right mentees
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {renderCurrentStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentStep === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Previous
            </button>

            {currentStep === totalSteps ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Complete Setup
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorOnboarding;
