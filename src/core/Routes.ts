import { Router } from "express";
import userController from "./users/user.controller";
import clientController from "./clients/client.controller";
import shopController from "./products/product.controller";
import productController from "./products/product.controller";
import providerController from "./providers/provider.controller";
import rolController from "./rols/rol.controller";
import saleController from "./sales/sale.controller";
import categoriController from "./categories/categori.controller";
import subcategoriController from "./subcategories/subcategori.controller";
import authController from "./auth/auth.controller";
import auth from "../middlewares/auth.middleware";
class Routes {
    public static instance: Routes
    public router: Router
    private constructor() {
        this.router = Router()
        this.users()
        this.clients()
        this.rols()
        this.shops()
        this.products()
        this.providers()
        this.auth()
        this.categories()
        this.subcategories()
        this.sales()
        this.static()

    }
    static getInstance(): Routes {
        if (!Routes.instance) Routes.instance = new Routes()
        return Routes.instance
    }
    users() {
        this.router.get('/users/', auth.auth, userController.getAll)
        this.router.get('/users/:id', auth.auth, userController.get)
        this.router.post('/users/', userController.add)
        this.router.put('/users/:id', auth.auth, userController.update)
        this.router.delete('/users/:id', auth.auth, userController.delete)
    }
    clients() {
        this.router.get('/clients/', auth.auth, clientController.getAll)
        this.router.get('/clients/:id', auth.auth, clientController.get)
        this.router.post('/clients/', auth.auth, clientController.add)
        this.router.put('/clients/:id', auth.auth, clientController.update)
        this.router.delete('/clients/:id', auth.auth, clientController.delete)
    }
    shops() {
        this.router.get('/shops/', auth.auth, shopController.getAll)
        this.router.get('/shops/:id', auth.auth, shopController.get)
        this.router.post('/shops/', auth.auth, shopController.add)
        this.router.put('/shops/:id', auth.auth, shopController.update)
        this.router.delete('/shops/:id', auth.auth, shopController.delete)
    }
    products() {
        this.router.get('/products/', auth.auth, productController.getAll)
        // this.router.get('/products/process', auth.auth, productController.getAllProcess)
        this.router.get('/products/:id', auth.auth, productController.get)
        this.router.post('/products/', auth.auth, productController.add)
        this.router.put('/products/:id', auth.auth, productController.update)
        this.router.delete('/products/:id', auth.auth, productController.delete)
    }
    providers() {
        this.router.get('/providers/', auth.auth, providerController.getAll)
        this.router.get('/providers/:id', auth.auth, providerController.get)
        this.router.post('/providers/', auth.auth, providerController.add)
        this.router.put('/providers/:id', auth.auth, providerController.update)
        this.router.delete('/providers/:id', auth.auth, providerController.delete)
    }
    rols() {
        this.router.get('/rols/', auth.auth, rolController.getAll)
        this.router.get('/rols/:id', auth.auth, rolController.get)
        this.router.post('/rols/', auth.auth, rolController.add)
        this.router.put('/rols/:id', auth.auth, rolController.update)
        this.router.delete('/rols/:id', auth.auth, rolController.delete)
    }
    sales() {
        this.router.get('/sales/', auth.auth, saleController.getAll)
        this.router.get('/sales/:id', auth.auth, saleController.get)
        this.router.post('/sales/', auth.auth, saleController.add)
        this.router.put('/sales/:id', auth.auth, saleController.update)
        this.router.delete('/sales/:id', auth.auth, saleController.delete)
    }
    categories() {
        this.router.get('/categories/', auth.auth, categoriController.getAll)
        this.router.get('/categories/:id', auth.auth, categoriController.get)
        this.router.post('/categories/', auth.auth, categoriController.add)
        this.router.put('/categories/:id', auth.auth, categoriController.update)
        this.router.delete('/categories/:id', auth.auth, categoriController.delete)
    }
    subcategories() {
        this.router.get('/subcategories/', auth.auth, subcategoriController.getAll)
        this.router.get('/subcategories/:id', auth.auth, subcategoriController.get)
        this.router.post('/subcategories/', auth.auth, subcategoriController.add)
        this.router.put('/subcategories/:id', auth.auth, subcategoriController.update)
        this.router.delete('/subcategories/:id', auth.auth, subcategoriController.delete)
    }
    auth() {
        this.router.get('/auth/:id', authController.logout)
        this.router.post('/auth/', authController.login)
    }
    static() {

    }

}
export default Routes.getInstance().router
