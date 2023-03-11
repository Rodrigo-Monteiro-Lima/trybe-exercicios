import UserModel from '../models/user.model';
import User, { UserAuth } from '../interfaces/user.interface';
import validationsInputs from './validations/validationsInputValues';
import { createTokenJWT } from '../utils/generateToken';

class UserService {
  #model: UserModel;
  #validationsInputs = new validationsInputs();

  constructor() {
    this.#model = new UserModel();
  }

  async getAll(): Promise<Partial<User>[]> {
    const users = await this.#model.getAll();
    const usersWithoutPassword = users.map(({ password: _, ...rest }) => rest);
    return usersWithoutPassword;
  }

  async getById(id: number) {
    const user = await this.#model.getById(id);
    if (user === null) return { status: 404, message: 'User not found' }
    const { password: _, ...rest } = user;
    return { message: '', status: 200, user: rest };
  }

  create = async (user: User): Promise<{ status: number, message: string, user?: Partial<User>, token?: string }> => {
    const error = this.#validationsInputs.validateNewUser(user);
    if (error.message) return error;
    const userExists = await this.#model.getByEmail(user.email);
    if (userExists) return { status: 409, message: 'User already exists' };
    console.log(userExists);
    const newUser = await this.#model.create(user);
    const token = createTokenJWT(newUser);
    const { password: _, ...rest } = newUser;
    return { message: '', status: 201, user: rest, token };
  }

  login = async (email: string, password: string): Promise<{ status: number, message: string, token?: string }> => {
    if (!email || !password) return { status: 400, message: 'email and password fields are required' };
    const user = await this.#model.getByEmail(email);
    if (!user) return { status: 404, message: 'User not found' };
    if (password !== user.password) return { status: 404, message: 'Invalid password' };
    const token = createTokenJWT(user);
    return { message: '', status: 201, token }
  }

  update = async (id: number, userUpdate: User, user: UserAuth): Promise<{ status: number, message: string, user?: User }> => {
    const error = this.#validationsInputs.validateNewUser(userUpdate);
    if (error.message) return error;
    const userExists = await this.#model.getById(id);
    if (!userExists) return { status: 409, message: 'User not found' };
    if (id !== user.id) return { status: 401, message: 'Unauthorized user' };
    const updatedUser = await this.#model.update(id, userUpdate);
    return { message: '', user: updatedUser, status: 200 };
  }

  remove = async (id: number, user: UserAuth) => {
    const userExists = await this.#model.getById(id);
    if (!userExists) return { status: 409, message: 'User not found' };
    if (id !== user.id) return { status: 401, message: 'Unauthorized user' };
    await this.#model.remove(id);
    return { message: '', status: 204 };
  }
}

export default UserService;