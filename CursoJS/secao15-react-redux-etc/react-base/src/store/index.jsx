import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// Import all reducers
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Store // Using all reducers
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

export default store;
sagaMiddleware.run(rootSaga);
