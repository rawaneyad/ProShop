import {
  GET_TOP_PRODUCTS_START,
  GET_TOP_PRODUCTS_SUCCESS,
  GET_TOP_PRODUCTS_FAILED,
} from "./productsType";
import axios from "axios";
import URL from "../../utils/URL";

export const getTopProducts = () => async (dispatch) => {
  dispatch({
    type: GET_TOP_PRODUCTS_START,
  });
  try {
    const res = await axios.get(
      `${URL}/products/top`
    );
    dispatch({
      type: GET_TOP_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_TOP_PRODUCTS_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
