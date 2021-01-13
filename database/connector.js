const { env } = process;
console.log('DB:', env.DB);
console.log('DB_HOST:', env.DB_HOST);
console.log('DB_USER:', env.DB_USER);
console.log('DB_PASSWORD:', env.DB_PASSWORD);
console.log('NODE_ENV:', env.NODE_ENV);
console.log('HOST_PORT:', env.HOST_PORT);
console.log('HOST_URL:', env.HOST_URL);
console.log('EXPRESS_PORT:', env.EXPRESS_PORT);

const config = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB,
};

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

module.exports = { connect, config };
