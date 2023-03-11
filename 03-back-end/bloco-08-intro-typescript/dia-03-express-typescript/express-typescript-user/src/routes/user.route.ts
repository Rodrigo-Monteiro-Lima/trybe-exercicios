import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserMiddleware from '../middlewares/user.middleware';


const router = Router();

const userController = new UserController();
const userMiddleware = new UserMiddleware();

router.post('/login', userController.login)

router.get('/users', userController.getAll);

router.post('/users', userController.create);

router.get('/users/:id', userController.getById);

router.use(userMiddleware.auth)

router.put('/users/:id', userController.update);

router.delete('/users/:id', userController.remove);

export default router;