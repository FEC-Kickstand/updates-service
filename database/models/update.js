module.exports = (sequelize, DataTypes) => sequelize.define('update', {
  title: DataTypes.STRING,
  body: DataTypes.TEXT,
  likes: DataTypes.INTEGER,
  pubDate: DataTypes.DATE,
});
