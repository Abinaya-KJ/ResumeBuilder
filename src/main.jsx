import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ResumeProvider } from './utils/ResumeContext'
import { ThemeProvider } from './utils/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </ThemeProvider>
  </StrictMode>,
)
