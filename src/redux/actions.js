import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const fetch_start = () => {
  return {
    type: FETCH_START,
    pending: true
  };
};

export const fetch_success = data => {
  return {
    type: FETCH_SUCCESS,
    data: data
  };
};

export const fetch_fail = error => ({
  type: FETCH_FAIL,
  error: error
});
