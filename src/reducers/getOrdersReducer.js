import { REQUEST_ORDERS, RECEIVE_ORDERS } from "../actions/GetOrdersAction";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ORDERS:
      return {...state, loading: true};
    case RECEIVE_ORDERS:
      return {...state, upcomingOrders: action.upcoming, loading: false};
    default:
      return state;
  }
};

export default reducer;