export declare class SocketService {
    static io: any;
    static server: any;
    static checkUser: boolean;
    constructor();
    static initSocket(server: any): void;
    static emitEvent(event: any, data: any): void;
    static sendNotificationsInLoop(): void;
}
