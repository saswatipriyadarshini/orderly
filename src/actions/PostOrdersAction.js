import axios from 'axios';

export const REQUEST_ORDER = 'REQUEST_ORDER';
export const POST_ORDER = 'POST_ORDER';

export const requestPostOrder = () => ({
  type: REQUEST_ORDER
});

export const postOrder = (data) => ({
  type: POST_ORDER,
  data
})

export function postNewOrderAction(customer){
  return function (dispatch){
    axios.post(`https://homeorderly.herokuapp.com/customers`, {customer})
      .then(res => {
        dispatch(postOrder(customer))
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      })
  }
}