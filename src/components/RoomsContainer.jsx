import React from 'react';
import RoomsList from './RoomsList.jsx';

class RoomsContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userClickHandler: props.userClickHandler
        };
        this.userClickHandler = this.userClickHandler.bind(this);
    }

    userClickHandler(user) {
        this.state.userClickHandler(user);
    }

    render() {
        return( <div className="people-list" id="people-list">
        {/* <div className="search">
            <input type="text" placeholder="search" />
            <i className="fa fa-search"></i>
        </div> */}
        <RoomsList clickHandler={this.state.userClickHandler} />
    </div>);
    }
}

export default RoomsContainer;