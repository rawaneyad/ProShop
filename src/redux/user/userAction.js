import {
    POST_SIGNUP_START,
    POST_SIGNUP_SUCCESS,
    POST_SIGNUP_FAILED
  } from "./userType";
  import axios from "axios";
  
  export const signup = (values) => async (dispatch) => {
    dispatch({
      type: POST_SIGNUP_START,
    });
    try {
      const res = await axios.post(
        `https://prohop-express.herokuapp.com/api/users/signup`, values
      );

      dispatch({
        type: POST_SIGNUP_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: POST_SIGNUP_FAILED,
        payload: e?.response?.data.message,
      });
    }
  };