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
            currentChatRoom: {}
        };

        this.changeRoom = this.changeRoom.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.publishMessage = this.publishMessage.bind(this);
        this.connectUser = this.connectUser.bind(this);
        this.chatSocketService = new ChatWebSocketService({
            "receiveMessage": this.addMessage,
            "connectUser": this.connectUser
        });
    }

    changeRoom(room) {
        this.roomService.getMessages(room.id, messages => {
            console.log(messages);
            this.setState({messages: messages});
        });

        this.setState(prevstate => {
            return {
                currentChatRoom: {
                    id: room.id,
                    title: room.name,
                    avatarUrl: room.avatarUrl
                }
            };
        });
    }

    connectUser(user) {
        this.setState({user: user});
    }

    publishMessage(message){
        this.chatSocketService.sendMessage(message);        
    }

    addMessage(message) {
        console.log(message);
        this.setState(prev => {
            var newMessagesList = prev.messages;
            newMessagesList.push(message);
            return { messages: newMessagesList }
        });
    }

    render() {
        return (
            <div className="container clearfix">
                <RoomsContainer userClickHandler={this.changeRoom}/>
                <ChatRoom handleSubmit={this.publishMessage} messages={this.state.messages} user={this.state.user} chatConfig={this.state.currentChatRoom}/>
            </div>
        )
    }
};

export default App;