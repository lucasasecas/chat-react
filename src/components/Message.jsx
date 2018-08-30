import React from 'react';

let daysOfTheWeek = ['sunday', ]

function parseDate(milliseconds) {
    var date = new Date(milliseconds);
    
    return date.getHours() + ":" + date.getMinutes() + ' ' ;
}

const Message = (props) => (
    props.isMe ? 
    <li className="clearfix">
        <div className="message-data align-right">
            <span className="message-data-time" >{parseDate(props.date)}</span> &nbsp; &nbsp;
            <span className="message-data-name" >{props.AuthorName}</span> <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">
            {props.message}
        </div>
    </li> : 
    <li>
        <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online"></i> {props.userName}</span>
            <span className="message-data-time">{parseDate(props.date)}</span>
        </div>
        <div className="message my-message">
            {props.message}
        </div>
    </li>);

    export default Message;