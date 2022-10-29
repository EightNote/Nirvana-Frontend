import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utilities/store";

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string }>) => {
      if (action.payload.token) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: action.payload.token,
          })
        );
        state.token = action.payload.token;
      }
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
