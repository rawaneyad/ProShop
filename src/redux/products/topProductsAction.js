import {
  GET_TOP_PRODUCTS_START,
  GET_TOP_PRODUCTS_SUCCESS,
  GET_TOP_PRODUCTS_FAILED,
} from "./productsType";
import axios from "axios";

export const getTopProducts = () => async (dispatch) => {
  dispatch({
    type: GET_TOP_PRODUCTS_START,
  });
  try {
    const res = await axios.get(
      `https://prohop-express.herokuapp.com/api/products/top`
    );
    dispatch({
      type: GET_TOP_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_TOP_PRODUCTS_FAILED,
      payload: e.message,
    });
  }
};
