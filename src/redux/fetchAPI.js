import { fetch_start, fetch_success, fetch_fail } from "./actions";
import axios from "axios";

export const fetch_userInfo = () => {
  return async dispatch => {
    try {
      dispatch(fetch_start());
      let response = await axios.get("https://api.github.com/users/yzqhyf");
      dispatch(fetch_success(response.data));
    } catch (error) {
      //throw error;
      dispatch(fetch_fail(error));
    }
  };
};

export const fetchAPI = () => {
  return dispatch => {
    dispatch(fetch_start());
    return axios
      .get("https://api.github.com/users/yzqhyf")
      .then(response => {
        dispatch(fetch_success(response.data));
      })
      .catch(error => {
        dispatch(fetch_fail(error));
      });
  };
};
