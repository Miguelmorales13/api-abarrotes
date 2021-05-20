
import SaleModel from "./sale.model";
import { Request, Response } from "express";
class SaleCtrl {
    public static instance: SaleCtrl
    private constructor() { }
    static getInstance(): SaleCtrl {
        if (!SaleCtrl.instance) SaleCtrl.instance = new SaleCtrl()
        return SaleCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const sales = await SaleModel.find({})
            res.json(sales)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const sale = await SaleModel.findById(req.params.id)
            res.json(sale)
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    async add(req: Request, res: Response) {
        try {
            const sale: any = await SaleModel.create(req.body)
            res.status(201).json(sale)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const sale: any = await SaleModel.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, { new: true })
            res.status(201).json(sale)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await SaleModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default SaleCtrl.getInstance()
