import React from 'react';
import { useResume } from '../../utils/ResumeContext';

const PersonalInfoForm = () => {
  const { resumeData, updatePersonalInfo } = useResume();
  const { personalInfo } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  };

  return (
    <div className="form-container">
      <h3 className="heading-text" style={{ marginBottom: '1rem' }}>Personal Information</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="label-text">Full Name *</label>
          <input 
            type="text" 
            name="name" 
            className="input-field" 
            value={personalInfo.name} 
            onChange={handleChange} 
            required 
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="label-text">Email *</label>
          <input 
            type="email" 
            name="email" 
            className="input-field" 
            value={personalInfo.email} 
            onChange={handleChange} 
            required 
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="label-text">Phone *</label>
          <input 
            type="tel" 
            name="phone" 
            className="input-field" 
            value={personalInfo.phone} 
            onChange={handleChange} 
            required 
            placeholder="(123) 456-7890"
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="label-text">Location</label>
          <input 
            type="text" 
            name="location" 
            className="input-field" 
            value={personalInfo.location} 
            onChange={handleChange} 
            placeholder="New York, NY"
          />
        </div>
        <div>
          <label className="label-text">LinkedIn URL</label>
          <input 
            type="url" 
            name="linkedin" 
            className="input-field" 
            value={personalInfo.linkedin || ''} 
            onChange={handleChange} 
            placeholder="https://linkedin.com/in/yourname"
          />
        </div>
        <div>
          <label className="label-text">GitHub URL</label>
          <input 
            type="url" 
            name="github" 
            className="input-field" 
            value={personalInfo.github || ''} 
            onChange={handleChange} 
            placeholder="https://github.com/yourusername"
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="label-text">Professional Summary</label>
          <textarea 
            name="summary" 
            className="input-field" 
            value={personalInfo.summary} 
            onChange={handleChange} 
            rows={4} 
            placeholder="Brief overview of your professional background and goals."
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
