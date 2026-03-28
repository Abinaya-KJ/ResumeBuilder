import React from 'react';
import { useResume } from '../../utils/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const SkillsForm = () => {
  const { resumeData, addSkill, updateSkill, removeSkill } = useResume();
  const { skills } = resumeData;

  const handleAdd = () => {
    addSkill({
      id: uuidv4(),
      name: ''
    });
  };

  return (
    <div className="form-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 className="heading-text">Skills</h3>
        <button onClick={handleAdd} className="btn-base btn-primary" style={{ padding: '0.25rem 0.5rem' }}>
          <Plus size={16} /> Add
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
        {skills.map((skill) => (
          <div key={skill.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="text" 
              className="input-field" 
              value={skill.name} 
              onChange={(e) => updateSkill(skill.id, e.target.value)} 
              placeholder="e.g. React.js" 
            />
            <button 
              onClick={() => removeSkill(skill.id)} 
              className="btn-base btn-danger" 
              style={{ padding: '0.5rem', border: 'none' }}
              aria-label="Remove skill"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      {skills.length === 0 && (
        <div className="muted-text" style={{ textAlign: 'center', padding: '1rem' }}>
          No skills added yet.
        </div>
      )}
    </div>
  );
};

export default SkillsForm;
