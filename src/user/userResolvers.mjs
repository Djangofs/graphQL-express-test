import User from '../db/models/User.mjs';

export const getUserById = ({id}) => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  return {
    id,
    firstName: 'Django'
  }
};

export const getAllUsers = () => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  return User.findAll();
};

export const createUser = (user) => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  return User.create(user)
    .catch(err => {
      return Promise.reject(err);
    });
}
