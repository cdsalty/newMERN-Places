import React, {useRef, useEffect} from 'react';

import './Map.css';

const Map = (props) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: props.center,
      zoom: props.zoom
    });
    // to create a MARKER ON THE MAP: takes a position and an object to equal to map
    new window.google.maps.Marker({position: props.center, map: map});
  }, [props.center, props.zoom]);

  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
  );
};

export default Map;

/*
{useRef} used to create references to get a pointer at real dom node and-or we can also create variables
that survive rerenders and don't lose their value. 

useEffect: very important and allows you to register logic when certain inputs change
*/
