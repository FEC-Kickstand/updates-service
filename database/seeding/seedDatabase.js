const {
  User,
  Project,
  Update,
  sequelize,
} = require('../sequelize');

console.log('hit seed Database');

function seedDatabase(data) {
  sequelize.sync({ force: true })
    .then(() => {
      console.log('>>>>>bulk create users:\n\n\n', data.users);
      console.log('>>>>>bulk create projects:\n\n\n', data.projects);
      User.bulkCreate(data.users);
      Project.bulkCreate(data.projects);
      Update.bulkCreate(data.updates);
    })
    .catch(err => console.error(err));
}

module.exports = seedDatabase;
