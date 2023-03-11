import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
// Essa interface dependerá das informações que passamos em nosso payload.
const secret: Secret = process.env.JWT_SECRET || 'segredo';

interface JWTPayload {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export function createTokenJWT(payload: JWTPayload) {

  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256'
  }
  const token = jwt.sign(payload, secret, config);
  return token;
}