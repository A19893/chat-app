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
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
