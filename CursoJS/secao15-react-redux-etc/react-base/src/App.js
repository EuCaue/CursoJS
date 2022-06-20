// Imports
import React from 'react';
import Header from './components/Header';
import Login from './pages/Login/Index';
import GlobalStyles from './styles/GlobalStyles';

// Main App component
function App() {
  return (
    <>
      <Header />
      <Login />;
      <GlobalStyles />
    </>
  );
}

export default App;
