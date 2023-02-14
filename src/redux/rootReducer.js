import { combineReducers } from "redux";
import categoriesReducer from "./categories/categoriesReducer";
import orderReducer from "./order/orderReducer";
import profileProductReducer from "./product profile/profileProductReducer";
import productsReducer from "./products/productsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  ProfileProduct: profileProductReducer,
  Products: productsReducer,
  Categories: categoriesReducer,
  UserData: userReducer,
  Order: orderReducer,
});

export default rootReducer;
