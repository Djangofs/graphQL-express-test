import { Order } from '../db/db.mjs';

export const getOrders = ({id, args = {}}) => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  const queryObject = id ? Object.assign(args, {userId: id}) : args;
  return Order.findAll({ where: queryObject});
}

export const createOrder = (order) => {
  // AUTEHNTICATION

  // VALIDATION

  // RESOLUTION
  return Order.create(order)
    .catch(err => {
      return Promise.reject(err);
    });
}