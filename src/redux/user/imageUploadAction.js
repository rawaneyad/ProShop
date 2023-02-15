import {
  PUT_IMAGE_START,
  PUT_IMAGE_SUCCESS,
  PUT_IMAGE_FAILED,
} from "./userType";
import axios from "axios";
import Cookies from "js-cookie";

export const imageUpload = (values) => async (dispatch, getState) => {
  dispatch({
    type: PUT_IMAGE_START,
  });
  try {
    const fd = new FormData();
    fd.append("image", values.upload[0].originFileObj);
    const token = JSON.parse(Cookies.get("user")).token;
    const res = await axios.post(
      `https://prohop-express.herokuapp.com/api/upload`,
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
      `https://prohop-express.herokuapp.com/api/users/profile`,
      {
        ...UserData,
        profileImage: res.data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
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
