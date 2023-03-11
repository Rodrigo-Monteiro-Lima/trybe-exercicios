"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _TokenUtils_jwt;
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET || 'segredo';
class TokenUtils {
    constructor() {
        _TokenUtils_jwt.set(this, jsonwebtoken_1.default);
    }
    generateToken(payload) {
        return __classPrivateFieldGet(this, _TokenUtils_jwt, "f").sign(payload, secret, {
            expiresIn: '3d',
            algorithm: 'HS256',
        });
    }
    authToken(token) {
        if (!token)
            return { status: 401, message: 'Token not found' };
        try {
            const validateToken = __classPrivateFieldGet(this, _TokenUtils_jwt, "f").verify(token, secret);
            return { validateToken };
        }
        catch (error) {
            return { status: 401, message: 'Invalid token' };
        }
    }
}
exports.default = TokenUtils;
_TokenUtils_jwt = new WeakMap();
