import React, { useState, useEffect, lazy, Suspense } from 'react';
import ResumeForm from './ResumeForm';
import { Maximize2, Loader2 } from 'lucide-react';

const ResumePreview = lazy(() => import('./ResumePreview'));
const FullScreenResumeModal = lazy(() => import('./FullScreenResumeModal'));

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '200px' }}>
    <Loader2 className="animate-spin" size={32} style={{ color: 'var(--primary-color)' }} />
  </div>
);

const Layout = ({ selectedTemplate }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Lock / unlock body scroll when fullscreen opens
  useEffect(() => {
    document.body.style.overflow = isFullScreen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isFullScreen]);

  const openFullScreen  = () => setIsFullScreen(true);
  const closeFullScreen = () => setIsFullScreen(false);

  return (
    <>
      <div className="main-layout">

        {/* ── LEFT: Form ── */}
        <div className="column-left">
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 className="heading-text">Resume Details</h2>
            <p className="muted-text" style={{ marginTop: '0.25rem' }}>
              Fill in your details below to build your professional resume.
            </p>
          </div>
          <ResumeForm selectedTemplate={selectedTemplate} />
        </div>

        {/* ── RIGHT: Preview ── */}
        <div className="column-right">

          {/* Toolbar – stays pinned at top of dark panel */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem',
            flexShrink: 0,
          }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--preview-label)' }}>
              Live Preview
            </h3>
            <button onClick={openFullScreen} className="btn-base btn-primary">
              <Maximize2 size={16} />
              Full Screen
            </button>
          </div>

          {/* Side-panel preview — fully unmounted when fullscreen is open */}
          {!isFullScreen && (
            <Suspense fallback={<LoadingFallback />}>
              <ResumePreview
                selectedTemplate={selectedTemplate}
                onClick={openFullScreen}
              />
            </Suspense>
          )}
        </div>
      </div>

      {/* ── Full-Screen Modal — only mounted when needed ── */}
      {isFullScreen && (
        <Suspense fallback={null}>
          <FullScreenResumeModal isOpen={true} onClose={closeFullScreen}>
            <ResumePreview selectedTemplate={selectedTemplate} />
          </FullScreenResumeModal>
        </Suspense>
      )}
    </>
  );
};

export default Layout;
