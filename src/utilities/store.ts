import {
  applyMiddleware,
  configureStore,
  getDefaultMiddleware,
  MiddlewareArray,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "../feature/AuthSlice";

import { authApi } from "../services/authApi";
import { musicApi } from "../services/musicApi";
import queueReducer from "../services/musicSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [musicApi.reducerPath]: musicApi.reducer,
    queue: queueReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(musicApi.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
