import React from 'react';
import ChatList from './ChatList.jsx';
import ChatForm from './ChatForm.jsx';
import ChatHeader from './ChatHeader.jsx';

const ChatRoom = (props) => {
    if (props.chatConfig != null)
        return (<div className="chat">

        <ChatHeader title={props.chatConfig.title} avatar={props.chatConfig.avatarUrl} closeRoomHandler={props.closeRoomHandler} countMessages={props.messages.length}/>
        <ChatList messages={props.messages} user={props.user}/>
        <ChatForm  handleSubmit={props.handleSubmit}/>
        </div>);
    else
        return (<div></div>);
    }
export default ChatRoom;