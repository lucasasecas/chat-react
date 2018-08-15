import React from 'react';
import Message from './Message.jsx';

const ChatList = (props) => (
    <div className="chat-history">
        <ul>
            {
                props.messages.map(message => <Message {...message} isMe={ message.userName == 'Olia' } />) 
            }
            
            <li> 
                <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                <span className="message-data-time">10:31 AM, Today</span>
                </div>
                <i className="fa fa-circle online"></i>
                <i className="fa fa-circle online" style={{"color": "#AED2A6"}}></i>
                <i className="fa fa-circle online" style={{"color":"#DAE9DA"}}></i>
            </li>
        </ul>
    </div>);

    export default ChatList;