import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ModernTemplate = ({ data }) => {
  const { personalInfo, workExperience, education, skills, projects, sections } = data;

  return (
    <div className="template-root" style={{ display: 'flex', minHeight: '100%', fontFamily: '"Inter", sans-serif', color: '#1e293b', backgroundColor: 'white' }}>
      {/* Left Sidebar - Now light themed */}
      <div style={{ width: '35%', borderRight: '1px solid #e2e8f0', padding: '40px 25px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 5px 0', color: '#1e293b', lineHeight: 1.2 }}>{personalInfo.name || 'Your Name'}</h1>
        
        <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 5px 0', color: '#64748b', fontWeight: 700 }}>Contact</h3>
          {personalInfo.email && (
            <div style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={14} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LinkedinIcon size={14} />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '') || 'LinkedIn'}
              </a>
            </div>
          )}
          {personalInfo.github && (
            <div style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GithubIcon size={14} />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '') || 'GitHub'}
              </a>
            </div>
          )}
        </div>

        {skills.length > 0 && (
          <div>
            <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px 0', color: '#64748b', fontWeight: 700 }}>Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.map(skill => (
                <span key={skill.id} style={{ padding: '4px 10px', backgroundColor: '#eef2ff', color: '#6366f1', borderRadius: '4px', fontSize: '12px', fontWeight: 500 }}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px 0', color: '#64748b', fontWeight: 700 }}>Education</h3>
            {education.map(edu => (
              <div key={edu.id} style={{ marginBottom: '15px' }}>
                <div style={{ fontWeight: 700, fontSize: '13px', color: '#1e293b' }}>{edu.degree}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{edu.institution}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>{edu.year}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Content */}
      <div style={{ width: '65%', padding: '40px 30px', backgroundColor: '#ffffff' }}>
        {personalInfo.summary && (
          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '18px', color: '#6366f1', borderBottom: '2px solid #eef2ff', paddingBottom: '5px', marginBottom: '15px' }}>Profile</h2>
            <p style={{ margin: '0', fontSize: '14px', lineHeight: 1.6, color: '#475569' }}>{personalInfo.summary}</p>
          </section>
        )}

        {workExperience.length > 0 && (
          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '18px', color: '#6366f1', borderBottom: '2px solid #eef2ff', paddingBottom: '5px', marginBottom: '15px' }}>Experience</h2>
            {workExperience.map(exp => (
              <div key={exp.id} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>{exp.role}</h3>
                  <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>{exp.startDate} - {exp.endDate}</span>
                </div>
                <div style={{ fontSize: '14px', color: '#6366f1', marginBottom: '8px', fontWeight: 600 }}>{exp.company}</div>
                <p style={{ margin: '0', fontSize: '13px', lineHeight: 1.6, color: '#475569', whiteSpace: 'pre-line' }}>{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {projects.length > 0 && (
          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '18px', color: '#6366f1', borderBottom: '2px solid #eef2ff', paddingBottom: '5px', marginBottom: '15px' }}>Projects</h2>
            {projects.map(proj => (
              <div key={proj.id} style={{ marginBottom: '15px' }}>
                <h3 style={{ margin: '0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>{proj.title}</h3>
                {proj.techStack && <div style={{ fontSize: '12px', color: '#6366f1', fontWeight: 600, marginBottom: '4px' }}>{proj.techStack}</div>}
                <p style={{ margin: '0', fontSize: '13px', lineHeight: 1.6, color: '#475569', whiteSpace: 'pre-line' }}>{proj.description}</p>
              </div>
            ))}
          </section>
        )}

        {sections && sections.length > 0 && sections.map(sec => (
          <section key={sec.id} style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '18px', color: '#6366f1', borderBottom: '2px solid #eef2ff', paddingBottom: '5px', marginBottom: '15px' }}>{sec.title}</h2>
            
            {sec.type === 'custom' && sec.data.map(item => (
              <div key={item.id} style={{ marginBottom: '10px' }}>
                {item.title && <h3 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>{item.title}</h3>}
                {item.description && <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#475569', whiteSpace: 'pre-line' }}>{item.description}</p>}
              </div>
            ))}

            {(sec.type === 'certificates' || sec.type === 'awards') && sec.data.map(item => (
              <div key={item.id} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>{item.title}</h3>
                  <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>{item.year}</span>
                </div>
                {item.issuer && <div style={{ fontSize: '13px', color: '#6366f1' }}>{item.issuer}</div>}
              </div>
            ))}

            {sec.type === 'languages' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {sec.data.map(item => (
                  <div key={item.id} style={{ fontSize: '13px', color: '#475569' }}>
                    <strong style={{ color: '#1e293b' }}>{item.name}</strong> - {item.proficiency}
                  </div>
                ))}
              </div>
            )}

            {(sec.type === 'interests' || sec.type === 'hobbies') && (
              <div style={{ fontSize: '13px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {sec.data.map(item => (
                  <span key={item.id} style={{ backgroundColor: '#eef2ff', color: '#6366f1', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 500 }}>{item.name}</span>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ModernTemplate;
