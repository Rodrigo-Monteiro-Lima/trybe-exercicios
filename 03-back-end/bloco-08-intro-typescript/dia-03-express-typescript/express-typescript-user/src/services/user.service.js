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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _UserService_model, _UserService_validationsInputs;
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const validationsInputValues_1 = __importDefault(require("./validations/validationsInputValues"));
const generateToken_1 = require("../utils/generateToken");
class UserService {
    constructor() {
        _UserService_model.set(this, void 0);
        _UserService_validationsInputs.set(this, new validationsInputValues_1.default());
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const error = __classPrivateFieldGet(this, _UserService_validationsInputs, "f").validateNewUser(user);
            if (error.message)
                return error;
            const userExists = yield __classPrivateFieldGet(this, _UserService_model, "f").getByEmail(user.email);
            if (userExists)
                return { status: 409, message: 'User already exists' };
            console.log(userExists);
            const newUser = yield __classPrivateFieldGet(this, _UserService_model, "f").create(user);
            const token = (0, generateToken_1.createTokenJWT)(newUser);
            const { password: _ } = newUser, rest = __rest(newUser, ["password"]);
            return { message: '', status: 201, user: rest, token };
        });
        this.login = (email, password) => __awaiter(this, void 0, void 0, function* () {
            if (!email || !password)
                return { status: 400, message: 'email and password fields are required' };
            const user = yield __classPrivateFieldGet(this, _UserService_model, "f").getByEmail(email);
            if (!user)
                return { status: 404, message: 'User not found' };
            if (password !== user.password)
                return { status: 404, message: 'Invalid password' };
            const token = (0, generateToken_1.createTokenJWT)(user);
            return { message: '', status: 201, token };
        });
        this.update = (id, userUpdate, user) => __awaiter(this, void 0, void 0, function* () {
            const error = __classPrivateFieldGet(this, _UserService_validationsInputs, "f").validateNewUser(userUpdate);
            if (error.message)
                return error;
            const userExists = yield __classPrivateFieldGet(this, _UserService_model, "f").getById(id);
            if (!userExists)
                return { status: 409, message: 'User not found' };
            if (id !== user.id)
                return { status: 401, message: 'Unauthorized user' };
            const updatedUser = yield __classPrivateFieldGet(this, _UserService_model, "f").update(id, userUpdate);
            return { message: '', user: updatedUser, status: 200 };
        });
        this.remove = (id, user) => __awaiter(this, void 0, void 0, function* () {
            const userExists = yield __classPrivateFieldGet(this, _UserService_model, "f").getById(id);
            if (!userExists)
                return { status: 409, message: 'User not found' };
            if (id !== user.id)
                return { status: 401, message: 'Unauthorized user' };
            yield __classPrivateFieldGet(this, _UserService_model, "f").remove(id);
            return { message: '', status: 204 };
        });
        __classPrivateFieldSet(this, _UserService_model, new user_model_1.default(), "f");
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield __classPrivateFieldGet(this, _UserService_model, "f").getAll();
            const usersWithoutPassword = users.map((_a) => {
                var { password: _ } = _a, rest = __rest(_a, ["password"]);
                return rest;
            });
            return usersWithoutPassword;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield __classPrivateFieldGet(this, _UserService_model, "f").getById(id);
            if (user === null)
                return { status: 404, message: 'User not found' };
            const { password: _ } = user, rest = __rest(user, ["password"]);
            return { message: '', status: 200, user: rest };
        });
    }
}
_UserService_model = new WeakMap(), _UserService_validationsInputs = new WeakMap();
exports.default = UserService;
