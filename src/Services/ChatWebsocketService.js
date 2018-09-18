import { HubConnectionBuilder, LogLevel }  from '@aspnet/signalr';

class ChatWebsocketService {
    constructor(props) {
        this._connection = new HubConnectionBuilder()
        .withUrl('http://localhost:63480/chatHub')
        .configureLogging(LogLevel.Information)
        .build();
        var result = this._connection.start()
        .then(res => {
            console.log(result);
        });

        this._connection.on("DisplayMessage", props.receiveMessage);
        this._connection.on("connectUser", props.connectUser);
    }

    sendMessage(message, roomId) {
        this._connection.invoke("SendMessage", message, roomId)
        .catch(() =>{
            console.log("couldn't send message");
        });
    }

    joinToRoom(roomId, success) {
        this._connection.invoke("JoinToRoom", roomId)
        .then(res => {
            success(res);
        })
        .catch(() => {
            console.log("couldn't join to the room");
        });
    }
}

export default ChatWebsocketService;