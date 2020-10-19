import React from 'react';
import "./index.css";
import Upcoming from "./upcoming";
import MiddleComponent from "./middle";
import Total from "./total";
import UserList from "../user/UserList";

function Orders(props){
    return(
        <div className='orderly-main__container'>
          <Upcoming />
          <MiddleComponent/>
          <Total/>
          {/*<UserList/>*/}
        </div>
    );
}

export default Orders;