import React, {Component} from "react";
import { connect } from 'react-redux';
import { getCustomerAction } from "../../actions/CustomerAction";
import 'antd/dist/antd.css';
import "./index.css";
import { Table, Row, Col } from 'antd';
import { UserOutlined, DollarOutlined, HomeOutlined, PhoneOutlined, InfoCircleOutlined } from '@ant-design/icons';


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
        <Row>
          <Col sm={24} md={12} bg={12}>
            <Table columns={columns} dataSource={ customers && customers.data } />
          </Col>
          <Col sm={24} md={12}>
            <div className={`${common_class}__container`}>
              {/*<div className={`${common_class}-cross-btn`}>&times;</div>*/}
              <div className={common_class}>
                <div>
                  <p>name</p>
                  <h3><UserOutlined />&nbsp;{userInfo && userInfo.name}</h3>
                </div>
                <div>
                  <p>purchases</p>
                  <h3><DollarOutlined />&nbsp;1212</h3>
                </div>
                <div>
                  <p>flat</p>
                  <h3><HomeOutlined /> &nbsp; {userInfo && userInfo.flat}</h3>
                </div>
                <div>
                  <p>phone</p>
                  <h3><PhoneOutlined /> &nbsp;123456789</h3>
                </div>
                <div>
                  <p>Notes</p>
                  <h3><InfoCircleOutlined /> &nbsp;
                    don't like tomato sauce likes extra oregano</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
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