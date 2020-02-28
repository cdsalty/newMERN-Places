import React from 'react';
import ReactDOM from 'react-dom'; // to make use of the portal

import './SideDrawer.css';

const SideDrawer = (props) => {
  // return <aside className="side-drawer">{props.children}</aside>;
  // making reference for using the react portal:
  const content = <aside className="side-drawer">{props.children}</aside>;

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
*/
