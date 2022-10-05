import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';
import reduxSaga from 'redux-saga';
import mainSaga from './sagas/mainSaga';

const sagaMiddleware = reduxSaga();

const mainStore = {
  ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
  runSaga: sagaMiddleware.run(mainSaga),
};

export type MainStore = ReturnType<typeof rootReducer>;

export default mainStore;
