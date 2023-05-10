import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeView: '',
  isHeroInView: false,
};
const ViewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    switchActiveView(state, { payload }) {
      state.activeView = payload;
    },
    setIsHeroInView(state, { payload }) {
      state.isHeroInView = payload;
    },
  },
});
export const { switchActiveView, setIsHeroInView } =
  ViewSlice.actions;
export default ViewSlice.reducer;
