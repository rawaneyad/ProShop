import {
    POST_ORDER_START,
    POST_ORDER_SUCCESS,
    POST_ORDER_FAILED,
  } from "./orderType";
  import axios from "axios";
import URL from "../../utils/URL";
import AUTH_HEADERS from "../../utils/AuthHeader";
  export const addOrder = (navigate) => async (dispatch) => {
    dispatch({
      type: POST_ORDER_START,
    });
    try {
        const values = JSON.parse(localStorage.getItem("ShippingAddress"))
      const res = await axios.post(
        `${URL}/orders`,
        values,
        AUTH_HEADERS
      );
      localStorage.removeItem("cart")
      navigate('/payment/success');
      dispatch({
        type: POST_ORDER_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: POST_ORDER_FAILED,
        payload: e?.response?.data.message,
      });
    }
  };