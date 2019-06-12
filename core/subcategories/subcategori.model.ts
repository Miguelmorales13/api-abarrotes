import mongoose, { Schema } from "mongoose";
class Subcategori {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, index: true, unique: [true, 'Ya esta registrado ese nombre'], required: [true, 'El nombre es requerido'] },
            photo: { type: String, required: [true, 'La foto es requerida'] },
            path: { type: String, required: [true, 'La categoria es requerida'], index: true, unique: [true, 'Ya esta registrada esa ruta'] },
            categori: { type: Schema.Types.ObjectId, ref: "Categori", required: [true, 'La categoria es requerida'] },
            status: { type: String, default: "Activo" },
            descripcion: String,
        }, {
                timestamps: true
            })
    }
}
const subcategori = new Subcategori()
export default mongoose.model('Subcategori', subcategori.schema)