import {
    POST_REVIEW_START,
    POST_REVIEW_SUCCESS,
    POST_REVIEW_FAILED,
  } from "./profileProductType";
  import axios from "axios";
  import Cookies from "js-cookie";
  export const addReview = (values, id) => async (dispatch) => {
    dispatch({
      type: POST_REVIEW_START,
    });
    try {
      const token = JSON.parse(Cookies.get("user")).token;
      const res = await axios.post(
        `https://prohop-express.herokuapp.com/api/products/${id}/reviews`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
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
  