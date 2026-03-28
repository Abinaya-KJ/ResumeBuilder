import React, { useState } from 'react';
import { useResume } from '../../utils/ResumeContext';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const WorkExperienceForm = () => {
  const { resumeData, addWorkExperience, updateWorkExperience, removeWorkExperience } = useResume();
  const { workExperience } = resumeData;
  const [expandedId, setExpandedId] = useState(null);

  const handleAdd = () => {
    const newId = uuidv4();
    addWorkExperience({
      id: newId,
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    });
    setExpandedId(newId);
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateWorkExperience(id, { [name]: value });
  };

  return (
    <div className="form-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 className="heading-text">Work Experience</h3>
        <button onClick={handleAdd} className="btn-base btn-primary" style={{ padding: '0.25rem 0.5rem' }}>
          <Plus size={16} /> Add
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {workExperience.map((exp) => (
          <div key={exp.id} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div 
              style={{ padding: '1rem', backgroundColor: 'var(--input-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div style={{ fontWeight: 500 }}>
                {exp.role ? `${exp.role} at ${exp.company || 'Company'}` : 'New Role'}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); removeWorkExperience(exp.id); }} 
                  className="btn-base btn-danger" 
                  style={{ padding: '0.25rem', border: 'none' }}
                >
                  <Trash2 size={16} />
                </button>
                {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {expandedId === exp.id && (
              <div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div>
                  <label className="label-text">Company/Organization</label>
                  <input type="text" name="company" className="input-field" value={exp.company} onChange={(e) => handleChange(exp.id, e)} placeholder="Google" />
                </div>
                <div>
                  <label className="label-text">Role/Title</label>
                  <input type="text" name="role" className="input-field" value={exp.role} onChange={(e) => handleChange(exp.id, e)} placeholder="Software Engineer" />
                </div>
                <div>
                  <label className="label-text">Start Date</label>
                  <input type="text" name="startDate" className="input-field" value={exp.startDate} onChange={(e) => handleChange(exp.id, e)} placeholder="Jan 2020" />
                </div>
                <div>
                  <label className="label-text">End Date</label>
                  <input type="text" name="endDate" className="input-field" value={exp.endDate} onChange={(e) => handleChange(exp.id, e)} placeholder="Present" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label className="label-text">Description</label>
                  <textarea name="description" className="input-field" value={exp.description} onChange={(e) => handleChange(exp.id, e)} rows={4} placeholder="Describe your responsibilities and achievements..." />
                </div>
              </div>
            )}
          </div>
        ))}
        {workExperience.length === 0 && (
          <div className="muted-text" style={{ textAlign: 'center', padding: '2rem', border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
            No work experience added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceForm;
