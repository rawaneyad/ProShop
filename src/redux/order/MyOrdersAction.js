import {
  GET_MY_ORDERS_START,
  GET_MY_ORDERS_SUCCESS,
  GET_MY_ORDERS_FAILED,
} from "./orderType";
import axios from "axios";
import URL from "../../utils/URL";
import AUTH_HEADERS from "../../utils/AuthHeader";

export const getMyOrders = () => async (dispatch) => {
  dispatch({
    type: GET_MY_ORDERS_START,
  });
  try {
    const res = await axios.get(
      `${URL}/orders/myorders`,
      AUTH_HEADERS
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
