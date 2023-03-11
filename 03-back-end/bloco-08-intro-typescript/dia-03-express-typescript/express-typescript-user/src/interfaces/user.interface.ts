interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface UserAuth extends User {
  iat: number;
  exp: number;
}

export default User;