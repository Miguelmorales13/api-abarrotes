
import User from "../users/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { urlServer } from '../Globales'
import jwt from "jsonwebtoken";
class AuthCtrl {
    secret:string=process.env.SECRET || 'pepito'
    public static instance:AuthCtrl
    private constructor( ){}
    static getInstance():AuthCtrl{
        if (!AuthCtrl.instance ) AuthCtrl.instance=new AuthCtrl()
        return AuthCtrl.instance
    }
    async login(req: Request, res:Response) {
        if (!req.body.user || !req.body.password) return res.status(404).json({error: 'ingrese sus datos'})
        try {
            const user:any= await User.findOne({ user: req.body.user }).populate('_shop')
            if (!user) return res.status(404).json({error: 'Credenciales invalidas'});
            if (!bcrypt.compareSync(req.body.password,user.password)) return res.status(404).json({ error: "Credenciales invalidas" });
            let newUser={
                _id:user._id,
                name:user.name,
                phone:user.phone,
                user:user.user,
                status:user.status,
                rol:user.rol,
                _shop:user._shop,
            }
            let token = await jwt.sign({data: newUser,iss:`${urlServer}/api/auth`},process.env.SECRET || 'pepito',{ expiresIn: "8h" });

            res.status(200).json({
                token:token
            })

        } catch (error) {
            console.log(error);

            res.status(500).json(error)
        }


    }
    logout(req:Request, res: Response){
        res.send('In process')
    }
}
export default AuthCtrl.getInstance()
