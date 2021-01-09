class Model {
  constructor(connection, name, columns) {
    this.connection = connection;
    this.name = name;
    this.columns = columns;
  }

  insert(instance) {
    const { connection, name } = this;
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO ${name} SET ?`;
      connection.query(sql, instance, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(Promise.resolve(results));
        }
      });
    });
  }

  bulkInsert(instances) {
    const { connection, name, columns } = this;
    return new Promise((resolve, reject) => {
      const vals = instances.map(instance => columns.map(col => instance[col]));
      const sql = `INSERT INTO ${name} (${columns.join(',')}) VALUES ?`;
      connection.query(sql, [vals], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = Model;
