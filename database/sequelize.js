const Sequelize = require('sequelize');
const config = require('./db.config.js');
const userModel = require('./models/user');
const projectModel = require('./models/project');
const updateModel = require('./models/update');

const sequelize = new Sequelize({
  database: config.database,
  username: config.user,
  password: config.password,
  host: config.host,
  dialect: 'mysql',
  define: {
    allowNull: false,
  },
});

const User = userModel(sequelize, Sequelize);
const Project = projectModel(sequelize, Sequelize);
const Update = updateModel(sequelize, Sequelize);

Project.belongsTo(User, { foreignKey: 'ownerId' });
Update.belongsTo(User, { foreignKey: 'postedBy' });
Update.belongsTo(Project, { foreignKey: 'projectId' });

// sequelize.sync({ force: true }) // <== if you need to reseed, uncomment
sequelize.sync()
  .then(() => console.log('Sequelize connection established!'))
  .catch(err => console.error('Sequelize failed to connect.', err));

module.exports = {
  User,
  Project,
  Update,
  sequelize,
};
