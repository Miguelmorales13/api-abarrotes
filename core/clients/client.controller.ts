
import ClientModel from "./client.model";
import { Request, Response } from "express";
class ClientCtrl {
    public static instance: ClientCtrl
    private constructor() { }
    static getInstance(): ClientCtrl {
        if (!ClientCtrl.instance) ClientCtrl.instance = new ClientCtrl()
        return ClientCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const clients = await ClientModel.find({})
            res.json(clients)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const client = await ClientModel.findById(req.params.id)
            res.json(client)
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    async add(req: Request, res: Response) {
        try {
            const client: any = await ClientModel.create(req.body)
            res.status(201).json(client)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const client: any = await ClientModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(201).json(client)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await ClientModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default ClientCtrl.getInstance()
