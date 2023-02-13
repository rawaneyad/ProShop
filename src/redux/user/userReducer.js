import {
  POST_SIGNUP_START,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILED,
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_START,
  ADD_CART_ITEM_FAILED,
  DELETE_CART_ITEM_START,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILED,
  // PUT_IMAGE_START,
  // PUT_IMAGE_SUCCESS,
  // PUT_IMAGE_FAILED,
} from "./userType";
const initialState = {
  UserData: {
    UserData: {},
    isLoading: false,
    error: "",
    isAuth: false,
  },
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP_START:
      return {
        ...state,
        UserData: { ...state.UserData, isLoading: true },
      };
    case POST_SIGNUP_SUCCESS:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          UserData: action.payload,
          error: "",
          isAuth: true,
        },
      };
    case POST_SIGNUP_FAILED:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          error: action.payload,
        },
      };
    case POST_LOGIN_START:
      return {
        ...state,
        UserData: { ...state.UserData, isLoading: true },
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          UserData: action.payload,
          error: "",
          isAuth: true,
        },
      };
    case POST_LOGIN_FAILED:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          error: action.payload,
        },
      };
    case GET_PROFILE_START:
      return {
        ...state,
        UserData: { ...state.UserData, isLoading: true },
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          UserData: action.payload,
          error: "",
          isAuth: true,
        },
      };
    case GET_PROFILE_FAILED:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          error: action.payload,
        },
      };
    case ADD_CART_ITEM_START:
      return {
        ...state,
        UserData: { ...state.UserData, isLoading: true },
      };
    case ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        UserData: {
          UserData: action.payload,
          isLoading: false,
          error: "",
        },
      };
    case ADD_CART_ITEM_FAILED:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          error: action.payload,
        },
      };
      case DELETE_CART_ITEM_START:
      return {
        ...state,
        UserData: { ...state.UserData, isLoading: true },
      };
    case DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        UserData: {
          UserData: action.payload,
          isLoading: false,
          error: "",
        },
      };
    case DELETE_CART_ITEM_FAILED:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          error: action.payload,
        },
      };
    //   case PUT_IMAGE_START:
    //   return {
    //     ...state,
    //     UserData: { ...state.UserData, isLoading: true },
    //   };
    // case PUT_IMAGE_SUCCESS:
    //   return {
    //     ...state,
    //     UserData: {
    //       UserData: { ...state.UserData.UserData,profileImage: action.payload},
    //       isLoading: false,
    //       error: "",
    //     },
    //   };
    // case PUT_IMAGE_FAILED:
    //   return {
    //     ...state,
    //     UserData: {
    //       ...state.UserData,
    //       isLoading: false,
    //       error: action.payload,
    //     },
    //   };
    default:
      return state;
  }
};

export default userReducer;
