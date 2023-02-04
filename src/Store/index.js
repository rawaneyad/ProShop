import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { proShopApi } from "./Services/Proshop";

const store = configureStore({
  reducer: {
    [proShopApi.reducerPath]: proShopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        proShopApi.middleware,
    ])
});

setupListeners(store.dispatch);

export default store;