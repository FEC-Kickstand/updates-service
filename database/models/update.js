const Model = require('./Model');

const NAME = 'updates';
const COLUMNS = [
  'id',
  'title',
  'body',
  'likes',
  'comments',
  'published_date',
  'posted_by',
  'project',
];

class Update extends Model {
  constructor(connection) {
    super(connection, NAME, COLUMNS);
  }

  getAllByProjectId(projectId) {
    const { connection } = this;
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM updates WHERE project = ?';
      connection.query(sql, projectId, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = Update;
