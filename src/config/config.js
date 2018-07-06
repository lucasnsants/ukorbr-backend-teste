export const development = {
  username: "ukorbr",
  password: "ukorbr",
  database: "ukorbr",
  host: "db",
  port: 5432,
  dialect: "postgres"
};
export const test = {
  username: "root",
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql"
};
export const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
};
