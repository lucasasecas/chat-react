import React from 'react';

class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            addMessage: props.handleSubmit,
            message: ''
        };
        
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.addMessage(this.state.message);
        this.setState({message: ''});
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    render(){
        return (
            <form className="chat-message clearfix" onSubmit={this.handleSubmit}>
                <textarea 
                    value={this.state.message} 
                    onChange={this.handleChange}
                    name="message-to-send" 
                    id="message-to-send" 
                    placeholder ="Type your message" rows="3"></textarea>
                <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i className="fa fa-file-image-o"></i>
                <button>Send</button>
            </form>);
    }
}

export default ChatForm;