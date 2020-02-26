import React from 'react';

import './SideDrawer.css';

const SideDrawer = (props) => {
  return <aside className="side-drawer">{props.children}</aside>;
};

export default SideDrawer;

/*
Inside of SideDrawer, need a couple of things: add animation and then render in a different part of the 
page other than where it's rendered. 

- NOTE: need to review <aside>.
*/
