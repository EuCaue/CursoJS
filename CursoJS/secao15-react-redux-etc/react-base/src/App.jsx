// Imports
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Router from './routes';
import GlobalStyles from './styles/GlobalStyles';
import store from './store';

// Main App component
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toastContainer" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
