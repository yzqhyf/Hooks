import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actionTypes";

const initialState = {
  data: {},
  pending: null,
  error: null
};

const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...state,
        pending: true
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        pending: false,
        data: action.data
      };
    }
    case FETCH_FAIL: {
      return {
        ...state,
        pending: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export default fetchData;
