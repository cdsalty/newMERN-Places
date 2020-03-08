// responsible for showing all the places of a user
import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_DATA_PLACES = [
  {
    id: 'p1',
    title: 'San Francisco',
    discription:
      'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.',
    imageUrl:
      'https://cdn.britannica.com/s:800x450,c:crop/31/204431-138-B5008F47/time-lapse-video-San-Francisco.jpg',
    address: 'Long Ave & Marine Dr, San Francisco, CA 94129',
    location: {
      lat: 37.8193198,
      lng: -122.4720684
    },
    creator: 'u1' // later this will serve as the id of the user who created it
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    discription: 'One of the most famous sky scrappers in the world!',
    imageUrl:
      'https://s3.amazonaws.com/crowdriff-media/full/b2c44bc8bc8d231f2189ba380e64c5bfa1940a778bd9f5a4dfc617bfc04b79bd.jpg',
    address: '20 W 34th Street, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2' // later this will serve as the id of the user who created it
  }
];

const UserPlaces = () => {
  // return <PlaceList items={DUMMY_DATA_PLACES} />;
  // console.log(useParams()); // ** returns 'userId: "u1"
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_DATA_PLACES.filter((places) => places.creator === userId);

  return <PlaceList items={loadedPlaces} />; // **
};

export default UserPlaces;

/*
** ITEMS is the key... ITEMS is the prop being passed down. 

- to access/render only the specific user's  places:
  1. get the dynamic data in the url from useParams hook
  2. run a filter on the data from the url and only filter/RETURN a new array of that specific's user's places

  - useParams returns an object that has the 'dynamic segments' steup in the route config as properties. 

https://www.blueswell.com/sites/nbsr/files/styles/short_banner_tiny/public/images/area/header/seaside-florida.jpg
https://realestatescorecard.com/sites/default/files/styles/community_review_slideshow/public/Seaside_Florida.jpg?itok=8KjwK2qn



const UserPlaces = () => {
  // return <PlaceList items={DUMMY_DATA_PLACES} />; this will return ALL places, not user specific
  // console.log(useParams()); // ** returns 'userId: "u1"
  const userId = useParams().userId; // useParams will provide the userId to compare to (above)
  
  Review Syntax:
  
  const loadedPlaces = DUMMY_DATA_PLACES.filter((places) => places.creator === userId); // MUST REMEMBER THIS SYNTAX
  
  
  */
