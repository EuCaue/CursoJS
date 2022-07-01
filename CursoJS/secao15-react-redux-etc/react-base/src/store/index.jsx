// Index file for the redux 💬
import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// PersistReducers
import persistedReducers from './modules/reduxPersist';

// Import all reducers 💬
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Creating a sagaMiddleware 💬
const sagaMiddleware = createSagaMiddleware();

// Store // Using all reducers // Middlewars 💬
const store = configureStore({
  // Reducer with redux-persist 💬
  reducer: persistedReducers(rootReducer),
  middleware: [sagaMiddleware],
});

// Export Persistor 💬
export const persistor = persistStore(store);

export default store;
// Using the all sagas 💬
sagaMiddleware.run(rootSaga);
