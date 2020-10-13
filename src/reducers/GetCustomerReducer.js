import { CUSTOMER } from "../actions/CustomerAction";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER:
      return {...state, customers: action.payload, loading: false};
    default:
      return state;
  }
};

export default reducer;