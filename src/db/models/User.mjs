import Sequelize from 'sequelize';
import db from '../db.mjs';

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

export default User;