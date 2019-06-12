import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
class Rol {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, required: true },
            permits: {
                users: { add: { type: Boolean, default: false }, delete: { type: Boolean, default: false }, view: { type: Boolean, default: false }, update: { type: Boolean, default: false }, },
                clients: { add: { type: Boolean, default: false }, update: { type: Boolean, default: false }, delete: { type: Boolean, default: false }, view: { type: Boolean, default: false }, },
                categories: { add: { type: Boolean, default: false }, update: { type: Boolean, default: false }, delete: { type: Boolean, default: false }, view: { type: Boolean, default: false }, },
                subcategories: { add: { type: Boolean, default: false }, update: { type: Boolean, default: false }, delete: { type: Boolean, default: false }, view: { type: Boolean, default: false }, },
                rols: { add: { type: Boolean, default: false }, update: { type: Boolean, default: false }, delete: { type: Boolean, default: false }, view: { type: Boolean, default: false }, },
                sales: { add: { type: Boolean, default: false }, update: { type: Boolean, default: false }, delete: { type: Boolean, default: false }, view: { type: Boolean, default: false }, },
                providers: { add: { type: Boolean, default: false }, update: { type: Boolean, default: false }, delete: { type: Boolean, default: false }, view: { type: Boolean, default: false }, },
                products: { add: { type: Boolean, default: false }, update: { type: Boolean, default: false }, delete: { type: Boolean, default: false }, view: { type: Boolean, default: false }, },
                reports: { view: { type: Boolean, default: false }, },
            },
            description: String,
        }, { timestamps: true })
    }
}
const rol = new Rol()
export default mongoose.model('Rol', rol.schema)