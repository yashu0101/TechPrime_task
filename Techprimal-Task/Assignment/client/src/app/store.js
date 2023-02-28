import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import shoppingReducer from "./slices/shoppingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    shopping: shoppingReducer,
  },
});
export default store;
