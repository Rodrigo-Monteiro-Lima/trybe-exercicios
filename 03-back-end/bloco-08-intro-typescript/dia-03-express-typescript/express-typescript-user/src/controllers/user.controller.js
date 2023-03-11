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
var _BooksController_userService;
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class BooksController {
    constructor() {
        _BooksController_userService.set(this, new user_service_1.default());
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const books = yield __classPrivateFieldGet(this, _BooksController_userService, "f").getAll();
            return res.status(200).json(books);
        });
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const user = yield __classPrivateFieldGet(this, _BooksController_userService, "f").getById(id);
            if (user.message)
                return next(user);
            return res.status(user.status).json(user.user);
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const newUser = yield __classPrivateFieldGet(this, _BooksController_userService, "f").create(user);
            if (newUser.message)
                return next(newUser);
            return res.status(newUser.status).json({ user: newUser.user, token: newUser.token });
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const login = yield __classPrivateFieldGet(this, _BooksController_userService, "f").login(email, password);
            if (login.message)
                return next(login);
            return res.status(login.status).json({ token: login.token });
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const { name, email, password, user } = req.body;
            const result = yield __classPrivateFieldGet(this, _BooksController_userService, "f").update(id, { name, email, password }, user);
            if (result.message)
                return next(result);
            return res.status(result.status).json(result.user);
        });
        this.remove = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const result = yield __classPrivateFieldGet(this, _BooksController_userService, "f").remove(id, req.body.user);
            if (result.message)
                return next(result);
            return res.sendStatus(result.status);
        });
    }
}
_BooksController_userService = new WeakMap();
exports.default = BooksController;
