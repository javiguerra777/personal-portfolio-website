import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeView: '',
};
const ViewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    switchActiveView(state, { payload }) {
      state.activeView = payload;
    },
  },
});
export const { switchActiveView } = ViewSlice.actions;
export default ViewSlice.reducer;
