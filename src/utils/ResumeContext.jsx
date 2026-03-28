import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultResumeData = {
  personalInfo: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    location: 'New York, NY',
    linkedin: '',
    github: '',
    summary: 'A highly motivated professional with 5+ years of experience in building scalable solutions.'
  },
  workExperience: [],
  education: [],
  skills: [],
  projects: [],
  sections: []
};

const ResumeContext = createContext(undefined);

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultResumeData;
      }
    }
    return defaultResumeData;
  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const updatePersonalInfo = (data) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...data }
    }));
  };

  const addWorkExperience = (item) => {
    setResumeData(prev => ({ ...prev, workExperience: [...prev.workExperience, item] }));
  };
  const updateWorkExperience = (id, data) => {
    setResumeData(prev => ({
      ...prev,
      workExperience: prev.workExperience.map(exp => exp.id === id ? { ...exp, ...data } : exp)
    }));
  };
  const removeWorkExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = (item) => {
    setResumeData(prev => ({ ...prev, education: [...prev.education, item] }));
  };
  const updateEducation = (id, data) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, ...data } : edu)
    }));
  };
  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addSkill = (item) => {
    setResumeData(prev => ({ ...prev, skills: [...prev.skills, item] }));
  };
  const updateSkill = (id, name) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => skill.id === id ? { ...skill, name } : skill)
    }));
  };
  const removeSkill = (id) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  const addProject = (item) => {
    setResumeData(prev => ({ ...prev, projects: [...prev.projects, item] }));
  };
  const updateProject = (id, data) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj => proj.id === id ? { ...proj, ...data } : proj)
    }));
  };
  const removeProject = (id) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  const addSection = (type, title) => {
    setResumeData(prev => ({
      ...prev,
      sections: [...(prev.sections || []), { id: crypto.randomUUID(), type, title, data: [] }]
    }));
  };

  const updateSectionInfo = (sectionId, updates) => {
    setResumeData(prev => ({
      ...prev,
      sections: prev.sections.map(sec => sec.id === sectionId ? { ...sec, ...updates } : sec)
    }));
  };

  const removeSection = (sectionId) => {
    setResumeData(prev => ({
      ...prev,
      sections: prev.sections.filter(sec => sec.id !== sectionId)
    }));
  };

  const addSectionItem = (sectionId, item) => {
    setResumeData(prev => ({
      ...prev,
      sections: prev.sections.map(sec => 
        sec.id === sectionId ? { ...sec, data: [...sec.data, item] } : sec
      )
    }));
  };

  const updateSectionItem = (sectionId, itemId, data) => {
    setResumeData(prev => ({
      ...prev,
      sections: prev.sections.map(sec => 
        sec.id === sectionId ? {
          ...sec,
          data: sec.data.map(item => item.id === itemId ? { ...item, ...data } : item)
        } : sec
      )
    }));
  };

  const removeSectionItem = (sectionId, itemId) => {
    setResumeData(prev => ({
      ...prev,
      sections: prev.sections.map(sec => 
        sec.id === sectionId ? {
          ...sec,
          data: sec.data.filter(item => item.id !== itemId)
        } : sec
      )
    }));
  };

  return (
    <ResumeContext.Provider value={{
      resumeData,
      updatePersonalInfo,
      addWorkExperience, updateWorkExperience, removeWorkExperience,
      addEducation, updateEducation, removeEducation,
      addSkill, updateSkill, removeSkill,
      addProject, updateProject, removeProject,
      addSection, updateSectionInfo, removeSection,
      addSectionItem, updateSectionItem, removeSectionItem
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
