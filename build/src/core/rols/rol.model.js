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
var Rol = /** @class */ (function () {
    function Rol() {
        this.schema = new mongoose_1.Schema({
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
        }, { timestamps: true });
    }
    return Rol;
}());
var rol = new Rol();
exports.default = mongoose_1.default.model('Rol', rol.schema);
