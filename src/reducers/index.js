import { combineReducers } from "redux";
import ordersReducer from "./orderReducers";

export default combineReducers({
  orders: ordersReducer,
});
