import {combineReducers} from "redux";
import getOrders from './getOrdersReducer';
import postOrder from "./postOrderReducer";

export default combineReducers({
  getOrders,
  postOrder,
})