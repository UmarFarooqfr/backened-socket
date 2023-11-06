"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const common_1 = require("@nestjs/common");
let SocketService = class SocketService {
    constructor() { }
    static initSocket(server) {
        this.server = server;
        this.io = require('socket.io')(server, { origins: '*:*' });
        this.io.on('connection', (_) => {
            console.log("Socket connected");
            this.io.emit('socket-connection', '*--Stablished!--*');
            this.sendNotificationsInLoop();
        });
    }
    static emitEvent(event, data) {
        this.io.emit(event, data);
    }
    static sendNotificationsInLoop() {
        setInterval(() => {
            const notification = {
                title: "New Message",
                message: "“Good to see you!” This is a nice way to greet someone when you haven't seen them in a while.",
                Icon: "email",
                user: this.checkUser ? "User1" : "User2",
            };
            this.io.emit('notification', notification);
            this.checkUser = !this.checkUser;
        }, 300000);
    }
};
exports.SocketService = SocketService;
SocketService.checkUser = true;
exports.SocketService = SocketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SocketService);
//# sourceMappingURL=socket.service.js.map