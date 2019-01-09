module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  userName: DataTypes.STRING(100),
});
