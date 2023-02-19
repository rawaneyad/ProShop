import {
  GET_MY_ORDERS_START,
  GET_MY_ORDERS_SUCCESS,
  GET_MY_ORDERS_FAILED,
} from "./orderType";
import axios from "axios";
import Cookies from "js-cookie";

export const getMyOrders = () => async (dispatch) => {
  dispatch({
    type: GET_MY_ORDERS_START,
  });
  try {
    const token = JSON.parse(Cookies.get("user")).token;
    const res = await axios.get(
      `https://prohop-express.herokuapp.com/api/orders/myorders`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_MY_ORDERS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_MY_ORDERS_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
