import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  canvasDetails: {
    width: 600,
    height: 500
  },
  player: {
    x: 10,
    y: 10,
    height: 30,
    width: 30,
  }
}
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeX(state, { payload }) {
      state.player.x += payload;
    },
    changeY(state, { payload }) {
      state.player.y += payload;
    }
  }
});

export const { changeX, changeY } = gameSlice.actions;

export default gameSlice.reducer;