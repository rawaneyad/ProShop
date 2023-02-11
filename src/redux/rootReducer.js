import { combineReducers } from "redux";
// import cartReducer from "./cart/cartReducer";
import categoriesReducer from "./categories/categoriesReducer";
import profileProductReducer from "./product profile/profileProductReducer";
import productsReducer from "./products/productsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  ProfileProduct: profileProductReducer,
  Products: productsReducer,
  Categories: categoriesReducer,
  // Cart: cartReducer,
  UserData: userReducer,
});

export default rootReducer;
