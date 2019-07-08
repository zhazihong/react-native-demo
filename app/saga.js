import { takeEvery, all } from 'redux-saga/effects';
import { setConfig } from './reducer';

const handleAppInit = function* handleAppInit() {
  yield setConfig;
  console.log('handleAppInit');
};

const app = function* app() {
  yield takeEvery(setConfig, handleAppInit);
};

import view from "./view/saga";

const sagas = function* sagas() {
  yield all([
      app(),
      view(),
  ]);
};

export default sagas;
