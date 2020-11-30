import { combineReducers } from "redux";
import authUser from "./authUser";
import loggedIn from "./loggedIn";

export default combineReducers({
  authUser,
  loggedIn,
});
