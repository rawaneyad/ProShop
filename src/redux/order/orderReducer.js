import {
  POST_ORDER_START,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  GET_MY_ORDERS_START,
  GET_MY_ORDERS_SUCCESS,
  GET_MY_ORDERS_FAILED,
  GET_ORDER_DETAILS_START,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
} from "./orderType";
const initialState = {
  Order: {
    order: [],
    isLoading: false,
    error: "",
  },
  MyOrders: {
    myOrders: [],
    isLoading: false,
    error: "",
  },
  OrderDetails: {
    orderDetails: [],
    isLoading: false,
    error: "",
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

    case GET_MY_ORDERS_START:
      return {
        ...state,
        MyOrders: { ...state.MyOrders, isLoading: true },
      };
    case GET_MY_ORDERS_SUCCESS:
      return {
        ...state,
        MyOrders: {
          ...state.MyOrders,
          isLoading: false,
          myOrders: action.payload,
        },
      };
    case GET_MY_ORDERS_FAILED:
      return {
        ...state,
        MyOrders: {
          ...state.MyOrders,
          isLoading: false,
          error: action.payload,
        },
      };

    case GET_ORDER_DETAILS_START:
      return {
        ...state,
        OrderDetails: { ...state.OrderDetails, isLoading: true },
      };
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        OrderDetails: {
          ...state.OrderDetails,
          isLoading: false,
          orderDetails: action.payload,
        },
      };
    case GET_ORDER_DETAILS_FAILED:
      return {
        ...state,
        OrderDetails: {
          ...state.OrderDetails,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default orderReducer;
