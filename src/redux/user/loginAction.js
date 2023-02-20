import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
} from "./userType";
import axios from "axios";
import Cookies from "js-cookie";
import URL from "../../utils/URL";

export const login = (values, navigate) => async (dispatch) => {
  dispatch({
    type: POST_LOGIN_START,
  });
  try {
    const res = await axios.post(
      `${URL}/users/login`,
      values
    );
    Cookies.set("user", JSON.stringify(res.data), { expires: 7 });
    dispatch({
      type: POST_LOGIN_SUCCESS,
      payload: res.data,
    });
    navigate(`/profile/${res.data._id}`);
  } catch (e) {
    dispatch({
      type: POST_LOGIN_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
