import Joi from 'joi';

class validationsSchemas {
  #joi = Joi

  userSchema = this.#joi.object({
    name: this.#joi.string().min(3).required(),
    email: this.#joi.string().email().required(),
    password: this.#joi.string().min(6).max(12).required()
  })
}

export default validationsSchemas