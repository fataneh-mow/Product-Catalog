import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n";
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from './context/ThemeContext.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductUIProvider } from './context/ProductUIContext.jsx';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider> 
          <ProductUIProvider>
            <Toaster position='top-right' />
            <App />
          </ProductUIProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
