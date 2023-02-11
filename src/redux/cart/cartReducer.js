import {
  ADD_CART_DATA_SUCCESS,
  DELETE_ITEM_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./cartType";

const initialState = {
  Cart: [],
  total: 0,
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_DATA_SUCCESS:
      return {
        ...state,
        Cart: [...state.Cart, action.payload.Cart],
        // total: action.payload.total,
        // count: action.payload.count,
      };
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        Cart: action.payload.Cart,
        total: action.payload.total,
        count: action.payload.count,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        Cart: action.payload.Cart,
        total: action.payload.total,
        count: state.count - 1,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        Cart: action.payload.Cart,
        total: action.payload.total,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
