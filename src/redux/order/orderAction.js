import {
    POST_ORDER_START,
    POST_ORDER_SUCCESS,
    POST_ORDER_FAILED,
  } from "./orderType";
  import axios from "axios";
  import Cookies from "js-cookie";
  export const addOrder = (navigate) => async (dispatch) => {
    dispatch({
      type: POST_ORDER_START,
    });
    try {
        const values = JSON.parse(localStorage.getItem("ShippingAddress"))
        // console.log(values);
      const token = JSON.parse(Cookies.get("user")).token;
      const res = await axios.post(
        `https://prohop-express.herokuapp.com/api/orders`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
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