import {
  POST_SIGNUP_START,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILED,
} from "./userType";
import axios from "axios";
import Cookies from "js-cookie";

export const signup = (values, navigate) => async (dispatch) => {
  dispatch({
    type: POST_SIGNUP_START,
  });
  try {
    const res = await axios.post(
      `https://prohop-express.herokuapp.com/api/users/signup`,
      values
    );
    Cookies.set('user', res.data, { expires: 7 })
    dispatch({
      type: POST_SIGNUP_SUCCESS,
      payload: res.data,
    });
    navigate("/dashboard");
  } catch (e) {
    dispatch({
      type: POST_SIGNUP_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
