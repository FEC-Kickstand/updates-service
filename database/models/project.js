const Model = require('./Model');

const NAME = 'projects';
const COLUMNS = ['id', 'project_name', 'owner'];

class Project extends Model {
  constructor(connection) {
    super(connection, NAME, COLUMNS);
  }
}

module.exports = Project;
