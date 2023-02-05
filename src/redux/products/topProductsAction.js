import { TOP_PRODUCTS, TOP_PRODUCTS_ERROR } from "./productsType";
import axios from "axios";

export const getTopProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://prohop-express.herokuapp.com/api/products/top`
    );
    dispatch({
      type: TOP_PRODUCTS,
      TopProducts: res.data,
    });
  } catch (e) {
    dispatch({
      type: TOP_PRODUCTS_ERROR,
      TopProducts: console.log(e),
    });
  }
};
