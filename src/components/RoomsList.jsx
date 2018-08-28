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
        console.log("hola");
        this.clickHandler = this.clickHandler.bind(this);
        this.roomService.getAll(rooms => {
            this.setState({rooms: rooms});
        });
    }

    clickHandler(userId){
        var handler = this.state.clickHandler;
        this.state.users.forEach(user => {
            if (user.userId == userId) {
                handler(user);
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
