import React from 'react';
import { User, Mail, Phone, MapPin, Award, Globe, Briefcase, GraduationCap, Star } from 'lucide-react';

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

const ProfessionalTemplate = ({ data }) => {
  const { personalInfo, workExperience, education, skills, projects, sections } = data;

  // Fallback for Role/Title (use first work exp role if missing)
  const roleTitle = personalInfo.title || (workExperience.length > 0 ? workExperience[0].role : 'Professional');

  // Helper to find specific sections
  const getSection = (type) => sections?.find(s => s.type === type);
  const languages = getSection('languages');
  const awards = getSection('awards');

  return (
    <div className="template-root" style={{
      display: 'flex',
      width: '100%',
      minHeight: '100%',
      backgroundColor: 'white',
      fontFamily: '"Inter", sans-serif',
      color: '#1e293b',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {/* LEFT SIDEBAR (DARK) */}
      <div style={{
        width: '35%',
        backgroundColor: '#1e3a47',
        color: 'white',
        padding: '40px 25px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        {/* Profile Image & Name */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            margin: '0 auto 20px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid rgba(255,255,255,0.2)'
          }}>
            {personalInfo.image ? (
              <img src={personalInfo.image} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            ) : (
              <User size={60} color="white" opacity={0.5} />
            )}
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 5px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {personalInfo.name || 'Your Name'}
          </h1>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#94a3b8', margin: 0, textTransform: 'uppercase' }}>
            {roleTitle}
          </p>
        </div>

        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '8px', marginBottom: '5px' }}>
            Contact
          </h3>
          {personalInfo.email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px' }}>
              <Mail size={14} color="#94a3b8" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px' }}>
              <Phone size={14} color="#94a3b8" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px' }}>
              <MapPin size={14} color="#94a3b8" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px' }}>
              <LinkedinIcon size={14} color="#94a3b8" />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '') || 'LinkedIn'}
              </a>
            </div>
          )}
          {personalInfo.github && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px' }}>
              <GithubIcon size={14} color="#94a3b8" />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '') || 'GitHub'}
              </a>
            </div>
          )}
        </div>

        {/* About / Profile */}
        {personalInfo.summary && (
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '8px', marginBottom: '10px' }}>
              Profile
            </h3>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#cbd5e1', margin: 0 }}>
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Languages */}
        {languages && languages.data.length > 0 && (
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '8px', marginBottom: '10px' }}>
              Languages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {languages.data.map((lang, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                    <span>{lang.name}</span>
                    <span style={{ color: '#94a3b8' }}>{lang.proficiency}</span>
                  </div>
                  {/* Proficiency Dots/Bar */}
                  <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: lang.proficiency?.toLowerCase().includes('native') ? '100%' :
                        lang.proficiency?.toLowerCase().includes('fluent') ? '90%' :
                          lang.proficiency?.toLowerCase().includes('intermediate') ? '60%' : '30%',
                      backgroundColor: '#38bdf8'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards */}
        {awards && awards.data.length > 0 && (
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '8px', marginBottom: '10px' }}>
              Awards
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {awards.data.map((award, idx) => (
                <div key={idx} style={{ fontSize: '12px' }}>
                  <div style={{ fontWeight: 600 }}>{award.title}</div>
                  <div style={{ color: '#94a3b8', fontSize: '11px' }}>{award.year} | {award.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT SIDE (LIGHT) */}
      <div style={{
        width: '65%',
        padding: '40px 40px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        {/* Work Experience */}
        {workExperience.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <div style={{ padding: '8px', backgroundColor: '#f1f5f9', borderRadius: '8px', color: '#1e3a47' }}>
                <Briefcase size={20} />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                Work Experience
              </h2>
            </div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#f1f5f9', marginBottom: '20px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {workExperience.map(exp => (
                <div key={exp.id} className="avoid-page-break">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1e3a47', margin: 0 }}>{exp.role}</h3>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#38bdf8', marginBottom: '8px' }}>{exp.company}</div>
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#475569', margin: 0, whiteSpace: 'pre-line' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <div style={{ padding: '8px', backgroundColor: '#f1f5f9', borderRadius: '8px', color: '#1e3a47' }}>
                <GraduationCap size={20} />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                Education
              </h2>
            </div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#f1f5f9', marginBottom: '20px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {education.map(edu => (
                <div key={edu.id} className="avoid-page-break">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1e3a47', margin: 0 }}>{edu.degree}</h3>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>{edu.year}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#475569' }}>{edu.institution}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <div style={{ padding: '8px', backgroundColor: '#f1f5f9', borderRadius: '8px', color: '#1e3a47' }}>
                <Star size={20} />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                Expertise
              </h2>
            </div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#f1f5f9', marginBottom: '20px' }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map(skill => (
                <span key={skill.id} style={{
                  padding: '6px 14px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1e3a47'
                }}>
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects (Standard Section) */}
        {projects.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <div style={{ padding: '8px', backgroundColor: '#f1f5f9', borderRadius: '8px', color: '#1e3a47' }}>
                <Globe size={20} />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                Projects
              </h2>
            </div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#f1f5f9', marginBottom: '20px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {projects.map(proj => (
                <div key={proj.id} className="avoid-page-break">
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e3a47', marginBottom: '4px' }}>{proj.title}</div>
                  {proj.techStack && <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600, marginBottom: '6px' }}>{proj.techStack}</div>}
                  <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#475569', margin: 0, whiteSpace: 'pre-line' }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate;

