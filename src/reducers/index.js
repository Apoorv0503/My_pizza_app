import { combineReducers } from "redux";
import menu from "./menu";
import cart from "./cart";

export default combineReducers({
  cart,
  menu,
});
