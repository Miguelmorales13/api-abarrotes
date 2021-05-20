
import ProviderModel from "./provider.model";
import { Request, Response } from "express";
class ProviderCtrl {
    public static instance: ProviderCtrl
    private constructor() { }
    static getInstance(): ProviderCtrl {
        if (!ProviderCtrl.instance) ProviderCtrl.instance = new ProviderCtrl()
        return ProviderCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const providers = await ProviderModel.find({})
            res.json(providers)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const provider = await ProviderModel.findById(req.params.id)
            res.json(provider)
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    async add(req: Request, res: Response) {
        try {
            const provider: any = await ProviderModel.create(req.body)
            res.status(201).json(provider)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const provider: any = await ProviderModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(201).json(provider)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await ProviderModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default ProviderCtrl.getInstance()
