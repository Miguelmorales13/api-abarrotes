"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("./users/user.controller"));
var client_controller_1 = __importDefault(require("./clients/client.controller"));
var product_controller_1 = __importDefault(require("./products/product.controller"));
var product_controller_2 = __importDefault(require("./products/product.controller"));
var provider_controller_1 = __importDefault(require("./providers/provider.controller"));
var rol_controller_1 = __importDefault(require("./rols/rol.controller"));
var sale_controller_1 = __importDefault(require("./sales/sale.controller"));
var categori_controller_1 = __importDefault(require("./categories/categori.controller"));
var subcategori_controller_1 = __importDefault(require("./subcategories/subcategori.controller"));
var auth_controller_1 = __importDefault(require("./auth/auth.controller"));
var auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
        this.users();
        this.clients();
        this.rols();
        this.shops();
        this.products();
        this.providers();
        this.auth();
        this.categories();
        this.subcategories();
        this.sales();
        this.static();
    }
    Routes.getInstance = function () {
        if (!Routes.instance)
            Routes.instance = new Routes();
        return Routes.instance;
    };
    Routes.prototype.users = function () {
        this.router.get('/users/', auth_middleware_1.default.auth, user_controller_1.default.getAll);
        this.router.get('/users/:id', auth_middleware_1.default.auth, user_controller_1.default.get);
        this.router.post('/users/', user_controller_1.default.add);
        this.router.put('/users/:id', auth_middleware_1.default.auth, user_controller_1.default.update);
        this.router.delete('/users/:id', auth_middleware_1.default.auth, user_controller_1.default.delete);
    };
    Routes.prototype.clients = function () {
        this.router.get('/clients/', auth_middleware_1.default.auth, client_controller_1.default.getAll);
        this.router.get('/clients/:id', auth_middleware_1.default.auth, client_controller_1.default.get);
        this.router.post('/clients/', auth_middleware_1.default.auth, client_controller_1.default.add);
        this.router.put('/clients/:id', auth_middleware_1.default.auth, client_controller_1.default.update);
        this.router.delete('/clients/:id', auth_middleware_1.default.auth, client_controller_1.default.delete);
    };
    Routes.prototype.shops = function () {
        this.router.get('/shops/', auth_middleware_1.default.auth, product_controller_1.default.getAll);
        this.router.get('/shops/:id', auth_middleware_1.default.auth, product_controller_1.default.get);
        this.router.post('/shops/', auth_middleware_1.default.auth, product_controller_1.default.add);
        this.router.put('/shops/:id', auth_middleware_1.default.auth, product_controller_1.default.update);
        this.router.delete('/shops/:id', auth_middleware_1.default.auth, product_controller_1.default.delete);
    };
    Routes.prototype.products = function () {
        this.router.get('/products/', auth_middleware_1.default.auth, product_controller_2.default.getAll);
        // this.router.get('/products/process', auth.auth, productController.getAllProcess)
        this.router.get('/products/:id', auth_middleware_1.default.auth, product_controller_2.default.get);
        this.router.post('/products/', auth_middleware_1.default.auth, product_controller_2.default.add);
        this.router.put('/products/:id', auth_middleware_1.default.auth, product_controller_2.default.update);
        this.router.delete('/products/:id', auth_middleware_1.default.auth, product_controller_2.default.delete);
    };
    Routes.prototype.providers = function () {
        this.router.get('/providers/', auth_middleware_1.default.auth, provider_controller_1.default.getAll);
        this.router.get('/providers/:id', auth_middleware_1.default.auth, provider_controller_1.default.get);
        this.router.post('/providers/', auth_middleware_1.default.auth, provider_controller_1.default.add);
        this.router.put('/providers/:id', auth_middleware_1.default.auth, provider_controller_1.default.update);
        this.router.delete('/providers/:id', auth_middleware_1.default.auth, provider_controller_1.default.delete);
    };
    Routes.prototype.rols = function () {
        this.router.get('/rols/', auth_middleware_1.default.auth, rol_controller_1.default.getAll);
        this.router.get('/rols/:id', auth_middleware_1.default.auth, rol_controller_1.default.get);
        this.router.post('/rols/', auth_middleware_1.default.auth, rol_controller_1.default.add);
        this.router.put('/rols/:id', auth_middleware_1.default.auth, rol_controller_1.default.update);
        this.router.delete('/rols/:id', auth_middleware_1.default.auth, rol_controller_1.default.delete);
    };
    Routes.prototype.sales = function () {
        this.router.get('/sales/', auth_middleware_1.default.auth, sale_controller_1.default.getAll);
        this.router.get('/sales/:id', auth_middleware_1.default.auth, sale_controller_1.default.get);
        this.router.post('/sales/', auth_middleware_1.default.auth, sale_controller_1.default.add);
        this.router.put('/sales/:id', auth_middleware_1.default.auth, sale_controller_1.default.update);
        this.router.delete('/sales/:id', auth_middleware_1.default.auth, sale_controller_1.default.delete);
    };
    Routes.prototype.categories = function () {
        this.router.get('/categories/', auth_middleware_1.default.auth, categori_controller_1.default.getAll);
        this.router.get('/categories/:id', auth_middleware_1.default.auth, categori_controller_1.default.get);
        this.router.post('/categories/', auth_middleware_1.default.auth, categori_controller_1.default.add);
        this.router.put('/categories/:id', auth_middleware_1.default.auth, categori_controller_1.default.update);
        this.router.delete('/categories/:id', auth_middleware_1.default.auth, categori_controller_1.default.delete);
    };
    Routes.prototype.subcategories = function () {
        this.router.get('/subcategories/', auth_middleware_1.default.auth, subcategori_controller_1.default.getAll);
        this.router.get('/subcategories/:id', auth_middleware_1.default.auth, subcategori_controller_1.default.get);
        this.router.post('/subcategories/', auth_middleware_1.default.auth, subcategori_controller_1.default.add);
        this.router.put('/subcategories/:id', auth_middleware_1.default.auth, subcategori_controller_1.default.update);
        this.router.delete('/subcategories/:id', auth_middleware_1.default.auth, subcategori_controller_1.default.delete);
    };
    Routes.prototype.auth = function () {
        this.router.get('/auth/:id', auth_controller_1.default.logout);
        this.router.post('/auth/', auth_controller_1.default.login);
    };
    Routes.prototype.static = function () {
    };
    return Routes;
}());
exports.default = Routes.getInstance().router;
