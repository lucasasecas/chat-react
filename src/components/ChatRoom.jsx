import React from 'react';
import ChatList from './ChatList.jsx';
import ChatForm from './ChatForm.jsx';
import ChatHeader from './ChatHeader.jsx';

class ChatRoom extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat">
                <ChatHeader title={this.props.chatConfig.title} avatar={this.props.chatConfig.avatarUrl} countMessages={this.props.messages.length}/>
                <ChatList user={this.props.user} messages={this.props.messages}/>
                <ChatForm  handleSubmit={this.props.handleSubmit}/>
            </div>);
    }
}

export default ChatRoom;