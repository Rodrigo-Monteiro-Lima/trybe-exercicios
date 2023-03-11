"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME, } = process.env;
exports.default = promise_1.default.createPool({
    host: DATABASE_HOST || 'localhost',
    user: DATABASE_USER || 'root',
    password: DATABASE_PASSWORD || 'senha-mysql',
    database: DATABASE_NAME || 'TypeScriptExpress',
});
