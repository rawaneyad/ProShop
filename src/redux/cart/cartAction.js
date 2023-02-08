import {
  ADD_CART_DATA_SUCCESS,
  DELETE_ITEM_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./cartType";

export const addToCart = (product, qty) => (dispatch, getState) => {
  const state = getState();
  const total =
    state.Cart.Cart.reduce((acc, item) => {
      return acc + item.product.price * item.qty;
    }, 0) +
    product.price * qty;
  const count = state.Cart.count + qty;
  dispatch({
    type: ADD_CART_DATA_SUCCESS,
    payload: { Cart: { product, qty }, total, count },
  });
};

export const deleteFromCart = (id) => (dispatch, getState) => {
  const state = getState();
  const Cart = state.Cart.Cart.filter((item) => item.product._id !== id);
  const total = Cart.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);
  const count = Cart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  dispatch({
    type: DELETE_ITEM_FROM_CART,
    payload: { Cart, total, count },
  });
};

export const decrease = (id) => (dispatch, getState) => {
  const state = getState();
  const Cart = state.Cart.Cart.map((cart) =>
    cart.product._id === id ? { ...cart, qty: cart.qty - 1 } : cart
  );
  const total = Cart.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);
  dispatch({
    type: DECREASE_QUANTITY,
    payload: { Cart, total },
  });
};

export const increase = (id) => (dispatch, getState) => {
  const state = getState();
  const Cart = state.Cart.Cart.map((cart) =>
    cart.product._id === id ? { ...cart, qty: cart.qty + 1 } : cart
  );
  const total = Cart.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);
  dispatch({
    type: INCREASE_QUANTITY,
    payload: { Cart, total },
  });
};
