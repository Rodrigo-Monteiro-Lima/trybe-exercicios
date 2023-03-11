import User from "../../interfaces/user.interface";
import validationsSchemas from "./schema";

export default class validationsInputs {
  #validationsSchemas = new validationsSchemas();

  validateNewUser = (user: User) => {
    const { error } = this.#validationsSchemas.userSchema.validate(user);
    if (error) return { status: 400, message: error.message };
    return { status: 201, message: '' };
  }
}