import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

const initialState = {
  mystate: '1',
  fetching: false, //加载数据时显示[加载中]组件
  loadingCount: 0
};
export const appInit = createAction('app Init');

export const setConfig = createAction('set config', cfg => ({ cfg }));
//网络请求开始时触发
export const appLoading = createAction('app loading');
//网络请求完成时触发
export const appFinish = createAction('app loading finish');

const app = createReducer(
  {
      [appInit]: (state) => ({
          ...state
      }),
    [setConfig]: (state, { cfg }) => ({
      ...state,
      cfg
    }),
      [appLoading]: (state) => {
          console.log('+++++++++++++++++++++++++');
          if (state.loadingCount === 0) {
              return {
                  ...state,
                  fetching: true,
                  loadingCount: 1
              }
          }
          return {
              ...state,
              loadingCount: state.loadingCount + 1
          }
      },

      [appFinish]: (state) => {
          if (state.loadingCount === 1 || state.loadingCount === 0) {
              return {
                  ...state,
                  fetching: false,
                  loadingCount: 0
              }
          }
          return {
              ...state,
              loadingCount: state.loadingCount - 1
          }
      },
  },
  initialState
);

import view from "./view/reducer";

const reducers = combineReducers({
    app,
    view,
});

export default reducers;
