import React from 'react';
import {Link} from 'react-router-dom'; // in order for the header to have links

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>

      <h1 className="main-navigation__title">
        <Link to="/">Mapolicity</Link>
      </h1>

      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
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
*/
