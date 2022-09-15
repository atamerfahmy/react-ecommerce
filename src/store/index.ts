import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { baseURL } from "../utils/apiClient";
import cartSlice from "./slices/cart/cart.slice";
import productSlice from "./slices/products/product.slice";
import userSlice from "./slices/user/user.slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: baseURL,
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
