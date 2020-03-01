// responsible for showing all the places of a user
import React from 'react';
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
  return <PlaceList items={DUMMY_DATA_PLACES} />;
  // this is why items is referred to as each component that is passed within/passed down;
};

export default UserPlaces;

/*

https://cdn.britannica.com/s:800x450,c:crop/31/204431-138-B5008F47/time-lapse-video-San-Francisco.jpg

*/
