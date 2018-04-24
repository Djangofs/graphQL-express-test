import Sequelize from 'sequelize';
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
const sequelize = new Sequelize(`postgres://postgres:${process.env.PASS}@localhost:5432/postgres`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;