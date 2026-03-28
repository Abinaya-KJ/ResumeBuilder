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

const s = {
  root: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    color: '#1a1a1a',
    backgroundColor: 'white',
    padding: '36px 48px',
    lineHeight: 1.5,
    fontSize: '13px',
  },
  /* ── Header ── */
  name: {
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: 700,
    margin: '0 0 8px 0',
    letterSpacing: '0.5px',
  },
  contactRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '18px',
    fontSize: '12.5px',
    color: '#333',
    flexWrap: 'wrap',
    marginBottom: '18px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  /* ── Section ── */
  sectionHeading: {
    fontSize: '13px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    color: '#1a1a1a',
    borderBottom: '1.5px solid #1a1a1a',
    paddingBottom: '3px',
    marginBottom: '10px',
    marginTop: '0',
  },
  section: {
    marginBottom: '18px',
  },
  /* ── Row with dates ── */
  rowSpaced: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  /* ── Text styles ── */
  bold: { fontWeight: 700, fontSize: '13px' },
  italic: { fontStyle: 'italic', color: '#000000ff', fontSize: '12.5px' },
  muted: { color: '#555', fontSize: '12.5px' },
  blue: { color: '#000000ff', fontSize: '12.5px' },
  date: { fontSize: '12.5px', color: '#333', whiteSpace: 'nowrap', marginLeft: '12px' },
  /* ── Objective text ── */
  objectiveText: {
    fontSize: '12.5px',
    color: '#000000ff',
    margin: '0',
    lineHeight: 1.55,
  },
  /* ── Skills ── */
  skillCategory: { fontWeight: 700, fontSize: '13px', marginBottom: '1px' },
  skillValue: { fontSize: '12.5px', marginBottom: '6px' },
  /* ── Two-column grid ── */
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4px 24px',
  },
};

const SectionHead = ({ title }) => (
  <h2 style={s.sectionHeading}>{title}</h2>
);

const MinimalTemplate = ({ data }) => {
  const { personalInfo, workExperience, education, skills, projects, sections } = data;

  const getSection = (type) => sections?.find(sec => sec.type === type);
  const languages = getSection('languages');
  const certificates = getSection('certificates');
  const awards = getSection('awards');
  const interests = getSection('interests');
  const hobbies = getSection('hobbies');
  const customSections = sections?.filter(sec =>
    !['languages', 'certificates', 'awards', 'interests', 'hobbies'].includes(sec.type)
  ) || [];

  return (
    <div className="template-root" style={{ ...s.root, flexDirection: 'column', display: 'block' }}>

      {/* ── HEADER ── */}
      <header>
        <h1 style={s.name}>{personalInfo.name || 'Your Name'}</h1>
        <div style={s.contactRow}>
          {personalInfo.email && (
            <span style={s.contactItem}>
              <Mail size={12} strokeWidth={2} />
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span style={s.contactItem}>
              <Phone size={12} strokeWidth={2} />
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span style={s.contactItem}>
              <MapPin size={12} strokeWidth={2} />
              {personalInfo.location}
            </span>
          )}
          {personalInfo.linkedin && (
            <span style={s.contactItem}>
              <LinkedinIcon size={12} color="#333" />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '') || 'LinkedIn'}
              </a>
            </span>
          )}
          {personalInfo.github && (
            <span style={s.contactItem}>
              <GithubIcon size={12} color="#333" />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                {personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '') || 'GitHub'}
              </a>
            </span>
          )}
        </div>
      </header>

      {/* ── OBJECTIVE ── */}
      {personalInfo.summary && (
        <section style={s.section}>
          <SectionHead title="Objective" />
          <p style={s.objectiveText}>{personalInfo.summary}</p>
        </section>
      )}

      {/* ── EDUCATION ── */}
      {education.length > 0 && (
        <section style={s.section}>
          <SectionHead title="Education" />
          {education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '8px' }}>
              <div style={s.rowSpaced}>
                <span style={s.bold}>{edu.degree}</span>
                <span style={s.date}>{edu.year}</span>
              </div>
              <div style={s.italic}>{edu.institution}</div>
              {edu.description && <div style={s.muted}>{edu.description}</div>}
            </div>
          ))}
        </section>
      )}

      {/* ── WORK EXPERIENCE ── */}
      {workExperience.length > 0 && (
        <section style={s.section}>
          <SectionHead title="Experience" />
          {workExperience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '10px' }}>
              <div style={s.rowSpaced}>
                <span style={s.bold}>{exp.role}</span>
                <span style={s.date}>{exp.startDate} – {exp.endDate}</span>
              </div>
              <div style={s.italic}>{exp.company}{exp.location ? `, ${exp.location}` : ''}</div>
              {exp.description && (
                <p style={{ margin: '3px 0 0 0', fontSize: '12.5px', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* ── SKILLS ── */}
      {skills.length > 0 && (
        <section style={s.section}>
          <SectionHead title="Technical Skills" />
          <div style={{ fontSize: '12.5px' }}>
            {skills.map(sk => sk.name).join(' , ')}
          </div>
        </section>
      )}

      {/* ── LANGUAGES ── */}
      {languages && languages.data.length > 0 && (
        <section style={s.section}>
          <SectionHead title="Languages" />
          <div style={s.twoCol}>
            {languages.data.map(lang => (
              <div key={lang.id} style={{ fontSize: '12.5px' }}>
                {lang.name}
                {lang.proficiency && <span style={{ color: '#555' }}> – {lang.proficiency}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CERTIFICATES / AWARDS ── */}
      {((certificates && certificates.data.length > 0) || (awards && awards.data.length > 0)) && (
        <section style={s.section}>
          <SectionHead title={certificates ? 'Certificates' : 'Awards'} />
          <div style={s.twoCol}>
            {[...(certificates?.data || []), ...(awards?.data || [])].map(item => (
              <div key={item.id} style={{ marginBottom: '4px' }}>
                <div style={s.bold}>{item.title}</div>
                {item.issuer && <div style={s.italic}>{item.issuer}</div>}
                {item.year && <div style={s.muted}>{item.year}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PROJECTS ── */}
      {projects.length > 0 && (
        <section style={s.section}>
          <SectionHead title="Projects" />
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '10px' }}>
              <div style={s.rowSpaced}>
                <span style={s.bold}>{proj.title}</span>
                {proj.date && <span style={s.date}>{proj.date}</span>}
              </div>
              {proj.description && (
                <p style={{ ...s.blue, margin: '2px 0', whiteSpace: 'pre-line' }}>
                  {proj.description}
                </p>
              )}
              {proj.techStack && (
                <div style={{ fontSize: '12.5px' }}>
                  <span style={s.bold}>Tools and Usage: </span>
                  {proj.techStack}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* ── CUSTOM SECTIONS ── */}
      {customSections.map(sec => (
        <section key={sec.id} style={s.section}>
          <SectionHead title={sec.title} />
          {sec.data.map(item => (
            <div key={item.id} style={{ marginBottom: '6px' }}>
              {item.title && <div style={s.bold}>{item.title}</div>}
              {item.description && (
                <p style={{ margin: '2px 0 0 0', fontSize: '12.5px', whiteSpace: 'pre-line' }}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </section>
      ))}

      {/* ── INTERESTS ── */}
      {interests && interests.data.length > 0 && (
        <section style={s.section}>
          <SectionHead title="Interests" />
          <div style={{ fontSize: '12.5px' }}>
            {interests.data.map(item => item.name).join(' , ')}
          </div>
        </section>
      )}

      {/* ── HOBBIES ── */}
      {hobbies && hobbies.data.length > 0 && (
        <section style={s.section}>
          <SectionHead title="Hobbies" />
          <div style={{ fontSize: '12.5px' }}>
            {hobbies.data.map(item => item.name).join(' , ')}
          </div>
        </section>
      )}

    </div>
  );
};

export default MinimalTemplate;
