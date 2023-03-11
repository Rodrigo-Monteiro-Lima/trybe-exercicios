import jwt from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET || 'segredo';

interface JWTPayload {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export default class TokenUtils {
  #jwt = jwt;

  generateToken(payload: JWTPayload) {
    return this.#jwt.sign(payload, secret, {
      expiresIn: '3d',
      algorithm: 'HS256',
    });
  }

  authToken(token: string) {
    if (!token) return { status: 401, message: 'Token not found' };
    try {
      const validateToken = this.#jwt.verify(token, secret);
      return { validateToken };
    } catch (error) {
      return { status: 401, message: 'Invalid token' };
    }
  }
}