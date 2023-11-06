import { Injectable } from '@nestjs/common';

@Injectable()
export class SocketService {
    static io: any;
    static server: any;
    static checkUser: boolean = true;

    constructor() { }

    /**
     * check connection if socket is connected
     * @param server http server
     */
    public static initSocket(server: any) {

        this.server = server;
        this.io = require('socket.io')(server, { origins: '*:*' });
        this.io.on('connection', (_) => {
            console.log("Socket connected");



            this.io.emit('socket-connection', '*--Stablished!--*');


            this.sendNotificationsInLoop()
        });
    }

    /**
     * Emits data to client
     * @param event event name
     * @param data data to be emitted
     */
    public static emitEvent(event, data) {
        this.io.emit(event, data)
    }


    public static  sendNotificationsInLoop() {
        // this.io.off('connection');


setInterval(() => {
            const notification = {
                title:"New Message",
                message:"“Good to see you!” This is a nice way to greet someone when you haven't seen them in a while.",
                Icon:"email",
                user:this.checkUser ? "User1" :"User2",
            };
            this.io.emit('notification', notification);
            this.checkUser =! this.checkUser
        }, 300000); 
    }

}