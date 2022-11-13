import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user=action.payload;
    },
    clearUser: (state,action) => null
  },
});

export const {setUser,clearUser}=authSlice.actions
export default authSlice.reducer
