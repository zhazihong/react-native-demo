import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { __DEV__ } from 'react-native';
import sagas from './saga';

import reducers from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = __DEV__
  ? createStore(reducers, applyMiddleware(sagaMiddleware, logger))
  : createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
