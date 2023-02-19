import {
  GET_PRODUCT_PROFILE_START,
  GET_PRODUCT_PROFILE_SUCCESS,
  GET_PRODUCT_PROFILE_FAILED,
  POST_REVIEW_START,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAILED,
} from "./profileProductType";
const initialState = {
  ProfileProduct: {
    profileProduct: {},
    isLoading: false,
    error: "",
  },
};
const profileProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_PROFILE_START:
      return {
        ...state,
        ProfileProduct: { ...state.ProfileProduct, isLoading: true },
      };
    case GET_PRODUCT_PROFILE_SUCCESS:
      return {
        ...state,
        ProfileProduct: {
          ...state.ProfileProduct,
          isLoading: false,
          profileProduct: action.payload,
        },
      };
    case GET_PRODUCT_PROFILE_FAILED:
      return {
        ...state,
        ProfileProduct: {
          ...state.ProfileProduct,
          isLoading: false,
          error: action.payload,
        },
      };
      case POST_REVIEW_START:
      return {
        ...state,
        ProfileProduct: { ...state.ProfileProduct, isLoading: true },
      };
    case POST_REVIEW_SUCCESS:
      return {
        ...state,
        ProfileProduct: {
          ...state.ProfileProduct,
          isLoading: false,
          profileProduct: action.payload,
        },
      };
    case POST_REVIEW_FAILED:
      return {
        ...state,
        ProfileProduct: {
          ...state.ProfileProduct,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default profileProductReducer;
