
import UserModel from "./user.model";
import { Request, Response } from "express";
class UserCtrl {
    public static instance: UserCtrl
    private constructor() { }
    static getInstance(): UserCtrl {
        if (!UserCtrl.instance) UserCtrl.instance = new UserCtrl()
        return UserCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const users = await UserModel.find({}, '_id name phone user status rol _shop createdAt updatedAt').populate('_shop')
            res.json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const user = await UserModel.findById(req.params.id, '_id name phone status rol _shop createdAt updatedAt').populate('_shop')
            res.json(user)
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    async add(req: Request, res: Response) {
        try {
            const user: any = await UserModel.create(req.body)
            res.status(201).json(await user.populate('_shop').execPopulate())
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const user: any = await UserModel.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, { new: true }).populate('_shop')
            console.log(user)
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await UserModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default UserCtrl.getInstance()
