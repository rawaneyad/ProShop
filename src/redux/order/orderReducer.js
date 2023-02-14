import {
    POST_ORDER_START,
    POST_ORDER_SUCCESS,
    POST_ORDER_FAILED,
  } from "./orderType";
  const initialState = {
    Order: { 
      order: [], isLoading: false, error: ""
     },
  };
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_ORDER_START:
        return {
          ...state,
          Order: { ...state.Order, isLoading: true },
        };
      case POST_ORDER_SUCCESS:
        return {
          ...state,
          Order: {
            ...state.Order,
            isLoading: false,
            order: action.payload,
          },
        };
      case POST_ORDER_FAILED:
        return {
          ...state,
          Order: {
            ...state.Order,
            isLoading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  