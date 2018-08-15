import React from 'react';

class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            addMessage: props.handleSubmit
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.addMessage("new Message");
    }

    render(){
        return (
            <form className="chat-message clearfix" onSubmit={this.handleSubmit}>
                <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i className="fa fa-file-image-o"></i>
                <button>Send</button>
            </form>);
    }
}

export default ChatForm;