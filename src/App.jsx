import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Layout from './components/Layout';

const TemplateSelectorModal = lazy(() => import('./components/TemplateSelectorModal'));

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <Header onOpenTemplates={() => setIsTemplateModalOpen(true)} />
      <div className="fade-in" style={{ flex: 1, overflow: 'hidden' }}>
        <Layout selectedTemplate={selectedTemplate} />
      </div>

      <Suspense fallback={null}>
        <TemplateSelectorModal 
          isOpen={isTemplateModalOpen} 
          onClose={() => setIsTemplateModalOpen(false)}
          onSelect={(template) => {
            setSelectedTemplate(template);
            setIsTemplateModalOpen(false);
          }}
          selectedTemplate={selectedTemplate}
        />
      </Suspense>
    </div>
  );
}

export default App;
