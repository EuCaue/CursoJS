import { configureStore } from '@reduxjs/toolkit';
// Import all reducers
import rootReducer from './modules/rootReducer';

// Store // Using all reducers
const store = configureStore({ reducer: rootReducer });

export default store;
