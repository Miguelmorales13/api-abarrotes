import { Response,Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
class Auth {
    constructor() {
    }
    async auth(req:Request, res:Response, next:NextFunction){
        let token = req.get("Authorization");
        if(!token) return res.status(401).json({error: "Sin autorizacion" })
        try {
            await jwt.verify(token, process.env.SECRET || 'pepito')
            next()
        } catch (error) {
            res.status(401).json({ error: "token invalido" })
        }
    }
}
const  auth= new Auth()
export default auth
