// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{access: string}>) {
      state.isAuthenticated = true;
      state.token = action.payload.access;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;