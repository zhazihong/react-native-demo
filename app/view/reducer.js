
import { createReducer, createAction } from 'redux-act';

const initialState = {
  todoListData: [], // todoList 列表
};
export const getTodoListData = createAction('get TodoListData');
export const setTodoListData = createAction(
  'set TodoListData',
    todoListData => ({ todoListData })
);

export default createReducer(
  {
    [getTodoListData]: state => ({
      ...state
    }),
    [setTodoListData]: (state, { todoListData }) => ({
      ...state,
        todoListData: [...state.todoListData, todoListData]
    })
  },
  initialState
);
