import axios from "axios";
import Cookies from "js-cookie";
import {
  ADD_CART_ITEM_START,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_FAILED,
  DELETE_CART_ITEM_START,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILED,
 
  // INCREASE_QUANTITY,
  // DECREASE_QUANTITY,
} from "./userType";

export const addToCart = (product, qty) => async (dispatch) => {
  dispatch({
    type: ADD_CART_ITEM_START,
  });
  try {
    const token = JSON.parse(Cookies.get("user")).token;
    // console.log(token);
    const res = await axios.put(
      `https://prohop-express.herokuapp.com/api/users/profile/cart`,
      { productId: product._id, qty: qty },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADD_CART_ITEM_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ADD_CART_ITEM_FAILED,
      payload: e?.response?.data.message,
    });
  }
};

export const deleteFromCart = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CART_ITEM_START,
  });
  try {
    const token = JSON.parse(Cookies.get("user")).token;
    const res = await axios.delete(
      `https://prohop-express.herokuapp.com/api/users/profile/cart?productId=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: DELETE_CART_ITEM_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: DELETE_CART_ITEM_FAILED,
      payload: e?.response?.data.message,
    });
  }
};

// export const decrease = (id) => (dispatch, getState) => {
//   const state = getState();
//   const Cart = state.Cart.Cart.map((cart) =>
//     cart.product._id === id ? { ...cart, qty: cart.qty - 1 } : cart
//   );
//   const total = Cart.reduce((acc, item) => {
//     return acc + item.product.price * item.qty;
//   }, 0);
//   dispatch({
//     type: DECREASE_QUANTITY,
//     payload: { Cart, total },
//   });
// };

// export const increase = (id) => (dispatch, getState) => {
//   const state = getState();
//   const Cart = state.Cart.Cart.map((cart) =>
//     cart.product._id === id ? { ...cart, qty: cart.qty + 1 } : cart
//   );
//   const total = Cart.reduce((acc, item) => {
//     return acc + item.product.price * item.qty;
//   }, 0);
//   dispatch({
//     type: INCREASE_QUANTITY,
//     payload: { Cart, total },
//   });
// };
