import { User } from '../db/db.mjs';

export const getUserById = ({id}) => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  return User.findOne({ where: {id: id} });
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
