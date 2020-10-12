import React from 'react';

function Card(props) {
  return(
    <div className="card">
      <h5 className="card-header">{props.header}</h5>
      <div className="card-body">
        <h5 className="card-title">{props.number}</h5>
        {/*<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>*/}
        {/*<a href="#" className="btn btn-primary">Details</a>*/}
      </div>
    </div>
  )
}

export default Card;