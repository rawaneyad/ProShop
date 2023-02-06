import { GET_SEARCH_START, GET_SEARCH_SUCCESS, GET_SEARCH_FAILED } from "./productsType";
import axios from "axios";

export const search = (name) => async (dispatch) => {
    dispatch({
        type: GET_SEARCH_START,
      });
    try {
        const res = await axios.get(
          `https://prohop-express.herokuapp.com/api/products?keyword=${name}`
        );
        dispatch({
          type: GET_SEARCH_SUCCESS,
          payload: res.data,
        });
      } catch (e) {
        dispatch({
          type: GET_SEARCH_FAILED,
          payload: e?.response?.message,
        });
      }
}