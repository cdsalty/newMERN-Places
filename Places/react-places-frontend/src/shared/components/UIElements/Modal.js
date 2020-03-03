import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';

import BackDrop from './Backdrop';
import './Modal.css';
// will consist of two components that will work together/only Modal will be export.
// first: ModalOverlay that will be used by Modal

const MondalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      {/* if onSubmit is set, call props onSubmit otherwise, get the event and prevent it from reloading?? */}
      <form onSubmit={props.OnSubmit ? props.onSubmit : (event) => event.preventDefault}>
        <div className={`modal__content ${props.contentClass}`}>
          {/* what will be inside the opening and closing tag of the Modal. */}
          {props.children}
        </div>

        <footer className={`modal__footer ${props.footerClass}`}>
          {/* this is being made seperately for stying purposes; specifically the Buttons */}
          {props.footer}
        </footer>
      </form>
    </div>
  );
  // Create the Portal inside it's own Component ** side note
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  // check for props.show; if true, return BackDrop(included onClick to cancel and close it.)
  return (
    <React.Fragment>
      {props.show && <BackDrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={2000}
        classNames="modal"
      >
        {/* how to pass the props from Modal to ModalOverlay {...props} */}
        <MondalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;

/*
1. import ReactDOM from 'react-dom' to make use of creating a portal
2. create a Portal for the overlay 
  - ReactDOM.createPortal('what to render...' ,document.getElementById('modal-hook))
  - Add the portal the index

- `modal ${props.className}` by doing this, this will allow the component to be reusuable to able to add
   new classes; just extra flexibility;

- the reason for having the footer inside the form is because we need the buttons to still connect to the form onSubmit

- since the Modal needs a background and animation, it's a seperate component
  the modal is opened and closed. 
  - will need <React.Fragment> or a blank <> for sibling/top level elements
    - import BackDrop 

    - Finally, we take the Modal component and start working on the button map functionality inside <PlaceItem />
*/
