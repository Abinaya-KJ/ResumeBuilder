import React from 'react';
import { useResume } from '../../utils/ResumeContext';
import { ImagePlus, X } from 'lucide-react';

const PersonalInfoForm = ({ selectedTemplate }) => {
  const { resumeData, updatePersonalInfo } = useResume();
  const { personalInfo } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalInfo({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    updatePersonalInfo({ image: null });
  };

  return (
    <div className="form-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 className="heading-text" style={{ margin: 0 }}>Personal Information</h3>
        {['professional', 'creative'].includes(selectedTemplate) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {personalInfo.image && (
              <button 
                onClick={removePhoto} 
                className="btn-base" 
                style={{ padding: '6px', backgroundColor: 'transparent', border: 'none', color: '#ef4444' }}
                title="Remove Photo"
              >
                <X size={16} />
              </button>
            )}
            <input 
              type="file" 
              id="photo-upload" 
              accept="image/*" 
              style={{ display: 'none' }} 
              onChange={handlePhotoUpload} 
            />
            <label htmlFor="photo-upload" className="btn-base btn-secondary" style={{ padding: '6px 12px', fontSize: '13px', cursor: 'pointer', margin: 0 }}>
              <ImagePlus size={14} />
              {personalInfo.image ? 'Change Photo' : 'Add Photo'}
            </label>
          </div>
        )}
      </div>
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
