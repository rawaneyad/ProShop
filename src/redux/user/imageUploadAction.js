import {
  PUT_IMAGE_START,
  PUT_IMAGE_SUCCESS,
  PUT_IMAGE_FAILED,
} from "./userType";
import axios from "axios";
import Cookies from "js-cookie";
import URL from "../../utils/URL";
import AUTH_HEADERS from "../../utils/AuthHeader";

export const imageUpload = (values) => async (dispatch, getState) => {
  dispatch({
    type: PUT_IMAGE_START,
  });
  try {
    const fd = new FormData();
    fd.append("image", values.upload[0].originFileObj);
    const token = JSON.parse(Cookies.get("user")).token;
    const res = await axios.post(
      `${URL}/upload`,
      fd,
      {
        headers: {
          accept: "application/json",
          ContentType: "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const {UserData} = getState().UserData.UserData;
    await axios.put(
      `${URL}/users/profile`,
      {
        ...UserData,
        profileImage: res.data,
      },
      AUTH_HEADERS
    );
    dispatch({
      type: PUT_IMAGE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PUT_IMAGE_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
