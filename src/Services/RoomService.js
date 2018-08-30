import axios from 'axios';

export default class RoomService {
    constructor() {
        this.config = {
            baseUrl: "http://localhost:63480/api",
            resourceName: 'rooms'
        };
    }

    getAll(callback) {
        axios.get(this.config.baseUrl + '/' + this.config.resourceName)
        .then(res => {
            callback(res.data);
        })
    }

    getMessages(roomId, callback){
        axios.get(this.config.baseUrl + '/' + this.config.resourceName + '/' + roomId + '/messages')
        .then(res => {
            callback(res.data);
        });
    }
}