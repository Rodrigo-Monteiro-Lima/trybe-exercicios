"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3001;
app.get('/', (_req, res) => {
    res.status(200).send('Express + TypeScript');
});
app.use(user_route_1.default);
app.use((err, _req, res, next) => {
    const { status, message } = err;
    console.log(`status: ${status}`);
    return res.status(status || 500).json({ message });
    // switch (status) {
    //   case 'BadRequestError':
    //     res.status(400).json({ message });
    //     break;
    //   case 'ValidationError':
    //     res.status(400).json({ message: details[0].message });
    //     break;
    //   case 'NotFoundError':
    //     res.status(404).json({ message });
    //     break;
    //   case 'ConflictError':
    //     res.status(409).json({ message });
    //     break;
    //   default:
    //     console.error(err);
    //     res.sendStatus(500);
    // }
    // next();
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
