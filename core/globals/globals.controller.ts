
import { Request, Response } from "express";
import Sales from "../sales/sale.model";
import Clients from "../clients/client.model";
import Providers from "../providers/provider.model";
import Rols from "../rols/rol.model";
import Products from "../products/product.model";
import Users from "../users/user.model";
import Categories from "../categories/categori.model";
import Subcategories from "../subcategories/subcategori.model";

class GlobalsCtrl {
    public static instance: GlobalsCtrl
    private constructor() { }
    static getInstance(): GlobalsCtrl {
        if (!GlobalsCtrl.instance) GlobalsCtrl.instance = new GlobalsCtrl()
        return GlobalsCtrl.instance
    }
    async start(req: Request, res: Response) {
        try {
            const sales = await Sales.find({})
                .where('createdAt')
                .gte(new Date(new Date().setDate(new Date().getDate() - 8))).lte(new Date(new Date().setDate(new Date().getDate() + 1)))
            const salesCount = sales.map((sale: any) => sale.total).reduce((valueBefore, valueAfter) => valueBefore + valueAfter)

            res.json(salesCount)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async countGlobal(req: Request, res: Response) {
        try {
            const sales = await Sales.count(true);
            const clients = await Clients.count(true);
            const providers = await Providers.count(true);
            const rols = await Rols.count(true);
            const products = await Products.count(true);
            const categories = await Categories.count(true);
            const subcategories = await Subcategories.count(true);
            const users = await Users.count(true);
            res.status(200).json({ sales, clients, providers, rols, products, categories, subcategories, users })
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async homeProducts(req: Request, res: Response) {
        try {
            const prods = {
                aboutToEnd: await Products.find().where('amount').gt(0).lte(5).limit(10),
                finished: await Products.find({ amount: 0 }).limit(10),
            }
            res.status(200).json({ prods })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error })
        }
    }

}
export default GlobalsCtrl.getInstance()
