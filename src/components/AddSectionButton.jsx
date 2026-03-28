import React from 'react';
import { Plus } from 'lucide-react';

const AddSectionButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="btn-base btn-primary"
      style={{
        width: '100%',
        padding: '1rem',
        marginTop: '1.5rem',
        fontSize: '1rem',
      }}
    >
      <Plus size={20} />
      Add Section
    </button>
  );
};

export default AddSectionButton;
