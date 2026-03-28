import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useResume } from '../utils/ResumeContext';
import { Sun, Moon, FileText, Download, Loader2, Layout as LayoutIcon } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Header = ({ onOpenTemplates }) => {
  const { resumeData } = useResume();
  const [isExporting, setIsExporting] = useState(false);

  const exportPDF = async () => {
    const element = document.getElementById('resume-preview-scaled') || document.getElementById('resume-preview');
    if (!element) return;

    try {
      setIsExporting(true);
      const canvas = await html2canvas(element, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${resumeData.personalInfo.name ? resumeData.personalInfo.name.replace(/\s+/g, '_') : 'My'}_Resume.pdf`);
    } catch (error) {
      console.error("Error generating PDF", error);
    } finally {
      setIsExporting(false);
    }
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <FileText size={28} className="primary-text" />
        <h1 className="heading-text">ResumeBuilder Pro</h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button 
          onClick={onOpenTemplates}
          className="btn-base btn-outline"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <LayoutIcon size={18} />
          <span>Templates</span>
        </button>

        <button 
          onClick={toggleTheme} 
          className="btn-base btn-outline" 
          style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button onClick={exportPDF} disabled={isExporting} className="btn-base btn-primary">
          {isExporting ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          <span>{isExporting ? 'Exporting...' : 'Export PDF'}</span>
        </button>
      </div>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
