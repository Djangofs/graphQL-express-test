export default ({Order, User}) => {
  console.log('setup relations running');
  User.hasMany(Order);
  Order.belongsTo(User);
  console.log('setup relations finished');
}