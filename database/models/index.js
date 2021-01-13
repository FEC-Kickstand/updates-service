const User = require('./User');
const Project = require('./Project');
const Update = require('./Update');

const init = dbConnection => ({
  User: new User(dbConnection),
  Project: new Project(dbConnection),
  Update: new Update(dbConnection),
});

module.exports = {
  User,
  Project,
  Update,
  init,
};
