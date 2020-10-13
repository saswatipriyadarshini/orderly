import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import {getUpcomingOrders} from "../../../actions/GetOrdersAction";
import {getCustomerAction} from "../../../actions/CustomerAction";

class Upcoming extends Component{
  constructor(props) {
    super(props);
    this.state = {
      headers: ['Name', 'no', 'type', 'time'],
      details: [
        ['Eva', 1, 'Veggie loaded(M)', '5:30pm'],
        ['Baba', 2, 'Veggie loaded', '6:00pm'],
      ],
      item: {},
    }
  }

  componentDidMount() {
    this.props.getOrders();
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if(nextProps.upcomingOrders !== prevState.item){
      return {item: nextProps.upcomingOrders}
    }
    else return null;
  }

  render(){
    const {headers, details, item} = this.state;
    console.log(item);
    return (
      <Fragment>
        <h3>Upcoming orders</h3>
        <div>
          <table className="table table-striped table-dark table-bordered">
            <thead className="thead-dark">
            <tr>
              {
                headers && headers.map((item, index) => {
                  return <th key={'items_'+index} scope='col'>{item}</th>
                })
              }
            </tr>
            </thead>
            <tbody>
            {
              details && details.map((detail, index) => {
                return(
                    <tr key={'key_'+index}>
                      {
                        detail && detail.map((item, key) => {
                          return <td key={'key_'+key}>{item}</td>
                        })
                      }
                    </tr>
                );
              })
            }
            </tbody>
          </table>

        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  upcomingOrders: state.upcomingOrders
});

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => {
      dispatch(getUpcomingOrders());
      // dispatch(getCustomerAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);