import React from 'react';
import RoomService from '../Services/RoomService.js';
import Room from './Room.jsx';

class RoomsList extends React.Component {
    constructor(props) {
        super(props);
        this.roomService = new RoomService();
        this.state = {
            rooms: [],
            clickHandler: props.clickHandler
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.roomService.getAll(rooms => {
            this.setState({rooms: rooms});
        });
    }

    clickHandler(roomId){
        this.state.rooms.forEach(room => {
            if (room.id == roomId) {
                this.state.clickHandler(room);
                return;
            }                
        });
    }

    render() {
        return (
            <ul className="list">
                {this.state.rooms.map(room => <Room key={room.id.toString()} clickHandler={this.clickHandler} {...room} />)}
            </ul>
        );
    }
}

export default RoomsList;
