import React from 'react';
import RoomService from '../Services/RoomService.js';
import RoomsList from './RoomsList.jsx';
import RoomSearchForm from './RoomSearchForm.jsx';

class RoomsContainer extends React.Component{
    constructor(props) {
        super(props);
        this.roomService = new RoomService();
        this.state = {
            rooms: []
        };
        this.onSearchBoxChangeHandler = this.onSearchBoxChangeHandler.bind(this);
        this.changeRoom = this.props.changeRoom;
        this.roomService.getAll({}, rooms => {
            this.setState({rooms: rooms});
        });
    }

    onSearchBoxChangeHandler(event) {
        this.roomService.getAll({name: event.target.value}, rooms => {
            this.setState({rooms: rooms});
        });
    }

    render() {
        return (<div className="people-list" id="people-list">
        <RoomSearchForm onChangeHandler={this.onSearchBoxChangeHandler}/>
        <RoomsList clickHandler={this.props.changeRoom} rooms={this.state.rooms}/>
    </div>); 
    }

} 

export default RoomsContainer;