import React from 'react';
import SideUser from './SideUser.jsx';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
                    name: "Vincent Porter",
                    status: "online"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg",
                    name: "Aiden Chavez",
                    status: "offline",
                    lastConnectionTime: "left 7 mins ago"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg",
                    name: "Mike Thomas",
                    status: "online"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg",
                    name: "Erica Hughes",
                    status: "online"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg",
                    name: "Ginger Johnston",
                    status: "online"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg",
                    name: "Tracy Carpenter",
                    status: "offline",
                    lastConnectionTime: "left 30 mins ago"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg",
                    name: "Christian Kelly",
                    status: "offline",
                    lastConnectionTime: "left 10 hours ago"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg",
                    name: "Monica Ward",
                    status: "online"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg",
                    name: "Dean Henry",
                    status: "offline",
                    lastConnectionTime: "offline since Oct 28"
                },
                {
                    avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg",
                    name: "Peyton Mckinney",
                    status: "online"
                },
            ]
        }
    }

    render() {
        return (
            <ul className="list">
                {this.state.users.map(user => <SideUser {...user} />)}
            </ul>
        );
    }
}

export default UserList;