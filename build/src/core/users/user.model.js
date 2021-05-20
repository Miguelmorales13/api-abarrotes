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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var User = /** @class */ (function () {
    function User() {
        this.schema = new mongoose_1.Schema({
            name: { type: String, required: true },
            phone: { type: String, required: true },
            user: { type: String, required: true, unique: true, index: true },
            password: { type: String, required: true, set: function (value) { return !value ? '' : bcrypt_1.default.hashSync(value, 10); } },
            status: { type: String, default: "Activo" },
            rol: { type: mongoose_1.Schema.Types.ObjectId, ref: "Rol", required: true },
        }, {
            timestamps: true
        });
    }
    return User;
}());
var user = new User();
exports.default = mongoose_1.default.model('User', user.schema);
