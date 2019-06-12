import { Router } from "express";
import userController from "./users/user.controller";
import tableController from "./tables/table.controller";
import shopController from "./shops/shop.controller";
import orderController from "./orders/order.controller";
import menuController from "./menus/menu.controller";
import categoriController from "./categories/categori.controller";
import authController from "./auth/auth.controller";
import auth from "../middlewares/auth.middleware";
class Routes {
    public static instance: Routes
    public router: Router
    private constructor() {
        this.router = Router()
        this.users()
        this.tables()
        this.shops()
        this.orders()
        this.menus()
        this.auth()
        this.categories()
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
    tables() {
        this.router.get('/tables/', auth.auth, tableController.getAll)
        this.router.get('/tables/:id', auth.auth, tableController.get)
        this.router.post('/tables/', auth.auth, tableController.add)
        this.router.put('/tables/:id', auth.auth, tableController.update)
        this.router.delete('/tables/:id', auth.auth, tableController.delete)
    }
    shops() {
        this.router.get('/shops/', auth.auth, shopController.getAll)
        this.router.get('/shops/:id', auth.auth, shopController.get)
        this.router.post('/shops/', auth.auth, shopController.add)
        this.router.put('/shops/:id', auth.auth, shopController.update)
        this.router.delete('/shops/:id', auth.auth, shopController.delete)
    }
    orders() {
        this.router.get('/orders/', auth.auth, orderController.getAll)
        this.router.get('/orders/process', auth.auth, orderController.getAllProcess)
        this.router.get('/orders/:id', auth.auth, orderController.get)
        this.router.post('/orders/', auth.auth, orderController.add)
        this.router.put('/orders/:id', auth.auth, orderController.update)
        this.router.delete('/orders/:id', auth.auth, orderController.delete)
    }
    menus() {
        this.router.get('/menus/', auth.auth, menuController.getAll)
        this.router.get('/menus/:id', auth.auth, menuController.get)
        this.router.post('/menus/', auth.auth, menuController.add)
        this.router.put('/menus/:id', auth.auth, menuController.update)
        this.router.delete('/menus/:id', auth.auth, menuController.delete)
    }
    categories() {
        this.router.get('/categories/', auth.auth, categoriController.getAll)
        this.router.get('/categories/:id', auth.auth, categoriController.get)
        this.router.post('/categories/', auth.auth, categoriController.add)
        this.router.put('/categories/:id', auth.auth, categoriController.update)
        this.router.delete('/categories/:id', auth.auth, categoriController.delete)
    }
    auth() {
        this.router.get('/auth/:id', authController.logout)
        this.router.post('/auth/', authController.login)
    }
    static() {

    }

}
export default Routes.getInstance().router
