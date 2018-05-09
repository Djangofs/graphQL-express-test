export default (db, Sequelize) => {
  return db.define('order', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    }
  });
}