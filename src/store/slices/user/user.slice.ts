import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      loggedIn: true,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = { ...action.payload, loggedIn: true };
    },
    removeUser: (state, action) => {
      state.value = { loggedIn: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
