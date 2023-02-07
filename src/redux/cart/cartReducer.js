import {
  ADD_CART_DATA_SUCCESS,
  DELETE_ITEM_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./cartType";

const initialState = {
  Cart: [],
  // total: 0,
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_DATA_SUCCESS:
      return {
        ...state,
        Cart: [
          ...state.Cart,
          {
            qty: action.payload.qty,
            product: action.payload.product,
          },
        ],
        // total: state.Cart.reduce((cart) => state.total += (cart.qty * cart.product.price), 0),
        count: state.count + 1,
      };
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        Cart: [...state.Cart.filter((item) => item.product._id !== action.productId)],
        // total: state.Cart.reduce((cart) => cart.qty * cart.product.price, 0),
        count: state.count - 1,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        Cart: [
          ...state.Cart.map((cart) =>
            cart.product._id === action.payload
              ? { ...cart, qty: cart.qty - 1 }
              : cart
          ),
        ],
        // total: state.Cart.reduce((cart) => cart.qty * cart.product.price, 0),
        count: state.count - 1,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        Cart: [
          ...state.Cart.map((cart) =>
            cart.product._id === action.payload
              ? { ...cart, qty: cart.qty + 1 }
              : cart
          ),
        ],
        // total: state.total + state.Cart.product.price,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
