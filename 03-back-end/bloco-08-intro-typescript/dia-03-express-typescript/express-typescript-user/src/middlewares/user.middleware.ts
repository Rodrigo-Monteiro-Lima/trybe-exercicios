import { NextFunction, Request, Response } from 'express';
import TokenUtils from '../utils/jwt';

export default class UserMiddleware {
  #tokenUtils = new TokenUtils();

  auth = (req: Request, _res: Response, next: NextFunction) => {
    const token = req.headers.authorization || '';
    const user = this.#tokenUtils.authToken(token);
    if (user.message) return next(user);
    req.body.user = user.validateToken;
    next();
  };

}