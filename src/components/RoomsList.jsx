import React from 'react';

import Room from './Room.jsx';

const RoomsList = (props) => (
    <ul className="list">
        {props.rooms.map(room => <Room key={room.id.toString()} clickHandler={props.clickHandler} {...room} />)}
    </ul>
);
   
export default RoomsList;
