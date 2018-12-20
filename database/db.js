const Sequelize = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

function intitializeSequelize() {
  const sequelize = new Sequelize({
    database: 'kickstarter',
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect: 'mysql',
    define: {
      allowNull: false
    }
  });

  const User = sequelize.define('user', {
    userName: Sequelize.STRING(100)
  });

  const Project = sequelize.define('project', {
    projectName: Sequelize.STRING
  });

  Project.belongsTo(User, { foreignKey: 'ownerId' });
  const Update = sequelize.define('update', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    likes: Sequelize.INTEGER,
    pubDate: Sequelize.DATE
  });

  Update.belongsTo(User, { foreignKey: 'postedBy' });
  Update.belongsTo(Project, { foreignKey: 'projectId' });

  return {
    sequelizeConnection: sequelize
      .authenticate()
      .then(() => {
        console.log('MYSQL connection has been established...');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      }),
    User,
    Project,
    Update,
    sequelize
  };
}

module.exports = intitializeSequelize;
