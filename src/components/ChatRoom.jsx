import React from 'react';
import ChatList from './ChatList.jsx';
import ChatForm from './ChatForm.jsx';
import ChatHeader from './ChatHeader.jsx';

class ChatRoom extends React.Component{
    constructor(props) {
        super(props);
        this.addNewMessage = this.addNewMessage.bind(this);
        this.state = {
            messages: props.messages.messages,
            chatConfig: {
                title: props.chatConfig.title,
                avatarUrl: props.chatConfig.avatarUrl, 
            }
        }
    }
    
    addNewMessage(message) {
        this.setState((prevState) => {
            var newMessages = prevState.messages;
            newMessages.push({
                id: prevState.messages.length,
                message: message,
                userName: 'Olia',
                time: Date.now()
            });
            return {messages: newMessages}
        })
    }
    
    render() {
        return (
            <div className="chat">
                <ChatHeader title={this.props.chatConfig.title} avatarUrl={this.props.chatConfig.avatarUrl} totalMessages={this.props.messages.length} />
                <ChatList messages={this.state.messages} />
                <ChatForm handleSubmit={this.addNewMessage} />
            </div>);
    }
}

export default ChatRoom;