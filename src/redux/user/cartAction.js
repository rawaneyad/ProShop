import axios from "axios";
import AUTH_HEADERS from "../../utils/AuthHeader";
import URL from "../../utils/URL";
import {
  ADD_CART_ITEM_START,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_FAILED,
  DELETE_CART_ITEM_START,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILED,
} from "./userType";

export const addToCart = (id, qty) => async (dispatch) => {
  localStorage.removeItem("message");
  localStorage.removeItem("cart");
  dispatch({
    type: ADD_CART_ITEM_START,
  });
  try {
    const res = await axios.put(
      `${URL}/users/profile/cart`,
      { productId: id, qty: qty },
      AUTH_HEADERS
    );
    localStorage.setItem("cart", JSON.stringify(res.data.cart));
    localStorage.setItem("message", "success");
    dispatch({
      type: ADD_CART_ITEM_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    localStorage.setItem("message", "error");
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
    const res = await axios.delete(
      `${URL}/users/profile/cart?productId=${id}`,
      AUTH_HEADERS
    );
    localStorage.setItem("cart", JSON.stringify(res.data.cart));
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
