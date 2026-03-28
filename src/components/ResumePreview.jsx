import React, { Suspense, lazy } from 'react';
import { useResume } from '../utils/ResumeContext';
import { Loader2 } from 'lucide-react';
import MinimalTemplate from "../templates/MinimalTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import ProfessionalTemplate from "../templates/ProfessionalTemplate";
import CreativeTemplate from "../templates/CreativeTemplate";

const TemplateFallback = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <Loader2 className="animate-spin" size={24} />
  </div>
);

const ResumePreview = ({ selectedTemplate, onClick }) => {
  const { resumeData } = useResume();

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "minimal":
        return <MinimalTemplate data={resumeData} />;
      case "professional":
        return <ProfessionalTemplate data={resumeData} />;
      case "creative":
        return <CreativeTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div
      className="resume-preview-wrapper"
      onClick={onClick}
      title={onClick ? 'Click to view full screen' : ''}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        overflowY: 'auto',
        padding: '20px',
      }}
    >
      <div
        id="resume-preview"
        className="resume-paper"
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
