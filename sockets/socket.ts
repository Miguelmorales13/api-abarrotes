import {Server} from "socket.io";

class SocketIndex {
    private static instance:SocketIndex
    private constructor(private io: Server) {
        this.io.on('connection', this.init)
    }
    static getInstance(io: Server):SocketIndex{
        if (!SocketIndex.instance) SocketIndex.instance= new SocketIndex(io)
        return SocketIndex.instance
    }
    init(user:any){
        console.log('connected');
        user.on('disconnect',()=>{
          console.log('adios')
        })
        // user.on('orders',(data:any,calback:Function)=>{
        //     console.log(data);
        //     // user.broadcast.emit(`${data.type}/${data.order._shop}`,data)
        // })
    }

}
export default (io:any)=>{
    return SocketIndex.getInstance(io)
}
