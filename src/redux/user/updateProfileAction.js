import {
  PUT_PROFIlE_START,
  PUT_PROFIlE_SUCCESS,
  PUT_PROFIlE_FAILED,
} from "./userType";
import axios from "axios";
import Cookies from "js-cookie";
export const updateProfile = (values, navigate) => async (dispatch) => {
  dispatch({
    type: PUT_PROFIlE_START,
  });
  try {
    const token = JSON.parse(Cookies.get("user")).token;
    const res = await axios.put(
      `https://prohop-express.herokuapp.com/api/users/profile`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
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
