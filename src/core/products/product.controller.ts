
import ProductModel from "./product.model";
import { Request, Response } from "express";
class ProductCtrl {
    public static instance: ProductCtrl
    private constructor() { }
    static getInstance(): ProductCtrl {
        if (!ProductCtrl.instance) ProductCtrl.instance = new ProductCtrl()
        return ProductCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const products = await ProductModel.find({})
            res.json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const product = await ProductModel.findById(req.params.id)
            res.json(product)
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    async add(req: Request, res: Response) {
        try {
            const product: any = await ProductModel.create(req.body)
            res.status(201).json(product)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const product: any = await ProductModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(201).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await ProductModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default ProductCtrl.getInstance()
