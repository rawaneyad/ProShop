import { PRODUCTS, TOP_PRODUCTS } from "./productsType";
const initialState = {
  Products: [],
  TopProducts:[],
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        Products: action.Products,
      };
      case TOP_PRODUCTS:
      return {
        ...state,
        TopProducts: action.TopProducts,
      };
    default:
      return state;
  }
};

export default productsReducer;
