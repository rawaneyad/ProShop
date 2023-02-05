import { CATEGORIES, CATEGORIES_ERROR } from "./categoriesType";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://prohop-express.herokuapp.com/api/products/category/all`
    );
    dispatch({
      type: CATEGORIES,
      Categories: res.data,
    });
  } catch (e) {
    dispatch({
      type: CATEGORIES_ERROR,
      Categories: console.log(e),
    });
  }
};
