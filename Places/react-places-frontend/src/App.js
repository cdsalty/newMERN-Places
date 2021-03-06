import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main className="this-creates-padding-from-the-NavigationBar">
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

/*
Routing: 
- npm install --save react-router-dom
- do the import: import { BrowserRouter as Router, Route } from 'react-router-dom';

- <Router> Everything inside this element will be able to make use of the router
- <Route> Carries the specific details of the route to take
  - inside Route set the path = '/' for main/home default page; <Route path = '/'>
  - Next, inside the <route> </route>, we put the component to render
    - import Users from './user/pages/Users':
    - Wrap <Users /> inside the <Route>

Route parameters:
path = '/' will default to the main page but also, anytime a user goes to /oknfodna, this will also submit
exact (or exact = {true}): this will set an exact path so only '/' will render home and mnokdnoad will not. 
  - in case the user goes anywhere else as above, we implement Redirect
    -> <Redirect to="/" /> will redirect the user back to the '/' page

_______------------________--------------_______------------________-------------_______------------________

Next: Inside the places folder, under pages create 'NewPlace.js'
- Added Switch: 
  - anytime it evaulates a reading/matching url, it will match and NOT continue to go through the other routes.
      - react routes work top down and this will stop that from happening

_______------------________--------------_______------------________-------------_______------------________


The main goal of <Users /> is to render a list of users along with how may places they've been too.

_______------------________--------------_______------------________-------------_______------------________

- make sure to place MainNavigation above the pages which is right above the Switch statement


_______------------________--------------_______------------________-------------_______------------________

UserPlaces' goal is to show a list of the all the places shared for a specific user...
- remember to use ' : ' along with the identifier to make a url dynamic
  -> path="/:userId/places"
_______------------________--------------_______------------________-------------_______------------________





_______------------________--------------_______------------________-------------_______------------________





_______------------________--------------_______------------________-------------_______------------________






_______------------________--------------_______------------________-------------_______------------________
*/
