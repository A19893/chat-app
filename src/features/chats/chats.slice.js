import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedChat: null,
  chats: []
};

const chatSlice = createSlice({
  name: "chats",
  initialState: initialState,
  reducers: {
    addSelectedChat: (state, action) => {
      if (!state.chats.some(chat => chat._id === action.payload._id)) {
        console.log("aaya")
        state.chats = [action.payload, ...state.chats];
      }
      state.selectedChat = action.payload;
    },
    addAllChats: (state,action) => {
        state.chats = action.payload;
    },
    removeSelectedChat: (state) => {
      state.selectedChat = null;
    }

  },
});

export const {addSelectedChat, addAllChats, removeSelectedChat } = chatSlice.actions;
export default chatSlice.reducer;
