import mongoose, { Schema } from "mongoose";
class Client {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, required: [true, 'Nombre requerido'] },
            phone: { type: String, required: [true, 'Telefono requerido'] },
            address: { type: String, required: [true, 'Direccion requerida'] },
        }, { timestamps: true })
    }
}
const client = new Client()
export default mongoose.model('Client', client.schema)