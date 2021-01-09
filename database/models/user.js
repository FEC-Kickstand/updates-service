const Model = require('./Model');

const NAME = 'users';
const COLUMNS = ['user_id', 'user_name'];

class User extends Model {
  constructor(connection) {
    super(connection, NAME, COLUMNS);
  }
}

module.exports = User;
