const initializeDatabase = require('./initializeDatabase');
const generateSeedData = require('./generateSeedData');
const seedDatabase = require('./seedDatabase');
const dbConfig = require('../db.config.js');

initializeDatabase({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
})
  .then(() => {
    const data = generateSeedData(100);
    seedDatabase(data);
  });
