import {
    POST_REVIEW_START,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAILED,
  } from "./profileProductType";
  import axios from "axios";
import URL from "../../utils/URL";
import AUTH_HEADERS from "../../utils/AuthHeader";
  export const addReview = (values, id) => async (dispatch) => {
    dispatch({
      type: POST_REVIEW_START,
    });
    try {
      const res = await axios.post(
        `${URL}/products/${id}/reviews`,
        values,
        AUTH_HEADERS
      );
      dispatch({
          type: POST_REVIEW_SUCCESS,
          payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: POST_REVIEW_FAILED,
            payload: e?.response?.data.message,
        });
    }
  };
  