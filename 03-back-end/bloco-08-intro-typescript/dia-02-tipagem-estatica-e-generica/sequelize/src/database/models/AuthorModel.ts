import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Author extends Model {
  declare id: number;
  declare name: string;
}
Author.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'authors',
  timestamps: false,
});

export default Author;