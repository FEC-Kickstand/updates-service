require('dotenv').config();
const mysql = require('mysql');
const dbConfig = require('./db.config.js');

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  // password : 'secret',
  database: 'kickstand',
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
