import React from 'react';
import './UserItem.css';

const UserItem = (props) => {
  return (
    <ul className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.image} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>to finish up</h3>
        </div>
      </div>
    </ul>
  );
};

export default UserItem;
