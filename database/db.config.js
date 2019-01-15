const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB,
} = process.env;

module.exports = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB,
};
