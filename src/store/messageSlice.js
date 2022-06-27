import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
    input: ''
  },
  reducers: {
  addMessage(state, { payload }) {
      state.messages = [...state.messages, payload]
    },
  changeInput(state, { payload }) {
    state.input = payload;
  }
  },
 
});

export const { addMessage, changeInput } = messageSlice.actions;
export default messageSlice.reducer;