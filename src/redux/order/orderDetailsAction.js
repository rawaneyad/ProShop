import {
  GET_ORDER_DETAILS_START,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
} from "./orderType";
import axios from "axios";
import Cookies from "js-cookie";

export const getOrderDetails = (id) => async (dispatch) => {
  dispatch({
    type: GET_ORDER_DETAILS_START,
  });
  try {
    const token = JSON.parse(Cookies.get("user")).token;
    const res = await axios.get(
      `https://prohop-express.herokuapp.com/api/orders/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_ORDER_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ORDER_DETAILS_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
