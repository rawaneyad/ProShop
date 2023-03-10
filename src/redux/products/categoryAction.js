import {
    GET_PRODUCT_CATEGORY_START,
    GET_PRODUCT_CATEGORY_SUCCESS,
    GET_PRODUCT_CATEGORY_FAILED,
  } from "./productsType";
  import axios from "axios";
import URL from "../../utils/URL";
  
  export const getProductCategory = (category) => async (dispatch) => {
    dispatch({
      type: GET_PRODUCT_CATEGORY_START,
    });
    try {
      const res = await axios.get(
        `${URL}/products/category/${category}`
      );
      dispatch({
        type: GET_PRODUCT_CATEGORY_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_PRODUCT_CATEGORY_FAILED,
        payload: e?.response?.data.message,
      });
    }
  };
  