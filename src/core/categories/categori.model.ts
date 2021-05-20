import mongoose, { Schema } from "mongoose";
class Categori {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, required: [true, 'Requerido nombre'] },
            _shop: { type: Schema.Types.ObjectId, ref: "Shop" },
        }, {
                timestamps: true
            })
    }
}
const categori = new Categori()
export default mongoose.model('Categori', categori.schema)