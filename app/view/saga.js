import { takeLatest, put, select } from 'redux-saga/effects';
import {
  getTodoListData,
  setTodoListData,
} from './reducer';

function* getTodoListDataHandle() {
  try {

  } catch (err) {
    console.log(`获取失败:${err}`, 'danger');
  }
}

function* setTodoListDataHandle({ payload: { todoListData } }) {
  try {
    const list = this.state.list;
    yield put(setTodoListData([todoListData]));
  } catch (err) {
    console.log(`获取失败:${err}`, 'danger');
  }
}

export default function* viewTest() {
  yield takeLatest(getTodoListData, getTodoListDataHandle);
  yield takeLatest(setTodoListData, setTodoListDataHandle);
}
