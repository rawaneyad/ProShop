import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import categoriesReducer from "./categories/categoriesReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  Products: productsReducer,
  Categories: categoriesReducer,
  Cart: cartReducer,
});

export default rootReducer;
