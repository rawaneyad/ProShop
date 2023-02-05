import { PRODUCTS, PRODUCTS_ERROR } from "./productsType";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://prohop-express.herokuapp.com/api/products`
    );
    dispatch({
      type: PRODUCTS,
      Products: res.data,
    });
  } catch (e) {
    dispatch({
      type: PRODUCTS_ERROR,
      Products: console.log(e),
    });
  }
};
