"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketIndex = /** @class */ (function () {
    function SocketIndex(io) {
        this.io = io;
        this.io.on('connection', this.init);
    }
    SocketIndex.getInstance = function (io) {
        if (!SocketIndex.instance)
            SocketIndex.instance = new SocketIndex(io);
        return SocketIndex.instance;
    };
    SocketIndex.prototype.init = function (user) {
        console.log('connected');
        user.on('disconnect', function () {
            console.log('adios');
        });
        // user.on('orders',(data:any,calback:Function)=>{
        //     console.log(data);
        //     // user.broadcast.emit(`${data.type}/${data.order._shop}`,data)
        // })
    };
    return SocketIndex;
}());
exports.default = (function (io) {
    return SocketIndex.getInstance(io);
});
