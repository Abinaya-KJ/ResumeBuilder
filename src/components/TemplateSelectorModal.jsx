import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Check } from 'lucide-react';

const TemplateSelectorModal = ({ isOpen, onClose, onSelect, selectedTemplate }) => {
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

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Professional & multi-column' },
    { id: 'minimal', name: 'Minimal', description: 'Clean & whitespace-focused' },
    { id: 'professional', name: 'Professional', description: 'Traditional & elegant' },
    { id: 'creative', name: 'Creative', description: 'Modern & bold colors' }
  ];

  return ReactDOM.createPortal(
    <div className="template-modal-overlay" onClick={onClose}>
      <div className="template-modal-card fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="template-modal-header">
          <h3 className="heading-text">Select Template</h3>
          <button className="close-btn-inline" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="template-grid">
          {templates.map((t) => (
            <div 
              key={t.id} 
              className={`template-option ${selectedTemplate === t.id ? 'active' : ''}`}
              onClick={() => onSelect(t.id)}
            >
              <div className="template-option-info">
                <h4 className="heading-text">{t.name}</h4>
                <p className="muted-text">{t.description}</p>
              </div>
              {selectedTemplate === t.id && (
                <div className="active-badge">
                  <Check size={14} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TemplateSelectorModal;
