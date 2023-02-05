import { CATEGORIES } from "./categoriesType";
const initialState = {
  Categories: [],
};
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        Categories: action.Categories,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
