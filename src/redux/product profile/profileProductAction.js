import {
  GET_PRODUCT_PROFILE_START,
  GET_PRODUCT_PROFILE_SUCCESS,
  GET_PRODUCT_PROFILE_FAILED,
} from "./profileProductType";
import axios from "axios";
import URL from "../../utils/URL";

export const getProductProfile = (id) => async (dispatch) => {

  dispatch({
    type: GET_PRODUCT_PROFILE_START,
  });
  try {
    const res = await axios.get(
      `${URL}/products/${id}`
    );
    dispatch({
      type: GET_PRODUCT_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_PROFILE_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
