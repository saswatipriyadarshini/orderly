import React, {Component, Fragment} from 'react';
import './index.css';

export default class Total extends Component{
  constructor(props) {
    super(props);
    this.state = {
      headers: ['Name', 'no', 'type', 'time'],
      details: [
        ['Eva', 1, 'Veggie loaded(M)', '5:30pm'],
        ['Babli', 4, 'Cheese filled veggie overloaded(S)', '8:00pm'],
        ['Evelyn', 3, 'Cheese filled veggie overloaded(M)', '12:00pm'],
        ['Baba', 2, 'Veggie loaded', '6:00pm'],
      ],
    }
  }

  render(){
    const {headers, details} = this.state;
    return(
      <Fragment>
        <h3>Total Orders</h3>
        <div>
          <table className="table table-bordered table-striped">
            <thead>
            <tr>
              {
                headers && headers.map((item, index) => {
                  return (
                    <th key={'items_'+index} scope='col'>{item}</th>
                  );
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
    )
  }
}