"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _validationsSchemas_joi;
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class validationsSchemas {
    constructor() {
        _validationsSchemas_joi.set(this, joi_1.default);
        this.userSchema = __classPrivateFieldGet(this, _validationsSchemas_joi, "f").object({
            name: __classPrivateFieldGet(this, _validationsSchemas_joi, "f").string().min(3).required(),
            email: __classPrivateFieldGet(this, _validationsSchemas_joi, "f").string().email().required(),
            password: __classPrivateFieldGet(this, _validationsSchemas_joi, "f").string().min(6).max(12).required()
        });
    }
}
_validationsSchemas_joi = new WeakMap();
exports.default = validationsSchemas;
