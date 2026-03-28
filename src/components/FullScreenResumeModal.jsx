import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const FullScreenResumeModal = ({ isOpen, onClose, children }) => {
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

  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <button className="modal-close" onClick={onClose} aria-label="Close fullscreen preview">
        <X size={24} color="#000" strokeWidth={2.5} />
      </button>
      
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default FullScreenResumeModal;
