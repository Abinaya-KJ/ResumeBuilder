ResumeBuilder Pro
A clean and simple resume builder app built with React + Vite. You can fill in your details, pick a template, preview your resume in real time, and export it as a PDF — all in one place.

Live Demo
Deployed on Netlify → [your netlify link here]

What it does

Fill in your personal info, work experience, education, skills, and more
Live preview updates as you type — no need to refresh anything
Switch between multiple resume templates (Professional, Modern, Minimal, Creative)
Full screen preview mode so you can see exactly how it looks
Export your resume as a PDF with one click
Dark mode support
Section selector so you can customize what shows up on your resume


Tech Stack

React — component based UI
Vite — fast development build tool
React Context API — for managing resume data and theme state across components
CSS — custom styling


Project Structure
src/
├── components/
│   ├── DynamicSectionRenderer.jsx
│   ├── FullScreenResumeModal.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── ResumeForm.jsx
│   ├── ResumePreview.jsx
│   ├── SectionSelectorModal.jsx
│   └── TemplateSelectorModal.jsx
├── templates/
│   ├── CreativeTemplate.jsx
│   ├── MinimalTemplate.jsx
│   ├── ModernTemplate.jsx
│   └── ProfessionalTemplate.jsx
├── utils/
│   ├── ResumeContext.jsx
│   └── ThemeContext.jsx
├── App.jsx
├── main.jsx
└── index.css

Deployment
This project is deployed on Netlify. Just connect your GitHub repo to Netlify and it handles the rest automatically.

Author
Built by Abinaya J  — feel free to reach out or connect on LinkedIn https://www.linkedin.com/in/abinaya-kj-0b3982302/
