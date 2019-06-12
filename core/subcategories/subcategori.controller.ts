
import SubcategoriModel from "./subcategori.model";
import { Request, Response } from "express";
class SubcategoriCtrl {
    public static instance: SubcategoriCtrl
    private constructor() { }
    static getInstance(): SubcategoriCtrl {
        if (!SubcategoriCtrl.instance) SubcategoriCtrl.instance = new SubcategoriCtrl()
        return SubcategoriCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const subcategories = await SubcategoriModel.find({})
            res.json(subcategories)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const subcategori = await SubcategoriModel.findById(req.params.id)
            res.json(subcategori)
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    async add(req: Request, res: Response) {
        try {
            const subcategori: any = await SubcategoriModel.create(req.body)
            res.status(201).json(subcategori)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const subcategori: any = await SubcategoriModel.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, { new: true })
            res.status(201).json(subcategori)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await SubcategoriModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default SubcategoriCtrl.getInstance()
