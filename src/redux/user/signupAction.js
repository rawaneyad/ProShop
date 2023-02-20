import {
  POST_SIGNUP_START,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILED,
} from "./userType";
import axios from "axios";
import Cookies from "js-cookie";
import URL from "../../utils/URL";

export const signup = (values, navigate) => async (dispatch) => {
  dispatch({
    type: POST_SIGNUP_START,
  });
  try {
    const res = await axios.post(`${URL}/users/signup`, values);
    Cookies.set("user", JSON.stringify(res.data), { expires: 7 });
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
