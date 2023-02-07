import { ADD_CART_DATA_SUCCESS, DELETE_ITEM_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./cartType";

export const addToCart = (product, qty) => {
  return {
    type: ADD_CART_DATA_SUCCESS,
    payload: { product, qty: 1 },
  };
};

export const deleteFromCart = (id, price) => {
  return {
    type: DELETE_ITEM_FROM_CART,
    productId: id,
    price: price,
  };
};

export const decrease = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id
  };
};

export const increase = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
};