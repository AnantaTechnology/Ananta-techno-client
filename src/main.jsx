// src/index.jsx  (or main.jsx)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './index.css';
import App from './App.jsx';

// 1️⃣ Create your QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,            // don’t auto-retry on failure
      refetchOnWindowFocus: false, // don’t refetch when window regains focus
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2️⃣ Wrap your app with the provider */}
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
      {/* 3️⃣ (Optional) add DevTools for debugging */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
