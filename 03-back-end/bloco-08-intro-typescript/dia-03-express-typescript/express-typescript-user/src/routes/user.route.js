"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
const router = (0, express_1.Router)();
const userController = new user_controller_1.default();
const userMiddleware = new user_middleware_1.default();
router.post('/login', userController.login);
router.get('/users', userController.getAll);
router.post('/users', userController.create);
router.get('/users/:id', userController.getById);
router.use(userMiddleware.auth);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);
exports.default = router;
