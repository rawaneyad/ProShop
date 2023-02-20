import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
} from "./userType";
import axios from "axios";
import URL from "../../utils/URL";
import AUTH_HEADERS from "../../utils/AuthHeader";

export const getProfile = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE_START,
  });
  try {
    const res = await axios.get(
      `${URL}/users/profile`,
      AUTH_HEADERS
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
