import React from 'react';
import Message from './Message.jsx';

const ChatList = (props) => (
    <div className="chat-history">
        <ul>
            {
                props.messages.map(message => <Message key={message.id.toString()} {...message} isMe={ message.userName == 'Olia' } />) 
            }
            <li ></li>
            <li tabIndex={1}> 
                <i className="fa fa-circle online"></i>
                <i className="fa fa-circle online" style={{"color": "#AED2A6"}}></i>
                <i className="fa fa-circle online" style={{"color":"#DAE9DA"}}></i>
            </li>
        </ul>
    </div>);

    export default ChatList;