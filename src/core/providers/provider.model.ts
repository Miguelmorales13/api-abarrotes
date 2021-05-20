import mongoose, { Schema } from "mongoose";
class Provider {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, required: [true, 'Nombre requerido'] },
            phone: { type: String, required: [true, 'Telefono requerido'] },
            address: { type: String, required: [true, 'Direccion requerida'] },
            status: { type: String, default: "Activo" },
            products: [{ product: { type: Schema.Types.ObjectId, ref: "Product" }, price: String }],
        }, { timestamps: true })
    }
}
const provider = new Provider()
export default mongoose.model('Provider', provider.schema)