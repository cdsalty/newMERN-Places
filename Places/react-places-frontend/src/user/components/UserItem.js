import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        {/* Link will reference a specific user's places*/}
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;

/*
Note: how to display something is plural or not via a ternary expression
  - {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}

Link: has react-router-dom step in and block the link from actually rendering. It will go back and 
render the router addresses specified. under the hood, it wraps an anchor tag but blocks navigation logic
  - the link should reference the id of the user in order to load all the places of that user. it will dynamic.
  - <Link to={`/${props.id}/places`}> when first used goes to localhost:3000/u1/places but doesn't reflect it in the url. 
    - the actual url still shows localhost:3000
  */
