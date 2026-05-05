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
import { Provider } from 'react-redux';
import { store } from './store/ConfigureStore.js';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider> 
          <ProductUIProvider>
            <Provider store={store}>
              <Toaster position='top-center' 
                toastOptions={{
                  style: {
                    background: "var(--bgPrimary)",
                    color: "var(--textPrimary)",
                    border: "1px solid var(--bgSecondary)",
                  },
                }}
              />
              <App />
            </Provider>
          </ProductUIProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
