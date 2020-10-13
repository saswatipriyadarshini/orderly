import {REQUEST_ORDER, POST_ORDER} from "../actions/PostOrdersAction";

const reducer = (state = {}, action) => {
  switch (action.type){
    case REQUEST_ORDER:
      return {...state, loading: true};
    case POST_ORDER:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default reducer;