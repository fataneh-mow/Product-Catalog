import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n";
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Toaster position='top-right' />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
