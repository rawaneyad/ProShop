import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
} from "./userType";
import axios from "axios";

export const login = (values) => async (dispatch) => {
  dispatch({
    type: POST_LOGIN_START,
  });
  try {
    const res = await axios
      .post(`https://prohop-express.herokuapp.com/api/users/login`, values)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            authLogin: res.data,
          });
        }
      });
    dispatch({
      type: POST_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POST_LOGIN_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
