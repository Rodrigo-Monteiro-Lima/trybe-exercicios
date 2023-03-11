import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

class BooksController {
  #userService = new UserService();

  getAll = async (_req: Request, res: Response) => {
    const books = await this.#userService.getAll();
    return res.status(200).json(books);
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const user = await this.#userService.getById(id);
    if (user.message) return next(user)
    return res.status(user.status).json(user.user);
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    const newUser = await this.#userService.create(user);
    if (newUser.message) return next(newUser)
    return res.status(newUser.status).json({ user: newUser.user, token: newUser.token });
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const login = await this.#userService.login(email, password);
    if (login.message) return next(login);
    return res.status(login.status).json({ token: login.token })
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const { name, email, password, user } = req.body;
    const result = await this.#userService.update(id, { name, email, password }, user);
    if (result.message) return next(result);
    return res.status(result.status).json(result.user);
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const result = await this.#userService.remove(id, req.body.user);
    if (result.message) return next(result);
    return res.sendStatus(result.status);
  };

}

export default BooksController;
