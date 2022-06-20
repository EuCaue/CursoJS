// Imports
import React from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
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
    </BrowserRouter>
  );
}

export default App;
