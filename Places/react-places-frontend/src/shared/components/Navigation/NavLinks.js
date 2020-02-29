import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

/*
WHERE WE CONTROL WHAT LINKS ARE LISTED AND WHERE THEY WILL DIRECT TO: (THE NAVIGATION CONTROL)

- My Places will show the places that particular user has been. Later, it will only be able to be accessed
  if the user is logged in. The same with Add Place...
*/

/*
What is the difference between <Link> and <NavLink>?
https://stackoverflow.com/questions/47338077/react-router-v4-navlink-vs-link-benefits/47338222#47338222
  - the ONLY difference is that NavLink is a special version of "Link" 
    that will add styling attributes to the rendered element when it matches the current URL
  - When you use <Link> there isn't any active class on selected element. In contrast, with <NavLink> 
    the selected element is highlighted because this element is added an active class.
  - The activeStyle properties mean when we click on the Link, it should be highlighted with different
    style so that we can differentiate which link is currently active.
      - <NavLink to="/" exact activeStyle±{{color: 'red'}}>Home</NavLink>

*/
