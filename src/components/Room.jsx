import React from 'react';

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            status: props.status,
            clickHandler: props.clickHandler,
            avatarUrl: props.avatarUrl,
            id: props.userId
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        this.state.clickHandler(this.state.id);
    }

    render(){
        return (
    <li className="clearfix" onClick={this.clickHandler}>
        <img src={this.state.avatarUrl} alt="avatar" />
        <div className="about">
            <div className="name">{this.state.name}</div>
            <div className="status">
            <i className={"fa fa-circle " + this.state.status}></i> {this.state.status}
            </div>
        </div>
    </li>);
    }
} ;

export default Room;

