import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
// import { userApi } from "./services/userApi";
import { api } from "./services/ngbApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    // counterReducer,
    // [userApi.reducerPath]: userApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([api.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
