import React, {Component, Fragment} from 'react';
import Card from "../../../components/card";

export default class MiddleComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      orders: 2,
      revenue: 'Rs.1290',
      notPaid: 3,
    }
  }

  render(){
    const {orders, revenue, notPaid} = this.state;
    return(
      <Fragment>
       <div>
         <Fragment>
           <div className='orderly-total-orders__container row'>
             <div className='col-sm'><Card header='Total Orders' number={orders} /></div>
             <div className='col-sm'><Card header='Total Revenue' number={revenue} /></div>
             <div className='col-sm'><Card header='Not Paid' number={notPaid} /></div>
           </div>
         </Fragment>
       </div>
      </Fragment>
    );
  }
}