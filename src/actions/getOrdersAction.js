export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';

export const requestOrders = () => ({
  type: REQUEST_ORDERS
});

export const receiveOrders = (upcoming) => ({
  type: RECEIVE_ORDERS,
  upcoming
});

export function getUpcomingOrders(){
  return function (dispatch) {
    dispatch(requestOrders());
    return fetch(`https://homeorderly.herokuapp.com/orders`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
          dispatch(receiveOrders(json.result));
        },
      );
  }
}