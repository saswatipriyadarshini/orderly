import {combineReducers} from "redux";
import getOrders from './getOrdersReducer';
import postOrder from "./postOrderReducer";
import customer from "./GetCustomerReducer";

export default combineReducers({
  getOrders,
  postOrder,
  customer
})