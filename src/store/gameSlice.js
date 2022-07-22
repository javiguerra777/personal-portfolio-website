import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  canvasDetails: {
    width: 600,
    height: 500
  },
  player: {
    x: 300,
    y: 300,
    height: 30,
    width: 30,
    direction: "down"
  },
  npc: {
    x: 30,
    y: 30,
    height: 30,
    width: 30,
    direction: "down"
  },
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
    },
    changeDirection(state, { payload }) {
      state.player.direction = payload;
    }
  }
});

export const { changeX, changeY, changeDirection } = gameSlice.actions;

export default gameSlice.reducer;