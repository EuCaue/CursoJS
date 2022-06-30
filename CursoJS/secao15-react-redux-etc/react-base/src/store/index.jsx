import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// Import all reducers
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Store // Using all reducers
const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(rootSaga);
export default store;
