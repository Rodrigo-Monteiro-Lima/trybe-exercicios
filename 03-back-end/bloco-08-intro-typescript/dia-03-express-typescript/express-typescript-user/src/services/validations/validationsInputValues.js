"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _validationsInputs_validationsSchemas;
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
class validationsInputs {
    constructor() {
        _validationsInputs_validationsSchemas.set(this, new schema_1.default());
        this.validateNewUser = (user) => {
            const { error } = __classPrivateFieldGet(this, _validationsInputs_validationsSchemas, "f").userSchema.validate(user);
            if (error)
                return { status: 400, message: error.message };
            return { status: 201, message: '' };
        };
    }
}
exports.default = validationsInputs;
_validationsInputs_validationsSchemas = new WeakMap();
