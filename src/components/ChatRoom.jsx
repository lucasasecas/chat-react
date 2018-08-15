import React from 'react';
import ChatList from './ChatList.jsx';
import ChatForm from './ChatForm.jsx';

class ChatRoom extends React.Component{
    constructor(props) {
        super(props);
        this.addNewMessage = this.addNewMessage.bind(this);
        this.state = {
            messages: props.messages,
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
                message: message,
                userName: 'Olia',
                time: Date.Now
            });
            return {messages: newMessages}

        })
    }

    render() {
        return (
            <div className="chat">
                <div className="chat-header clearfix">
                    <img src={this.state.chatConfig.avatarUrl} alt="avatar" />
                    
                    <div className="chat-about">
                    <div className="chat-with">{this.state.chatConfig.title}</div>
                    <div className="chat-num-messages">already 1 902 messages</div>
                    </div>
                    <i className="fa fa-star"></i>
                </div>
                <ChatList messages={this.state.messages} />
                <ChatForm handleSubmit={this.addNewMessage} />
            </div>);
    }
}

export default ChatRoom;