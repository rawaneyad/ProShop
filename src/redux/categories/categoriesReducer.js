import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
} from "./categoriesType";
const initialState = {
  Categories: { 
    categories: [], isLoading: false, error: ""
   },
};
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_START:
      return {
        ...state,
        Categories: { ...state.Categories, isLoading: true },
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        Categories: {
          ...state.Categories,
          isLoading: false,
          categories: action.payload,
        },
      };
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        Categories: {
          ...state.Categories,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default categoriesReducer;
