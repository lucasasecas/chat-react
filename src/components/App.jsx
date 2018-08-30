import React from 'react';
import ChatRoom from './ChatRoom.jsx';
import RoomsContainer from './RoomsContainer.jsx';
import RoomService from '../Services/RoomService';

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

    addMessage(message) {
        this.roomService.addMessage(this.state.currentChatRoom.id, message, message => {
            this.setState(prev => {
                var newMessagesList = prev.messages;
                newMessagesList.push(message);
                return {messages: newMessagesList}
            });
        });
    }

    render() {
        return (
            <div className="container clearfix">
                <RoomsContainer userClickHandler={this.changeRoom}/>
                <ChatRoom handleSubmit={this.addMessage} messages={this.state.messages} chatConfig={this.state.currentChatRoom}/>
            </div>
        )
    }
};

export default App;