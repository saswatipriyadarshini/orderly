import React, {Component} from "react";
import { connect } from 'react-redux';
import { getCustomerAction } from "../../actions/CustomerAction";
import 'antd/dist/antd.css';
import "./index.css";
import { Table } from 'antd';

class UserList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      customers: [],
      columns: [
        {
          title: 'No.',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text, item) =>
            <div
              className='orderly-customer-name'
              onClick={this.userDetailsHandler.bind(this, item)}
            >
              {text}
            </div>,
        },
        {
          title: 'Total Purchase',
          dataIndex: 'purchase',
          key: 'purchase'
        }
      ]
    }
  }

  componentDidMount() {
    this.props.getCustomers();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.customers !== prevState.customers) {
      return {
        customers: nextProps.customers,
        userInfo: nextProps.customers && nextProps.customers.data[0]
      };
    }
  }

  userDetailsHandler(item){
    this.setState({
      userInfo: item
    })
  }

  render() {
    let common_class = 'orderly-customer-details';
    const { userInfo, columns, customers } = this.state;
    return(
      <div className='orderly-customer-list__container'>
        <Table style={{width: '50%'}} columns={columns} dataSource={ customers && customers.data } />
        <div className={`${common_class}__container`}>
          <div className={`${common_class}-cross-btn`}>&times;</div>
          <div className={common_class}>
            <p>{userInfo && userInfo.name}</p>
            <p>Purchases</p>
            <p>Flat</p>
            <p>Phone</p>
           <div>
             don't like tomato sauce <br/>
             likes extra oregano
           </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  customers: state.customer.customers
})

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomers: () => {
      dispatch(getCustomerAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);