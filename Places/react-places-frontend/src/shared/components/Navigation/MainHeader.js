import React from 'react';

import './MainHeader.css';

const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;

/*
- props.children will always refer to what's passed between the opening and closing tabs of a component
  - The <MainHeader> component will be used inside MainNavigation. 
  - in MainNavigation, anything called between <MainHeader>this Will be Referenced 
    inside mainNavigation</MainHeader> and will refer to what's inside props.children. 
    - INLCUDES: 
      <button className="main-navigation__menu-btn">
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



*/
