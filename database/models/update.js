const Model = require('./Model');

const NAME = 'updates';
const COLUMNS = [
  'update_id',
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
}

module.exports = Update;
