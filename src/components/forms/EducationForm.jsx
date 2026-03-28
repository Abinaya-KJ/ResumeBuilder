import React, { useState } from 'react';
import { useResume } from '../../utils/ResumeContext';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const EducationForm = () => {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();
  const { education } = resumeData;
  const [expandedId, setExpandedId] = useState(null);

  const handleAdd = () => {
    const newId = uuidv4();
    addEducation({
      id: newId,
      degree: '',
      institution: '',
      year: ''
    });
    setExpandedId(newId);
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateEducation(id, { [name]: value });
  };

  return (
    <div className="form-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 className="heading-text">Education</h3>
        <button onClick={handleAdd} className="btn-base btn-primary" style={{ padding: '0.25rem 0.5rem' }}>
          <Plus size={16} /> Add
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {education.map((edu) => (
          <div key={edu.id} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div 
              style={{ padding: '1rem', backgroundColor: 'var(--input-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
            >
              <div style={{ fontWeight: 500 }}>
                {edu.degree ? `${edu.degree} at ${edu.institution || 'Institution'}` : 'New Education'}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); removeEducation(edu.id); }} 
                  className="btn-base btn-danger" 
                  style={{ padding: '0.25rem', border: 'none' }}
                >
                  <Trash2 size={16} />
                </button>
                {expandedId === edu.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {expandedId === edu.id && (
              <div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label className="label-text">Degree / Program</label>
                  <input type="text" name="degree" className="input-field" value={edu.degree} onChange={(e) => handleChange(edu.id, e)} placeholder="B.S. in Computer Science" />
                </div>
                <div>
                  <label className="label-text">Institution / School</label>
                  <input type="text" name="institution" className="input-field" value={edu.institution} onChange={(e) => handleChange(edu.id, e)} placeholder="University of Tech" />
                </div>
                <div>
                  <label className="label-text">Year / Duration</label>
                  <input type="text" name="year" className="input-field" value={edu.year} onChange={(e) => handleChange(edu.id, e)} placeholder="2016 - 2020" />
                </div>
              </div>
            )}
          </div>
        ))}
        {education.length === 0 && (
          <div className="muted-text" style={{ textAlign: 'center', padding: '2rem', border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
            No education history added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationForm;
