import axios from "axios";
import Cookies from "js-cookie";
import {
  ADD_CART_ITEM_START,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_FAILED,
  DELETE_CART_ITEM_START,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILED,
} from "./userType";

export const addToCart = (id, qty) => async (dispatch) => {
  dispatch({
    type: ADD_CART_ITEM_START,
  });
  try {
    const token = JSON.parse(Cookies.get("user")).token;
    const res = await axios.put(
      `https://prohop-express.herokuapp.com/api/users/profile/cart`,
      { productId: id, qty: qty },
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
