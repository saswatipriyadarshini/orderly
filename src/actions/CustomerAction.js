
export const CUSTOMER = 'CUSTOMER';

export const getCustomer = (data) => ({
  type: CUSTOMER,
  payload: data
})

export function getCustomerAction() {
  return function (dispatch) {
    return fetch(`https://homeorderly.herokuapp.com/customers`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(getCustomer(json.result));
        },
      );
  }
}
