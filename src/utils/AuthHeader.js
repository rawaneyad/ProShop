import Cookies from "js-cookie";

const token = JSON.parse(Cookies.get("user")).token;
const AUTH_HEADERS={
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }

  export default AUTH_HEADERS