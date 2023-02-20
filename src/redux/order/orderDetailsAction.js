import {
  GET_ORDER_DETAILS_START,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
} from "./orderType";
import axios from "axios";
import URL from "../../utils/URL";
import AUTH_HEADERS from "../../utils/AuthHeader";

export const getOrderDetails = (id) => async (dispatch) => {
  dispatch({
    type: GET_ORDER_DETAILS_START,
  });
  try {
    const res = await axios.get(
      `${URL}/orders/${id}`,
      AUTH_HEADERS
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
