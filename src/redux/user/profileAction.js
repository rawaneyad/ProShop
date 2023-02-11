import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
} from "./userType";
import axios from "axios";
import Cookies from "js-cookie";

export const getProfile = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE_START,
  });
  try {
    const token = JSON.parse(Cookies.get("user")).token;
    const res = await axios.get(
      `https://prohop-express.herokuapp.com/api/users/profile`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
