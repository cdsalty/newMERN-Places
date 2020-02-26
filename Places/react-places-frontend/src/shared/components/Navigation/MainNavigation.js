import React from 'react';
import {Link} from 'react-router-dom'; // in order for the header to have links

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';

// Main Navigation will be responsible for the hamburger menu, the h1 title, the links via <nav>
const MainNavigation = (props) => {
  return (
    // <React.Fragment>
    <>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">
          <Link to="/">Mapolicity</Link>
        </h1>

        {/* the nav class below is set to a display of none to get ride of side links */}
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

/*
- inside MainHeader, represents whatever is inside props.children
- the three <span> tags will make up the hamburger menu

- In order to make the Header CLICKABLE, must import { Link } from 'react-router-dom';

- <Link to = '/'> will direct back to the home page which is what the intended purpose is if you click on 
  the title. DON'T YOU ANCHOR tags
  - make it habit: <Link to = '/'>DEFINE YOUrplaces</Link>

  by surrounding <> </> with my elements, I didn't have to use react.fragment
*/
