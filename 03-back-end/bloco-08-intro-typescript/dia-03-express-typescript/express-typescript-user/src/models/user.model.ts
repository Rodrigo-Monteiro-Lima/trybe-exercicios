import { ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';
import connection from '../models/connection';


export default class UserModel {
  #connection = connection;

  getAll = async (): Promise<User[]> => {
    const [users] = await this.#connection.execute('SELECT * FROM Users');
    return users as User[];
  }

  getById = async (id: Required<User>['id']): Promise<User | null> => {
    const [userArr] = await this.#connection.execute('SELECT * FROM Users WHERE id=?', [id]);
    const [user] = userArr as User[];
    return user || null;
  }

  getByEmail = async (email: Required<User>['email']): Promise<User | null> => {
    const [userArr] = await this.#connection.execute('SELECT * FROM Users WHERE email=?', [email]);
    const [user] = userArr as User[];
    return user || null;
  }

  create = async (user: User): Promise<User> => {
    const { name, email, password } = user;
    const [{ insertId }] = await this.#connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    return { id: insertId, ...user };
  }

  update = async (id: Required<User>['id'], user: User): Promise<User> => {
    const { name, email, password } = user;
    await this.#connection.execute(
      'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
      [name, email, password, id]
    );
    const updatedUser: User = { id, name, email, password };
    return updatedUser;
  }

  remove = async (id: Required<User>['id']): Promise<void> => {
    await this.#connection.execute(
      'DELETE FROM Users WHERE id=?',
      [id],
    );
  }
}