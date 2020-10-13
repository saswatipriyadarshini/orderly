import React, {Component} from "react";
import { connect } from 'react-redux';
import { getCustomerAction } from "../../actions/CustomerAction";

class UserList extends Component{
  render() {
    console.log(this.props.customers);
    return(
      <div>
        user list
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  customers: state.customer.customers
})

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => {
      dispatch(getCustomerAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);