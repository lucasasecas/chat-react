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
            currentChatRoom: {
                title: "Vincent Porter",
                avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
            }
        };

        this.changeRoom = this.changeRoom.bind(this);
    }

    changeRoom(room) {
        this.roomService.getMessages(room.id, messages => {
            console.log(messages);
            this.setState({messages: messages});
        });

        this.setState(prevstate => {
            return {
                currentChatRoom: {
                    title: room.name,
                    avatarUrl: room.avatarUrl
                }
            };
        });
    }

    render() {
        return (
            <div className="container clearfix">
                <RoomsContainer userClickHandler={this.changeRoom}/>
                <ChatRoom messages={this.state.messages} chatConfig={this.state.currentChatRoom}/>
            </div>
        )
    }
};

export default App;