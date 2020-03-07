import React from 'react';

import './Input.css';

const Input = (props) => {
  // the element will be in my return statement
  const element =
    // if props.element === input then render <input/> else render a text area
    props.element === 'input' ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;

/*
rows={props.rows || 3}     ----> 3 is default if not stated...
*/
