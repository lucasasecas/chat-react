import React from 'react';
import ChatRoom from './ChatRoom.jsx';
import RoomsContainer from './RoomsContainer.jsx';
import RoomService from '../Services/RoomService';
import ChatWebSocketService from '../Services/ChatWebsocketService'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.roomService = new RoomService();
        this.state = {
            messages: [],
            rooms: [],
            currentChatRoom: {}
        };

        this.changeRoom = this.changeRoom.bind(this);
        this.searchRoom = this.searchRoom.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.publishMessage = this.publishMessage.bind(this);
        this.connectUser = this.connectUser.bind(this);
        this.chatSocketService = new ChatWebSocketService({
            "receiveMessage": this.addMessage,
            "connectUser": this.connectUser
        });
    }

    changeRoom(roomId) {
        this.chatSocketService.joinToRoom(roomId, savedRoom =>{
            this.setState(prevstate => {
                return {
                    currentChatRoom: {
                        id: savedRoom.id,
                        title: savedRoom.name,
                        avatarUrl: savedRoom.avatarUrl
                    },
                    messages: savedRoom.messages
                };
            });
        });
    }

    connectUser(user) {
        this.setState({user: user});
    }

    publishMessage(message) {
        this.chatSocketService.sendMessage(message, this.state.currentChatRoom.id);        
    }

    addMessage(message) {
        if (message.roomId == this.state.currentChatRoom.id) {    
            this.setState(prev => {
                var newMessagesList = prev.messages;
                newMessagesList.push(message);
                return { messages: newMessagesList }
            });
        }
    }

    searchRoom(event) {
        this.roomService.getAll(rooms => {
            this.setState({rooms: rooms});
        });
    }

    render() {
        return (
            <div className="container clearfix">
                <RoomsContainer rooms={this.state.rooms} changeRoom={this.changeRoom}/>
                <ChatRoom handleSubmit={this.publishMessage} messages={this.state.messages} user={this.state.user} chatConfig={this.state.currentChatRoom}/>
            </div>
        )
    }
};

export default App;