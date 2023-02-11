import {
  POST_SIGNUP_START,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILED,
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
  ADD_CART_DATA_SUCCESS,
  ADD_CART_DATA_START,
  ADD_CART_DATA_FAILED,
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
    case ADD_CART_DATA_START:
      return {
        ...state,
        UserData: { ...state.UserData, isLoading: true },
      };
    case ADD_CART_DATA_SUCCESS:
      return {
        ...state,
        UserData: {
          UserData: action.payload,
          isLoading: false,
          error: "",
        },
      };
    case ADD_CART_DATA_FAILED:
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
