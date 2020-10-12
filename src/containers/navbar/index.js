import React, {Component, Fragment} from 'react';
import FormGroup from "../../components/formGroup";
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import { postNewOrderAction } from "../../actions/postOrdersAction";

const { Option } = Select;

class NavBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      orderTypes: ['Veggie loaded(M)', 'Veggie loaded(S)', 'Cheese filled veggie loaded(M)', 'Cheese filled veggie loaded(S)'],
      userData: {
        name: '',
        // order: '',
        // phone: '',
        flat: '',
        phase: '',
        alias: '',
        // allergies: '',
      }
    }
  }

  showModalHandler(){
    this.setState({
      showModal: true,
    })
  }

  onChangeHandler(e){
    const newUserData = Object.assign({}, this.state.userData);
    const fields = e.target.id;
    if (fields) {
      newUserData[fields] = e.target.value;
    }
    this.setState({
      userData: newUserData
    }, () => {
      // console.log('new user data', this.state.userData);
    })
  }

  saveOrderHandler(){
    this.props.saveOrder(this.state.userData);
  }

  render(){
    const {orderTypes, userData} = this.state;
    console.log('userdata', userData);
    return(
      <Fragment>
        <div>
          <nav className="navbar fixed-top navbar-light bg-light">
            {/*<ul className='navbar-nav mr-auto'>*/}
              <a className="navbar-brand" href="#">Orderly</a>
            {/*</ul>*/}
            <ul className="navbar-nav ml-auto navbar-right row" style={{flexDirection: 'row', alignItems: 'center'}}>

              <li className="nav-item dropdown input-group col-8">

                <div className='input-group-prepend'>

                  <select className="custom-select" id="inputGroupSelect01" style={{width: 'fit-content'}}>
                    <option selected>All</option>
                    <option value="1">name</option>
                    <option value="2">flat</option>
                    <option value="3">phase</option>
                    <option value="4">alias</option>
                  </select>

                  <input style={{borderRadius: '0 0.25rem 0.25rem 0'}} type="text" className="form-control" aria-label="Text input with dropdown button"/>
                  <div className="dropdown-menu" style={{position: 'absolute'}}>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>

              </li>

              <li className='nav-item col-4'>
                <button className="btn btn-sm btn-outline-secondary" type="button"
                  // onClick={this.showModalHandler.bind(this)}
                        data-toggle="modal" data-target="#createOrderModal"
                >Create Order</button>
              </li>
            </ul>
          </nav>
          <div style={{background: 'transparent', height: '60px'}}></div>
        </div>
        <div className="modal fade" id="createOrderModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Order Details</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <FormGroup
                    label={'Name'}
                    onChange={this.onChangeHandler.bind(this)}
                    id='name'
                    value={userData.name}
                  />

                  <div className="form-group" style={{display: 'flex', flexDirection: 'column'}}>
                    <label>Order</label>
                    {/*<select*/}
                    {/*  className="custom-select"*/}
                    {/*  id="order" onChange={this.onChangeHandler.bind(this)}*/}
                    {/*  value={userData.order}*/}
                    {/*>*/}
                    {/*  {*/}
                    {/*    orderTypes && orderTypes.map((item, index) => {*/}
                    {/*      return (*/}
                    {/*        <option key={'key_'+index}>{item}</option>*/}
                    {/*      )*/}
                    {/*    })*/}
                    {/*  }*/}
                    {/*</select>*/}
                    <Select
                      defaultValue="lucy"
                      style={{ width: '100%'}}
                      size={"large"}
                      onChange={this.onChangeHandler.bind(this)}
                    >
                        {
                          orderTypes && orderTypes.map((item, index) => {
                            return (
                              <Option key={'key_'+index} value={item}>{item}</Option>
                            )
                          })
                        }
                    </Select>
                  </div>

                  <FormGroup
                    label='Phone Number'
                    onChange={this.onChangeHandler.bind(this)}
                    id='phone'
                    value={userData.phone}
                  />

                  <FormGroup
                    label='Flat Number'
                    onChange={this.onChangeHandler.bind(this)}
                    id='flat'
                    value={userData.flat}
                  />

                  <FormGroup
                    label='Phase'
                    onChange={this.onChangeHandler.bind(this)}
                    id='phase'
                    value={userData.phase}
                  />

                  <FormGroup
                    label='Alias'
                    onChange={this.onChangeHandler.bind(this)}
                    id='alias'
                    value={userData.alias}
                  />

                  <FormGroup
                    label='Allergies'
                    onChange={this.onChangeHandler.bind(this)}
                    id='allergies'
                    value={userData.allergies}
                  />

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.saveOrderHandler.bind(this)}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder: (data) => {
      dispatch(postNewOrderAction(data))
    }
  };
};

export default connect(null, mapDispatchToProps)(NavBar);

