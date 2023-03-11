"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _UserModel_connection;
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
class UserModel {
    constructor() {
        _UserModel_connection.set(this, connection_1.default);
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const [users] = yield __classPrivateFieldGet(this, _UserModel_connection, "f").execute('SELECT * FROM Users');
            return users;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const [userArr] = yield __classPrivateFieldGet(this, _UserModel_connection, "f").execute('SELECT * FROM Users WHERE id=?', [id]);
            const [user] = userArr;
            return user || null;
        });
        this.getByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const [userArr] = yield __classPrivateFieldGet(this, _UserModel_connection, "f").execute('SELECT * FROM Users WHERE email=?', [email]);
            const [user] = userArr;
            return user || null;
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const [{ insertId }] = yield __classPrivateFieldGet(this, _UserModel_connection, "f").execute('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
            return Object.assign({ id: insertId }, user);
        });
        this.update = (id, user) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            yield __classPrivateFieldGet(this, _UserModel_connection, "f").execute('UPDATE Users SET name=?, email=?, password=? WHERE id=?', [name, email, password, id]);
            const updatedUser = { id, name, email, password };
            return updatedUser;
        });
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _UserModel_connection, "f").execute('DELETE FROM Users WHERE id=?', [id]);
        });
    }
}
exports.default = UserModel;
_UserModel_connection = new WeakMap();
