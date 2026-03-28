import React, { useState } from 'react';
import { useResume } from '../utils/ResumeContext';
import { Trash2, ChevronDown, ChevronUp, Plus } from 'lucide-react';

const DynamicSectionRenderer = () => {
  const { resumeData, removeSection, updateSectionInfo, addSectionItem, updateSectionItem, removeSectionItem } = useResume();

  if (!resumeData.sections || resumeData.sections.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {resumeData.sections.map(section => (
        <DynamicSectionCard 
          key={section.id} 
          section={section} 
          onRemove={() => removeSection(section.id)}
          onUpdateTitle={(title) => updateSectionInfo(section.id, { title })}
          onAddItem={(item) => addSectionItem(section.id, item)}
          onUpdateItem={(itemId, data) => updateSectionItem(section.id, itemId, data)}
          onRemoveItem={(itemId) => removeSectionItem(section.id, itemId)}
        />
      ))}
    </div>
  );
};

// Internal reusable card for rendering dynamic sections
const DynamicSectionCard = ({ section, onRemove, onUpdateTitle, onAddItem, onUpdateItem, onRemoveItem }) => {
  const isCustom = section.type === 'custom';
  const isList = section.type === 'interests' || section.type === 'hobbies';
  const isLanguages = section.type === 'languages';
  const isAwardsOrCerts = section.type === 'certificates' || section.type === 'awards';
  
  const handleAddItem = () => {
    const newItem = { id: crypto.randomUUID() };
    if (isCustom) {
      newItem.title = '';
      newItem.description = '';
    } else if (isList) {
      newItem.name = '';
    } else if (isLanguages) {
      newItem.name = '';
      newItem.proficiency = 'Beginner';
    } else if (isAwardsOrCerts) {
      newItem.title = '';
      newItem.issuer = '';
      newItem.year = '';
    }
    onAddItem(newItem);
  };

  return (
    <div className="form-container" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        {isCustom ? (
          <input 
            type="text" 
            className="input-field heading-text" 
            value={section.title} 
            onChange={(e) => onUpdateTitle(e.target.value)}
            style={{ fontWeight: 'bold', fontSize: '1.17em', border: '1px transparent', backgroundColor: 'transparent', padding: 0 }}
            placeholder="Custom Section Title"
          />
        ) : (
          <h3 className="heading-text">{section.title}</h3>
        )}
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={handleAddItem} className="btn-base btn-outline" style={{ padding: '0.25rem 0.5rem' }}>
            <Plus size={16} /> Add Item
          </button>
          <button onClick={onRemove} className="btn-base btn-danger" style={{ padding: '0.25rem' }}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {section.data.map(item => (
          <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', backgroundColor: 'var(--input-bg)', borderRadius: 'var(--radius-md)' }}>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {isCustom && (
                <>
                  <input type="text" className="input-field" value={item.title} onChange={e => onUpdateItem(item.id, { title: e.target.value })} placeholder="Item Title" />
                  <textarea className="input-field" value={item.description} onChange={e => onUpdateItem(item.id, { description: e.target.value })} rows={3} placeholder="Description..." />
                </>
              )}

              {isList && (
                <input type="text" className="input-field" value={item.name} onChange={e => onUpdateItem(item.id, { name: e.target.value })} placeholder="e.g. Photography, Reading..." />
              )}

              {isLanguages && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" className="input-field" value={item.name} onChange={e => onUpdateItem(item.id, { name: e.target.value })} placeholder="Language (e.g. Spanish)" />
                  <select className="input-field" value={item.proficiency} onChange={e => onUpdateItem(item.id, { proficiency: e.target.value })}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Native/Bilingual">Native/Bilingual</option>
                  </select>
                </div>
              )}

              {isAwardsOrCerts && (
                <>
                  <input type="text" className="input-field" value={item.title} onChange={e => onUpdateItem(item.id, { title: e.target.value })} placeholder="Certificate / Award Title" />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" className="input-field" value={item.issuer} onChange={e => onUpdateItem(item.id, { issuer: e.target.value })} placeholder="Issued By" />
                    <input type="text" className="input-field" value={item.year} onChange={e => onUpdateItem(item.id, { year: e.target.value })} placeholder="Year" />
                  </div>
                </>
              )}
            </div>

            <button onClick={() => onRemoveItem(item.id)} className="btn-base btn-danger" style={{ padding: '0.25rem', border: 'none' }}>
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        {section.data.length === 0 && (
          <div className="muted-text" style={{ textAlign: 'center', padding: '1.5rem', border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
            No items added. Click "Add Item" to start.
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicSectionRenderer;
