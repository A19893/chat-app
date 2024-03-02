import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInState: false,
  user: null,
  token: ""
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.loggedInState = true;
      state.user = action.payload?.data;
      state.token = action.payload?.token
    },
    removeUser: (state,action) => {
      state.loggedInState = false;
      state.user = {};
      state.token = "";
    }
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
