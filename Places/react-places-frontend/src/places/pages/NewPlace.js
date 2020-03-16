import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';

import './NewPlace.css';
import {VALIDATOR_REQUIRE} from '../../shared/util/validators';

const NewPlace = () => {

  // create the function that is executed inside Input.js (the onInput)
  const titleInputHandler = (id, value, isValid) => {
    /* this function is called anytime the id, value or isValid changes
    // ISSUE/PROBLEM: this function is triggered anytime onInput is triggered/called... Well,
    - inside this function, if anything changes the state of the new place component, it re-renders automatically
    and a 'NEW' titleInputHandler function will be created due to this function being inside of another function
      - whenver the component re-runs, the function is recreated even if it's the same logic as before, still new function object 
      - this onInput will cause the useEffect-onInput to run again CREATING A INFINITE L00P. 
      - to prevent this, use the hook 

   */
  };

  return (
    <form className="place-form">
      {/* FUTURE GOAL: <Input type = 'text' label = "Title" validators= {[]} onChange ={ } */}
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput = {titleInputHandler}
      />
    </form>
  );
};

export default NewPlace;

/*
IMPORTANT SECTION: this will be an example of creating and adding something new to the database. It will 
wire up to the back end later on...
- Since I will be setting this up to send off to a server, I need to build a form.

- will provide input validation
- onChange: triggers a function for every key stroke and will also assist in validation

- The actual form data is coming from the Input component along with the props I'm passing down.



  const titleInputHandler = (id, value, isValid) ==> these are all destructured in Input.js

    // create the function that is executed inside Input.js (the onInput)
  const titleInputHandler = (id, value, isValid) => {
    /* this function is called anytime the id, value or isValid changes
    // ISSUE/PROBLEM: this function is triggered anytime onInput is triggered/called... Well,
    - inside this function, if anything changes the state of the new place component, it re-renders automatically
    and a 'NEW' titleInputHandler function will be created due to this function being inside of another function
      - whenver the component re-runs, the function is recreated even if it's the same logic as before, still new function object 
      - this onInput will cause the useEffect-onInput to run again CREATING A INFINITE L00P. 
      - to prevent this, use the hook 

   */
*/
