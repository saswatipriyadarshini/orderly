import React, {Component, Fragment} from 'react';
import "./index.css";
import Upcoming from "./upcoming";
import MiddleComponent from "./middle";
import Total from "./total";
import UserList from "../user/UserList";

export default class Orders extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Fragment>
        <div className='orderly -main__container'>
          {/*<Upcoming />*/}
          {/*<MiddleComponent/>*/}
          {/*<Total/>*/}
          <UserList/>
        </div>
      </Fragment>
    )
  }
}