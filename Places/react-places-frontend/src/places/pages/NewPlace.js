import React from 'react';

import Input from '../../shared/components/FormElements/Input';

import './NewPlace.css';
import {VALIDATOR_REQUIRE} from '../../shared/util/validators';

const NewPlace = () => {
  return (
    <form className="place-form">
      {/* FUTURE GOAL: <Input type = 'text' label = "Title" validators= {[]} onChange ={ } */}
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
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
*/
