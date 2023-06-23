import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx';
// import './index.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
