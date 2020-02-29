import React from 'react';
import ReactDOM from 'react-dom'; // to make use of the portal
import {CSSTransition} from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
  // return <aside className="side-drawer">{props.children}</aside>;
  // making reference for using the react portal:
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;

/*
Inside of SideDrawer, need a couple of things: 
  - add animation 
  - render in a different part of the page other than where it's rendered. 

- NOTE: need to review <aside>.

Using Portals,
- concept that allows you to to project/render a react component in a DIFFERENT place than it would normally
  appear. Create a new root which named "drawer-hook"
  - instead of returning it, create a variable to reference too
  - then by using ReactDOM.createPortal(1. what to render or the ref to render, 2. where to mount when this component is used)


      in={props.show} when to show; true or false
      mountOnEnter  - to show
      unmountOnExit - to hide/remove
  */
