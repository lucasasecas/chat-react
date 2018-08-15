import React from 'react';
import ChatRoom from './ChatRoom.jsx';
import UsersContainer from './UsersContainer.jsx';

let messages = [
    {
        time: Date.now() - 3 * 3600000,
        userName: "Olia",
        message: "Hi Vincent, how are you? How is the project coming along?"
    },
    {
        time: Date.now() - 2 * 3600000,
        userName: "Vicent",
        message: "Are we meeting today? Project has been already finished and I have results to show you."
    },
    {
        time: Date.now() - 3 * 360000,
        userName: "Olia",
        message: "Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?"
    },
    {
        time: Date.now(),
        userName: "Vicent",
        message: "Actually everything was fine. I'm very excited to show this to our team."
    }
]

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container clearfix">
                <UsersContainer />
                <ChatRoom messages={messages} chatConfig={
                    {title: "Chat with Vincent Porter", avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"}}/>
            </div>     
        )
    }
};

export default App;