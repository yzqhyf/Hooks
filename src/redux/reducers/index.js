import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import fetchData from "./fetchData";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter, fetchData });
