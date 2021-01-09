const { connection } = require('../connection');
const Users = require('./User');
const Project = require('./Project');
const Update = require('./Update');

exports.User = new Users(connection);
exports.Project = new Project(connection);
exports.Update = new Update(connection);
