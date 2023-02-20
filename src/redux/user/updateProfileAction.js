import {
  PUT_PROFIlE_START,
  PUT_PROFIlE_SUCCESS,
  PUT_PROFIlE_FAILED,
} from "./userType";
import axios from "axios";
import URL from "../../utils/URL";
import AUTH_HEADERS from "../../utils/AuthHeader";
export const updateProfile = (values, navigate) => async (dispatch) => {
  dispatch({
    type: PUT_PROFIlE_START,
  });
  try {
    const res = await axios.put(
      `${URL}/users/profile`,
      values,
      AUTH_HEADERS
    );
    navigate(`/profile/${res.data._id}`);
    dispatch({
      type: PUT_PROFIlE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PUT_PROFIlE_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
