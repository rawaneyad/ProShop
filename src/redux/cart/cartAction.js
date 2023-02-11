import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./cartType";

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
