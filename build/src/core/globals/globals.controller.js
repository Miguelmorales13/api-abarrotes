"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sale_model_1 = __importDefault(require("../sales/sale.model"));
var client_model_1 = __importDefault(require("../clients/client.model"));
var provider_model_1 = __importDefault(require("../providers/provider.model"));
var rol_model_1 = __importDefault(require("../rols/rol.model"));
var product_model_1 = __importDefault(require("../products/product.model"));
var user_model_1 = __importDefault(require("../users/user.model"));
var categori_model_1 = __importDefault(require("../categories/categori.model"));
var subcategori_model_1 = __importDefault(require("../subcategories/subcategori.model"));
var GlobalsCtrl = /** @class */ (function () {
    function GlobalsCtrl() {
    }
    GlobalsCtrl.getInstance = function () {
        if (!GlobalsCtrl.instance)
            GlobalsCtrl.instance = new GlobalsCtrl();
        return GlobalsCtrl.instance;
    };
    GlobalsCtrl.prototype.start = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var sales, salesCount, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sale_model_1.default.find({})
                                .where('createdAt')
                                .gte(new Date(new Date().setDate(new Date().getDate() - 8)).getTime()).lte(new Date(new Date().setDate(new Date().getDate() + 1)).getTime())];
                    case 1:
                        sales = _a.sent();
                        salesCount = sales.map(function (sale) { return sale.total; }).reduce(function (valueBefore, valueAfter) { return valueBefore + valueAfter; });
                        res.json(salesCount);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(500).json(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GlobalsCtrl.prototype.countGlobal = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var sales, clients, providers, rols, products, categories, subcategories, users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, sale_model_1.default.count()];
                    case 1:
                        sales = _a.sent();
                        return [4 /*yield*/, client_model_1.default.count()];
                    case 2:
                        clients = _a.sent();
                        return [4 /*yield*/, provider_model_1.default.count()];
                    case 3:
                        providers = _a.sent();
                        return [4 /*yield*/, rol_model_1.default.count()];
                    case 4:
                        rols = _a.sent();
                        return [4 /*yield*/, product_model_1.default.count()];
                    case 5:
                        products = _a.sent();
                        return [4 /*yield*/, categori_model_1.default.count()];
                    case 6:
                        categories = _a.sent();
                        return [4 /*yield*/, subcategori_model_1.default.count()];
                    case 7:
                        subcategories = _a.sent();
                        return [4 /*yield*/, user_model_1.default.count()];
                    case 8:
                        users = _a.sent();
                        res.status(200).json({ sales: sales, clients: clients, providers: providers, rols: rols, products: products, categories: categories, subcategories: subcategories, users: users });
                        return [3 /*break*/, 10];
                    case 9:
                        error_2 = _a.sent();
                        res.status(500).json(error_2);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    GlobalsCtrl.prototype.homeProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var prods, error_3;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = {};
                        return [4 /*yield*/, product_model_1.default.find().where('amount').gt(0).lte(5).limit(10)];
                    case 1:
                        _a.aboutToEnd = _b.sent();
                        return [4 /*yield*/, product_model_1.default.find({ amount: 0 }).limit(10)];
                    case 2:
                        prods = (_a.finished = _b.sent(),
                            _a);
                        res.status(200).json({ prods: prods });
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _b.sent();
                        console.log(error_3);
                        res.status(500).json({ error: error_3 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return GlobalsCtrl;
}());
exports.default = GlobalsCtrl.getInstance();
