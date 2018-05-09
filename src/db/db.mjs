import Sequelize from 'sequelize';
import createOrder from './models/Order.mjs';
import createUser from './models/User.mjs';
import setUpRelations from './models/relationships.mjs';

const db = new Sequelize(`postgres://postgres:${process.env.PASS}@localhost:5432/postgres`);
const User = createUser(db, Sequelize);
const Order = createOrder(db, Sequelize);
setUpRelations({Order, User});
db.sync();

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export { User, Order };