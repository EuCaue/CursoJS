// Exporting the default config for redux-persist
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      // Application name 💬
      key: 'REACT-FRONTEND-API-REST',

      // Local to storage 💬
      storage,

      // Modules you want to save 💬
      whitelist: ['auth'],
    },

    // Reducers 💬
    reducers,
  );

  return persistedReducers;
};
