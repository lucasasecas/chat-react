import React from 'react';
import ChatRoom from './ChatRoom.jsx';
import RoomsContainer from './RoomsContainer.jsx';

// let messages = [
//     {
//         userId: 1,
//         messages: [
//             {
//                 id: 1,
//                 time: Date.now() - 3 * 3600000,
//                 userName: "Olia",
//                 message: "Hi Vincent, how are you? How is the project coming along?"
//             },
//             {
//                 id: 2,
//                 time: Date.now() - 2 * 3600000,
//                 userName: "Vicent",
//                 message: "Are we meeting today? Project has been already finished and I have results to show you."
//             },
//             {
//                 id: 3,
//                 time: Date.now() - 3 * 360000,
//                 userName: "Olia",
//                 message: "Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?"
//             },
//             {
//                 id: 4,
//                 time: Date.now(),
//                 userName: "Vicent",
//                 message: "Actually everything was fine. I'm very excited to show this to our team."
//             }
//         ]
//     }
// ]

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentChatRoom: {
                title: "Vincent Porter",
                avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
            }
        };

        this.changeRoom = this.changeRoom.bind(this);
    }

    changeRoom(user){
        this.setState(prevstate => {
            return {
                currentChatRoom: {
                    title: "Chat with " + user.name,
                    avatarUrl: user.avatarUrl
                }
            };
        });
    }

    render() {
        return (
            <div className="container clearfix">
                <RoomsContainer userClickHandler={this.changeRoom}/>
                {/* <ChatRoom messages={this.state.roomChats} chatConfig={this.state.currentChatRoom}/> */}
            </div>
        )
    }
};

export default App;