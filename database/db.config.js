const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = process.env;

module.exports = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
};
