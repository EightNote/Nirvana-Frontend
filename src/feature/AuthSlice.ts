import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utilities/store";

export interface AuthState {
  token: string | null;
  username: string | null;
}

const initialState: AuthState = {
  token: null,
  username: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ token: string; username: string }>
    ) => {
      if (action.payload.token) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: action.payload.token,
            username: action.payload.username,
          })
        );
        state.token = action.payload.token;
      }
      console.log(action.payload.username);
    },
    logout: (state) => {
      localStorage.clear();
      state.token = null;
      // window.location.href = "http://localhost:3000/sign-in";
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
