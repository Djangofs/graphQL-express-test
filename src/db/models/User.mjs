export default (db, Sequelize) => {
  return db.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
}