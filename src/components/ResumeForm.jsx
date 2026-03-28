import React, { useState } from 'react';
import PersonalInfoForm from './forms/PersonalInfoForm';
import WorkExperienceForm from './forms/WorkExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import DynamicSectionRenderer from './DynamicSectionRenderer';
import AddSectionButton from './AddSectionButton';
import SectionSelectorModal from './SectionSelectorModal';
import { useResume } from '../utils/ResumeContext';

const ResumeForm = ({ selectedTemplate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { resumeData, addSection } = useResume();

  const handleAddSection = (type, title) => {
    addSection(type, title);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <PersonalInfoForm selectedTemplate={selectedTemplate} />
      <WorkExperienceForm />
      <EducationForm />
      <SkillsForm />
      <ProjectsForm />
      
      {/* Dynamic Sections (Certificates, Languages, etc.) */}
      <DynamicSectionRenderer />

      {/* Modern Add Section Button */}
      <AddSectionButton onClick={() => setIsModalOpen(true)} />

      {/* Modal for selecting a new section */}
      <SectionSelectorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelect={handleAddSection}
        activeSections={resumeData.sections || []}
      />
    </div>
  );
};

export default ResumeForm;
