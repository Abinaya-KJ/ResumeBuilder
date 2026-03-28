import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Award, Languages, Heart, Lightbulb, FileText } from 'lucide-react';

const SectionSelectorModal = ({ isOpen, onClose, onSelect, activeSections }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sectionTypes = [
    { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> },
    { id: 'languages', label: 'Languages', icon: <Languages size={18} /> },
    { id: 'interests', label: 'Interests', icon: <Heart size={18} /> },
    { id: 'hobbies', label: 'Hobbies', icon: <Lightbulb size={18} /> },
    // Custom section can be added multiple times, others only once
    { id: 'custom', label: 'Custom Section', icon: <FileText size={18} />, allowMultiple: true }
  ];

  return createPortal(
    <div className="section-modal-overlay" onClick={onClose}>
      <div className="form-container" onClick={e => e.stopPropagation()} style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '400px', 
        padding: '2rem', 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 className="heading-text" style={{ margin: 0, fontSize: '1.25rem' }}>Add a Section</h2>
          <button onClick={onClose} className="btn-base btn-outline" style={{ padding: '0.5rem', borderRadius: '50%', border: 'none' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
          {sectionTypes.map((type) => {
            const isAdded = !type.allowMultiple && activeSections.some(sec => sec.type === type.id);
            return (
              <button
                key={type.id}
                disabled={isAdded}
                onClick={() => {
                  onSelect(type.id, type.label);
                  onClose();
                }}
                className={`btn-base ${isAdded ? 'btn-outline' : 'btn-primary'}`}
                style={{
                  justifyContent: 'flex-start',
                  padding: '1rem',
                  opacity: isAdded ? 0.5 : 1,
                  border: isAdded ? '1px dashed var(--border-subtle)' : 'none'
                }}
              >
                <div style={{ color: isAdded ? 'var(--text-muted)' : 'inherit' }}>{type.icon}</div>
                <div style={{ color: isAdded ? 'var(--text-muted)' : 'inherit' }}>
                  {type.label} {isAdded && <span style={{ fontSize: '0.75rem' }}>(Added)</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SectionSelectorModal;
