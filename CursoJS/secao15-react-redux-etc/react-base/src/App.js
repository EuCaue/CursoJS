// Imports
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Router from './routes';
import GlobalStyles from './styles/GlobalStyles';

// Main App component
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toastContainer" />
    </BrowserRouter>
  );
}

export default App;
