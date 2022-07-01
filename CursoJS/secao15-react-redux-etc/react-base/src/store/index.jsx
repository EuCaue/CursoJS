// Index file for the redux 💬
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// Import all reducers 💬
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Creating a sagaMiddleware 💬
const sagaMiddleware = createSagaMiddleware();

// Store // Using all reducers // Middlewars 💬
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

export default store;
// Using the all sagas 💬
sagaMiddleware.run(rootSaga);
