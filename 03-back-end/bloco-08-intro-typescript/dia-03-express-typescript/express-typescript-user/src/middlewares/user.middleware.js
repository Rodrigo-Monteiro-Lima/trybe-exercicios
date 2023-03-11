"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _UserMiddleware_tokenUtils;
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("../utils/jwt"));
class UserMiddleware {
    constructor() {
        _UserMiddleware_tokenUtils.set(this, new jwt_1.default());
        this.auth = (req, _res, next) => {
            const token = req.headers.authorization || '';
            const user = __classPrivateFieldGet(this, _UserMiddleware_tokenUtils, "f").authToken(token);
            if (user.message)
                return next(user);
            req.body.user = user.validateToken;
            next();
        };
    }
}
exports.default = UserMiddleware;
_UserMiddleware_tokenUtils = new WeakMap();
