import React from 'react';
import RoomsList from './RoomsList.jsx';

const RoomsContainer = (props) => ( <div className="people-list" id="people-list">
        {/* <div className="search">
            <input type="text" placeholder="search" />
            <i className="fa fa-search"></i>
        </div> */}
        <RoomsList clickHandler={props.userClickHandler} />
    </div>);

export default RoomsContainer;