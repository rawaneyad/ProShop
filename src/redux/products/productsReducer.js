import { PRODUCTS } from "./productsType";
const initialState = {
  Products: [],
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        Products: action.Products,
      };
    default:
      return state;
  }
};

export default productsReducer;
