import React from 'react';

const ChatHeader = (props) => (
<div className="chat-header clearfix">
    <img src={props.avatarUrl} alt="avatar" />

    <div className="chat-about">
        <div className="chat-with">Chat with {props.title}</div>
        <div className="chat-num-messages">already {props.totalMessages} messages</div>
    </div>
<i className="fa fa-star"></i>
</div>);

export default ChatHeader;