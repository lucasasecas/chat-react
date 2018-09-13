import React from 'react';
import ChatList from './ChatList.jsx';
import ChatForm from './ChatForm.jsx';
import ChatHeader from './ChatHeader.jsx';

const ChatRoom = (props) => (
        <div className="chat">
            <ChatHeader title={props.chatConfig.title} avatar={props.chatConfig.avatarUrl} countMessages={props.messages.length}/>
            <ChatList messages={props.messages}/>
            <ChatForm  handleSubmit={props.handleSubmit}/>
        </div>);

export default ChatRoom;