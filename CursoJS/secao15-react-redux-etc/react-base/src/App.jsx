// Imports
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/Header';
import Router from './routes';
import GlobalStyles from './styles/GlobalStyles';
import store, { persistor } from './store';

// Main App component
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Router />
          <GlobalStyles />
          <ToastContainer autoClose={500} className="toastContainer" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
