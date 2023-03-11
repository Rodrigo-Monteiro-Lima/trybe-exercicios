import mysql from 'mysql2/promise';

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

export default mysql.createPool({
  host: DATABASE_HOST || 'localhost',
  user: DATABASE_USER || 'root',
  password: DATABASE_PASSWORD || 'senha-mysql',
  database: DATABASE_NAME || 'TypeScriptExpress',
});