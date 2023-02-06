import { ADD_CART_DATA_SUCCESS, DELETE_ITEM_FROM_CART } from "./cartType";

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
        Cart: [...state.Cart, {qty: action.payload.qty, product: action.payload.product}],
        total: state.total + action.payload.product.price,
        count: state.count + 1,
      };
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        Cart: [...state.Cart.filter((item) => item.product._id !== action.productId)],
        total: state.total - action.price,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
