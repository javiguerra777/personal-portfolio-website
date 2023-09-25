import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const SideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSideOpen(state) {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { toggleSideOpen } = SideBarSlice.actions;
export default SideBarSlice.reducer;
