"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var Product = /** @class */ (function () {
    function Product() {
        this.schema = new mongoose_1.Schema({
            name: { type: String, required: [true, 'El nombre es requerido'], index: true, unique: true },
            description: { type: String, required: [true, 'La descripcion es requerida'] },
            chacteristics: {
                type: [{
                        chacteristic: { type: String, required: [true, 'La caracteristica es requerida'] },
                        data: { type: String, required: [true, 'El dato de la caracteristica es requerido'] }
                    }]
            },
            form: { type: String, required: [true, 'La forma es requerida'], enum: ['litros', 'kilos', 'unidades'] },
            type_sale: String,
            photo: { type: String, required: [true, 'La foto es requerida'] },
            // precio de venta
            sale_price: { type: Number, required: [true, 'El precio de venta es requerido'] },
            // precio de compra
            porchase_price: { type: Number, required: [true, 'El precio de venta es requerido'] },
            amount: { type: Number, required: [true, 'La cantidad es requerida'] },
            status: { type: String, default: "Activo", },
            _sucategori: { type: mongoose_1.Schema.Types.ObjectId, ref: "Subcategori", required: [true, 'La subcategoria es requerida'] },
            path: { type: String, required: [true, 'La ruta es requerida'], index: true, unique: true },
        }, { timestamps: true });
    }
    return Product;
}());
var product = new Product();
exports.default = mongoose_1.default.model('Product', product.schema);
