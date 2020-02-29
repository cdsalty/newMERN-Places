import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = (props) => {
  // Goal: to output a list of places unless the user doesn't have any

  // If user doesn't have any places, render a Card
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>There are no places found. Maybe now is the time to create one??</h2>
          <button>Share a Place Now!</button>
        </Card>
      </div>
    );
  }
  // Else, if the user has place(s), list the places(PlaceItem)
  return (
    <ul className="place-list">
      {/* imageUrl, etc can be any but remember to setup the correct structure when you create and fetch thd date */}
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creatorId}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
