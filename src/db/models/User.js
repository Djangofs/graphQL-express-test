const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
});

User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    id: 1,
    firstName: 'John',
    lastName: 'Hancock'
  });
});

module.exports = User;