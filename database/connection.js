const mysql = require('mysql');
const env = require('../configureEnv');

const connection = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB,
});

const connect = con => (
  new Promise((resolve, reject) => {
    con.connect((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(con);
      }
    });
  })
);

module.exports = {
  connection,
  promisifiedConnection: connect(connection),
};
