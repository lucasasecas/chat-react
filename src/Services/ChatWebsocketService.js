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

    sendMessage(message) {
        console.log("ChatWebsocketService");
        this._connection.invoke("SendMessage", message)
        .catch(() =>{
            console.log("couldn't send message");
        });
    }
}

export default ChatWebsocketService;