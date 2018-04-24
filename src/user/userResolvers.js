const User = require('../db/models/User');

const getUserById = ({id}) => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  return {
    id,
    firstName: 'Django'
  }
};

const getAllUsers = () => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  return User.findAll();
};

const createUser = (user) => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  return User.create(user)
    .catch(err => {
      return Promise.reject(err);
    });
}

module.exports = { getUserById, getAllUsers, createUser };