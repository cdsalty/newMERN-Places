import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';

const UsersList = (props) => {
  // if no users are in the system, display a title saying "No users found" else render a list of users and their details
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        // return a single user item for all users with their information details
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;

/*

The goal being to render a list of the user's along with their UserItem.

Started by created a basic layout. Added props to the UsersList because I know I will be passing props down 
from the parent to return all the details I need.

The goal being to render a list of the user's along with their UserItem
- either output a message of no user found and if there is atleast one user, display that 'UserItem'

- by creating the itemsw varaible, it will need to be passed as prop
*/
