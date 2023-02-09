import {
  POST_SIGNUP_START,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILED,
} from "./userType";
const initialState = {
  UserData: {
    UserData: {},
    isLoading: false,
    error: "",
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
    default:
      return state;
  }
};

export default userReducer;
