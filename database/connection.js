const mysql = require('mysql');
const dbConfig = require('./db.config.js');

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  // password : 'secret',
  database: dbConfig.database,
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
