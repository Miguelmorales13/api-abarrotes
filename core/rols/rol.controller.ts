
import RolModel from "./rol.model";
import { Request, Response } from "express";
class RolCtrl {
    public static instance: RolCtrl
    private constructor() { }
    static getInstance(): RolCtrl {
        if (!RolCtrl.instance) RolCtrl.instance = new RolCtrl()
        return RolCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const rols = await RolModel.find({})
            res.json(rols)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const rol = await RolModel.findById(req.params.id)
            res.json(rol)
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    async add(req: Request, res: Response) {
        try {
            const rol: any = await RolModel.create(req.body)
            res.status(201).json(rol)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const rol: any = await RolModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(201).json(rol)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await RolModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default RolCtrl.getInstance()
