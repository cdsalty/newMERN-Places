import React, {useState} from 'react';
import {Link} from 'react-router-dom'; // in order for the header to have links

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

// Main Navigation will be responsible for the hamburger menu, the h1 title, the links via <nav>
const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    // <React.Fragment> (instead of using React.Fragment to hold multiple components, just use wrap with <>)
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button onClick={openDrawerHandler} className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">
          <Link to="/">Mapolicity</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

/*
- inside of MainHeader, is represented by whatever is inside props.children
- the three <span> tags will make up the hamburger menu

- In order to make the Header CLICKABLE, must import { Link } from 'react-router-dom';

- <Link to = '/'> will direct back to the home page which is what the intended purpose is if you click on 
  the title. DON'T YOU ANCHOR tags
  - make it habit: <Link to = '/'>DEFINE YOUrplaces</Link>

  by surrounding <> </> with my elements, I didn't have to use react.fragment

  SideDrawer is passing props.children

  Introducing State with Hooks,
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [variable to reference, function that will call it] = useState(setting The Inital Value)
  - using the ternary operator, I control whether the dropdown is showing or isn't by setting the intial 
    value to false.
     - when you click on the button, open the drawer:
    assign an onClick and assign the function to navigate state's value

If drawerIsOpen is true, then render this else... it will move on...
*/
