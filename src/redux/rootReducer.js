import { combineReducers } from "redux";
import categoriesReducer from "./categories/categoriesReducer";
import profileProductReducer from "./product profile/profileProductReducer";
import productsReducer from "./products/productsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  ProfileProduct: profileProductReducer,
  Products: productsReducer,
  Categories: categoriesReducer,
  UserData: userReducer,
});

export default rootReducer;
