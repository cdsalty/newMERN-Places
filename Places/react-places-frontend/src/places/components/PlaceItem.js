import React, {useState} from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import './PlaceItem.css';

// the layout, creating one layout to serve for each place;
const PlaceItem = (props) => {
  // create the state varaible, value and method to update it
  const [showMap, setShowMap] = useState(false);

  // method to show the map
  const openMapHandler = () => setShowMap(true);

  // method to hide the map
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        {/* specifing what will be rendered inside the ModalOverlay for 'props.children */}
        <div className="map-container">
          {/* <h2>This is a map</h2> */}
          <Map center={props.coordinates} zoom={12} />
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              View In Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            {/* will generate the EDIT route later */}
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
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
