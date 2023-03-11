"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Essa interface dependerá das informações que passamos em nosso payload.
const secret = process.env.JWT_SECRET || 'segredo';
function createTokenJWT(payload) {
    const config = {
        expiresIn: '3d',
        algorithm: 'HS256'
    };
    const token = jsonwebtoken_1.default.sign(payload, secret, config);
    return token;
}
exports.createTokenJWT = createTokenJWT;
