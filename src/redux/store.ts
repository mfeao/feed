import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;
