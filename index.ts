import express, { Application } from "express";
import socket, { Socket } from "socket.io";
import http from "http";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { urlServer } from './core/Globales'
process.env.SECRET = process.env.SECRET || 'pepito'
import SocketIndex from "./sockets/socket";
import './db'
import Routes from "./core/Routes";
class Server {
    public app: Application;
    public io: any
    public server: http.Server;
    private _socket: any
    constructor() {
        this.app = express()
        this.server = http.createServer(this.app)
        this.io = socket(this.server)
        this._socket = SocketIndex(this.io)
        this.app.use(express.static(path.join(__dirname, '../dist/')));
        this.config()
        this.routes()
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3001)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.set('io', this.io)
    }
    routes(): void {
        this.app.use('/api', Routes)
        this.app.get(/.*/, (req, res) => {
            res.sendfile(path.join(__dirname, '../dist/index.html'))
        })
    }
    async start(): Promise<void> {
        await this.server.listen(this.app.get('port'))
        console.log('conection succesfull ')
    }
}
const server = new Server()
server.start()
