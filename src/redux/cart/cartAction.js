import { ADD_CART_DATA_SUCCESS, DELETE_ITEM_FROM_CART } from "./cartType";

export const addToCart = (product, qty) => {
  return {
    type: ADD_CART_DATA_SUCCESS,
    payload: { product, qty },
  };
};

export const deleteFromCart = (id, price) => {
  return {
    type: DELETE_ITEM_FROM_CART,
    productId: id,
    price: price,
  };
};
