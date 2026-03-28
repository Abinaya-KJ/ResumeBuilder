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

const SectionHeader = ({ title }) => (
  <h2 style={{ 
    backgroundColor: '#ebecf3', 
    color: '#1a1c6b', 
    fontSize: '15px', 
    fontWeight: 700, 
    textAlign: 'center', 
    padding: '6px 0', 
    margin: '0 0 12px 0', 
    textTransform: 'none',
    border: 'none',
    width: '100%',
    letterSpacing: '0.5px'
  }}>
    {title}
  </h2>
);

const renderDescription = (text) => {
  if (!text) return null;
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  if (lines.length === 1 && !text.includes('•') && !text.includes('-')) {
     return <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#000' }}>{text}</p>;
  }

  return (
    <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', lineHeight: 1.5, color: '#000' }}>
      {lines.map((line, i) => (
        <li key={i} style={{ marginBottom: '4px' }}>{line.replace(/^[-•]\s*/, '')}</li>
      ))}
    </ul>
  );
};

const ModernTemplate = ({ data }) => {
  const { personalInfo, workExperience, education, skills, projects, sections } = data;
  const navyColor = '#1a1c6b';

  return (
    <div className="template-root" style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100%', fontFamily: '"Inter", sans-serif', color: '#000', backgroundColor: 'white', padding: '40px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 800, margin: 0, color: navyColor, letterSpacing: '-0.5px' }}>{personalInfo.name || 'Your Name'}</h1>
          {personalInfo.title && <div style={{ fontSize: '18px', fontStyle: 'italic', color: navyColor, fontWeight: 400 }}>{personalInfo.title}</div>}
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '12px', color: '#000', alignItems: 'center' }}>
          {personalInfo.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color={navyColor} style={{ flexShrink: 0 }} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={14} color={navyColor} style={{ flexShrink: 0 }} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} color={navyColor} style={{ flexShrink: 0 }} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <LinkedinIcon size={14} color={navyColor} />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '')}
              </a>
            </div>
          )}
          {personalInfo.github && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <GithubIcon size={14} color={navyColor} />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '')}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Profile */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '20px' }}>
          <SectionHeader title="Profile" />
          <p style={{ fontSize: '13px', lineHeight: 1.6, margin: 0, color: '#000', textAlign: 'justify' }}>
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <section style={{ marginBottom: '20px' }}>
          <SectionHeader title="Work Experience" />
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="avoid-page-break" style={{ marginBottom: index === workExperience.length - 1 ? '0' : '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '14px', color: '#000' }}>{exp.role}</strong>
                <span style={{ fontSize: '13px', color: '#000' }}>
                  {exp.startDate} {exp.startDate && exp.endDate ? '–' : ''} {exp.endDate}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <i style={{ fontSize: '13px', color: '#000' }}>{exp.company}</i>
                {exp.location && <span style={{ fontSize: '13px', color: '#000' }}>{exp.location}</span>}
              </div>
              <div style={{ marginLeft: '5px' }}>
                {renderDescription(exp.description)}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: '20px' }}>
          <SectionHeader title="Education" />
          {education.map((edu, index) => (
            <div key={edu.id} className="avoid-page-break" style={{ marginBottom: index === education.length - 1 ? '0' : '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '14px', color: '#000' }}>{edu.degree}</strong>
                <span style={{ fontSize: '13px', color: '#000' }}>{edu.year}</span>
              </div>
              <div style={{ fontSize: '13px', fontStyle: 'italic', color: '#000', marginTop: '4px' }}>
                {edu.institution}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="avoid-page-break" style={{ marginBottom: '20px' }}>
          <SectionHeader title="Skills" />
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', lineHeight: 1.6, color: '#000' }}>
            {skills.map(skill => (
              <li key={skill.id} style={{ marginBottom: '6px' }}>{skill.name}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '20px' }}>
          <SectionHeader title="Projects" />
          {projects.map((proj, index) => (
            <div key={proj.id} className="avoid-page-break" style={{ marginBottom: index === projects.length - 1 ? '0' : '15px' }}>
              <strong style={{ fontSize: '14px', color: '#000', display: 'block', marginBottom: '4px' }}>{proj.title}</strong>
              {proj.techStack && <div style={{ fontSize: '12px', color: navyColor, fontStyle: 'italic', marginBottom: '6px' }}>{proj.techStack}</div>}
              <div>
                {renderDescription(proj.description)}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Custom Sections */}
      {sections && sections.length > 0 && sections.map((sec, index) => {
        if (sec.type === 'languages') {
          return (
            <section key={sec.id} className="avoid-page-break" style={{ marginBottom: index === sections.length - 1 ? '0' : '20px' }}>
              <SectionHeader title={sec.title} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px', color: '#000' }}>
                 {sec.data.map(item => (
                   <div key={item.id}>
                     <strong>{item.name}</strong> {item.proficiency ? `— ${item.proficiency}` : ''}
                   </div>
                 ))}
              </div>
            </section>
          );
        }

        if (sec.type === 'certificates' || sec.type === 'awards') {
          return (
            <section key={sec.id} style={{ marginBottom: index === sections.length - 1 ? '0' : '20px' }}>
              <SectionHeader title={sec.title} />
              {sec.data.map((item, i) => (
                <div key={item.id} className="avoid-page-break" style={{ marginBottom: i === sec.data.length - 1 ? '0' : '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ fontSize: '14px', color: '#000' }}>{item.title}</strong>
                    <span style={{ fontSize: '13px', color: '#000' }}>{item.year}</span>
                  </div>
                  {item.issuer && <div style={{ fontSize: '13px', fontStyle: 'italic', color: '#000', marginTop: '2px' }}>{item.issuer}</div>}
                </div>
              ))}
            </section>
          );
        }

        if (sec.type === 'interests' || sec.type === 'hobbies') {
          return (
            <section key={sec.id} className="avoid-page-break" style={{ marginBottom: index === sections.length - 1 ? '0' : '20px' }}>
              <SectionHeader title={sec.title} />
              <div style={{ fontSize: '13px', color: '#000' }}>
                {sec.data.map(item => item.name).join(', ')}
              </div>
            </section>
          );
        }

        return (
          <section key={sec.id} style={{ marginBottom: index === sections.length - 1 ? '0' : '20px' }}>
            <SectionHeader title={sec.title} />
            {sec.data.map((item, i) => (
              <div key={item.id} className="avoid-page-break" style={{ marginBottom: i === sec.data.length - 1 ? '0' : '12px' }}>
                 {item.title && <strong style={{ fontSize: '14px', display: 'block', color: '#000', marginBottom: '4px' }}>{item.title}</strong>}
                 <div style={{ fontSize: '13px', marginTop: '4px' }}>
                   {renderDescription(item.description)}
                 </div>
              </div>
            ))}
          </section>
        );
      })}
      
    </div>
  );
};

export default ModernTemplate;
