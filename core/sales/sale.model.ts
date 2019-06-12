import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
class Sale {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            day: { type: Date, default: Date.now },
            total: { type: Number, required: [true, 'El total es requerido'] },
            client: { type: Schema.Types.ObjectId, ref: "Client" },
            seller: { type: Schema.Types.ObjectId, ref: "User" },
            status: { type: String, default: "Activa" },
            products: [{ product: { type: Schema.Types.ObjectId, ref: "Product" }, amount: Number, type: String }],
        }, { timestamps: true })
    }
}
const sale = new Sale()
export default mongoose.model('Sale', sale.schema)