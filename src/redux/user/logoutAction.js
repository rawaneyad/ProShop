import { LOGOUT_SUCCESS } from "./userType";
import Cookies from "js-cookie";
export const logout = (navigate) => {
  navigate("/");
  Cookies.remove("user");
  return {
    type: LOGOUT_SUCCESS,
  };
};
