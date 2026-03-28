import React, { useState } from 'react';
import { useResume } from '../../utils/ResumeContext';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const ProjectsForm = () => {
  const { resumeData, addProject, updateProject, removeProject } = useResume();
  const { projects } = resumeData;
  const [expandedId, setExpandedId] = useState(null);

  const handleAdd = () => {
    const newId = uuidv4();
    addProject({
      id: newId,
      title: '',
      description: '',
      techStack: ''
    });
    setExpandedId(newId);
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateProject(id, { [name]: value });
  };

  return (
    <div className="form-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 className="heading-text">Projects</h3>
        <button onClick={handleAdd} className="btn-base btn-primary" style={{ padding: '0.25rem 0.5rem' }}>
          <Plus size={16} /> Add
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {projects.map((proj) => (
          <div key={proj.id} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div 
              style={{ padding: '1rem', backgroundColor: 'var(--input-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setExpandedId(expandedId === proj.id ? null : proj.id)}
            >
              <div style={{ fontWeight: 500 }}>
                {proj.title || 'New Project'}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); removeProject(proj.id); }} 
                  className="btn-base btn-danger" 
                  style={{ padding: '0.25rem', border: 'none' }}
                >
                  <Trash2 size={16} />
                </button>
                {expandedId === proj.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {expandedId === proj.id && (
              <div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div>
                  <label className="label-text">Project Title</label>
                  <input type="text" name="title" className="input-field" value={proj.title} onChange={(e) => handleChange(proj.id, e)} placeholder="Portfolio Website" />
                </div>
                <div>
                  <label className="label-text">Technologies Used</label>
                  <input type="text" name="techStack" className="input-field" value={proj.techStack} onChange={(e) => handleChange(proj.id, e)} placeholder="React, Node.js, MongoDB" />
                </div>
                <div>
                  <label className="label-text">Description</label>
                  <textarea name="description" className="input-field" value={proj.description} onChange={(e) => handleChange(proj.id, e)} rows={4} placeholder="Describe the project..." />
                </div>
              </div>
            )}
          </div>
        ))}
        {projects.length === 0 && (
          <div className="muted-text" style={{ textAlign: 'center', padding: '2rem', border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
            No projects added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsForm;
