import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
} from "./categoriesType";
import axios from "axios";
import URL from "../../utils/URL";

export const getCategories = () => async (dispatch) => {
  dispatch({
    type: GET_CATEGORIES_START,
  });
  try {
    const res = await axios.get(`${URL}/products/category/all`);
    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_CATEGORIES_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
