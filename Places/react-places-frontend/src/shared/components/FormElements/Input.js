import React, {useReducer} from 'react';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: true
      };
    default:
      return state;
  }
};

const Input = (props) => {
  //useReducer always provides the current state and a dispatch function: [inputState(currentState), dispatch
  //(how I will be able to dispatch actions to the reducer function which will run through the function and return a new a new state which will rerender and show a new state )]
  const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false});
  // I will bind the value of inputState to the input vlaue where it will be called on dispatch

  // onChange Trigger (also referred to as 'changeHandler')
  const handleChange = (event) => {
    dispatch({type: 'CHANGE', val: event.target.value}); // pass an object, the action object which has a type and val property
    // store the value
    // validate it
  };

  // the goal is to render the 'element' in my return statment (an input element or a textarea/text-box)
  const element =
    // if props.element hold a value of 'input', then render an <input/>, else render a text area
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={inputState.value} // from the dispatch called
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={handleChange}
        value={inputState.value}
      />
    );

  return (
    // the original inputState.isValid is false until user types
    <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;

/*
rows={props.rows || 3}     ----> 3 is default if not stated...

- Anytime there are two very similar states that need to be managed, instead of 'useState', we are 
  using 'useReducer'

  - UseReducer: pass it at least one arguement and it receives an action (that I will dispatch) and the 
    current state. Then update the current state based on the action received, return the new state
    and then useReducer will take the new state and give it back in the component and rerender everything. 
*/
