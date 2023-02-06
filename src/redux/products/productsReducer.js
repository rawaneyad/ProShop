import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  GET_TOP_PRODUCTS_START,
  GET_TOP_PRODUCTS_SUCCESS,
  GET_TOP_PRODUCTS_FAILED,
  GET_SEARCH_START,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILED,
} from "./productsType";
const initialState = {
  Products: {products: [], isLoading: false, error: ''},
  TopProducts: {products: [], isLoading: false, error: ''},
  Search: { products: [], isLoading: false, error: '' },
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        Products: { ...state.Products, isLoading: true },
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        Products: { ...state.Products, isLoading: false, products: action.payload },
      };
      case GET_PRODUCTS_FAILED:
      return {
        ...state,
        Products: { ...state.Products, isLoading: false, error: action.payload },
      };


      case GET_TOP_PRODUCTS_START:
        return {
          ...state,
          TopProducts: { ...state.TopProducts, isLoading: true },
        };
      case GET_TOP_PRODUCTS_SUCCESS:
        return {
          ...state,
          TopProducts: { ...state.TopProducts, isLoading: false, products: action.payload },
        };
        case GET_TOP_PRODUCTS_FAILED:
        return {
          ...state,
          TopProducts: { ...state.TopProducts, isLoading: false, error: action.payload },
        };


    case GET_SEARCH_START:
      return {
        ...state,
        Search: { ...state.Search, isLoading: true },
      };
      case GET_SEARCH_SUCCESS:
      return {
        ...state,
        Search: { ...state.Search, isLoading: false, products: action.payload },
      };
      case GET_SEARCH_FAILED:
      return {
        ...state,
        Search: { ...state.Search, isLoading: false, error: action.payload },
      };
    default:
      return state;
  }
};

export default productsReducer;
