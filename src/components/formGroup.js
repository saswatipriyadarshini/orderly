import React from 'react';

function FormGroup(props) {
  return(
    <div>
      <div className="form-group">
        <label>{props.label}</label>
        <input
          type={props.type}
          className="form-control"
          onChange={props.onChange}
          id={props.id}
          value={props.value}
        />
      </div>
    </div>
  );
}

export default FormGroup;