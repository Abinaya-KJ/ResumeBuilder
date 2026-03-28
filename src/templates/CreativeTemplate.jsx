import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Globe, Code, Globe2, Shapes, Heart } from 'lucide-react';

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

const CreativeTemplate = ({ data }) => {
  const { personalInfo, workExperience, education, skills, projects, sections, hobbies } = data;

  const roleTitle = personalInfo.title || (workExperience.length > 0 ? workExperience[0].role : 'Professional');

  const getSection = (type) => sections?.find(s => s.type === type);
  const languages = getSection('languages');
  const interests = getSection('interests');
  const hobbiesSection = getSection('hobbies');

  const leftBg = '#c7c5e0';
  const rightBg = '#4b3f72';
  const leftText = '#4b3f72';
  const rightText = '#e2dff0';
  const rightHeading = '#ffffff';

  return (
    <div className="template-root" style={{
      display: 'flex',
      minHeight: '100%', /* Expands fully inside paper bounds */
      backgroundColor: rightBg,
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      boxSizing: 'border-box'
    }}>
      {/* LEFT COLUMN - 30% */}
      <div style={{
        width: '35%',
        backgroundColor: leftBg,
        color: leftText,
        padding: '40px 25px',
        display: 'flex',
        flexDirection: 'column',
        gap: '35px'
      }}>
        {/* Name & Role */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 900,
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            color: leftText,
            textShadow: '2px 2px 0 rgba(255,255,255,0.4)',
            letterSpacing: '1px'
          }}>
            {personalInfo.name || 'Your Name'}
          </h1>
          <div style={{ fontSize: '16px', fontWeight: 600, color: leftText, marginBottom: '25px' }}>
            {roleTitle}
          </div>

          {/* Profile Image */}
          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            backgroundColor: 'rgba(75, 63, 114, 0.1)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `3px solid ${leftText}`,
            overflow: 'hidden',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            {personalInfo.image ? (
              <img src={personalInfo.image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <User size={60} color={leftText} opacity={0.6} />
            )}
          </div>
        </div>

        {/* Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '12px', fontWeight: 600 }}>
          {personalInfo.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MapPin size={16} color={leftText} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={16} color={leftText} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={16} color={leftText} />
              <span style={{ wordBreak: 'break-all' }}>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <LinkedinIcon size={16} color={leftText} />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', wordBreak: 'break-all' }}>
                {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '') || 'LinkedIn'}
              </a>
            </div>
          )}
          {personalInfo.github && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <GithubIcon size={16} color={leftText} />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', wordBreak: 'break-all' }}>
                {personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '') || 'GitHub'}
              </a>
            </div>
          )}
        </div>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <Code size={20} color={leftText} />
              <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0, textTransform: 'capitalize' }}>Skills</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {skills.map((skill, idx) => {
                const skillName = typeof skill === 'object' ? skill.name : skill;
                const width = typeof skill === 'object' && skill.level ? skill.level : ['85%', '90%', '75%', '95%', '80%', '70%'][idx % 6];
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600 }}>
                    <span style={{ width: '40%' }}>{skillName}</span>
                    <div style={{ width: '55%', height: '6px', backgroundColor: 'rgba(75, 63, 114, 0.2)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: width, height: '100%', backgroundColor: leftText, borderRadius: '3px' }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages && languages.data.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <Globe2 size={20} color={leftText} />
              <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>Languages</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {languages.data.map((lang, idx) => {
                const prof = lang.proficiency?.toLowerCase() || '';
                const width = prof.includes('native') ? '100%' : prof.includes('fluent') ? '85%' : prof.includes('inter') ? '60%' : '40%';
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600 }}>
                    <span style={{ width: '40%' }}>{lang.name}</span>
                    <div style={{ width: '55%', height: '6px', backgroundColor: 'rgba(75, 63, 114, 0.2)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: width, height: '100%', backgroundColor: leftText, borderRadius: '3px' }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Hobbies */}
        {hobbiesSection && hobbiesSection.data.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <Heart size={20} color={leftText} />
              <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>Hobbies</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {hobbiesSection.data.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 600
                }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: leftText, borderRadius: '50%' }} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT COLUMN - 70% */}
      <div style={{
        width: '65%',
        padding: '50px 40px',
        color: rightText,
        display: 'flex',
        flexDirection: 'column',
        gap: '35px'
      }}>
        {/* Profile / Summary */}
        {personalInfo.summary && (
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.7, color: '#e2dff0', letterSpacing: '0.3px' }}>
            {personalInfo.summary}
          </p>
        )}

        {/* Experience */}
        {workExperience.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Briefcase size={22} color={rightHeading} />
              <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: rightHeading, letterSpacing: '0.5px' }}>Professional Experience</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {workExperience.map(exp => (
                <div key={exp.id}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: rightHeading }}>
                    {exp.company}, <span style={{ fontWeight: 400 }}>{exp.role}</span>
                  </h3>
                  <div style={{ fontSize: '12px', color: '#b9b3d1', marginBottom: '10px' }}>
                    {exp.startDate} – {exp.endDate} {exp.location && `| ${exp.location}`}
                  </div>
                  <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: rightText, whiteSpace: 'pre-line' }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <GraduationCap size={22} color={rightHeading} />
              <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: rightHeading, letterSpacing: '0.5px' }}>Education</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {education.map(edu => (
                <div key={edu.id}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: rightHeading }}>
                    {edu.degree}, <span style={{ fontWeight: 400 }}>{edu.institution}</span>
                  </h3>
                  <div style={{ fontSize: '12px', color: '#b9b3d1' }}>
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Globe size={22} color={rightHeading} />
              <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: rightHeading, letterSpacing: '0.5px' }}>Projects</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {projects.map(proj => (
                <div key={proj.id}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: rightHeading }}>{proj.title}</h3>
                  {proj.techStack && <div style={{ fontSize: '12px', color: '#b9b3d1', marginBottom: '8px' }}>{proj.techStack}</div>}
                  <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: rightText, whiteSpace: 'pre-line' }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interests */}
        {interests && interests.data.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Shapes size={22} color={rightHeading} />
              <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: rightHeading, letterSpacing: '0.5px' }}>Interests</h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {interests.data.map(item => (
                <div key={item.id} style={{
                  padding: '6px 20px',
                  border: `1px solid ${rightText}`,
                  borderRadius: '4px',
                  fontSize: '13px',
                  color: '#ffffff'
                }}>
                  {item.name}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CreativeTemplate;
