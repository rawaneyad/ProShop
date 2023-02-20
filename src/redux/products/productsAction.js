import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from "./productsType";
import axios from "axios";
import URL from "../../utils/URL";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_START,
  });
  try {
    const res = await axios.get(
      `${URL}/products`
    );
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCTS_FAILED,
      payload: e?.response?.data.message ,
    });
  }
};
