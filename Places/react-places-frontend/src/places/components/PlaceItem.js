import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './PlaceItem.css';

// the layout, creating one layout to serve for each place;
const PlaceItem = (props) => {
  // don't forget to return
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>View In Map</Button>
          <Button to={`/places/${props.id}`}>Edit</Button>
          {/* will generate the EDIT route later */}
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;

/*

View In Map will be overlay (will create later)
Edit and Delete will only be visible if user (will create later)

Replaced: 
<button>View In Map</button>
<button>Edit</button>
<button>Delete</button>

*/
