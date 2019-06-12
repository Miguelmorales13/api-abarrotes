import mongoose, { Schema } from "mongoose";
class Product {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
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
            _sucategori: { type: Schema.Types.ObjectId, ref: "Subcategori", required: [true, 'La subcategoria es requerida'] },
            path: { type: String, required: [true, 'La ruta es requerida'], index: true, unique: true },
        }, { timestamps: true })
    }
}
const product = new Product()
export default mongoose.model('Product', product.schema)