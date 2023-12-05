import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
  isReadMoreOpen: true,
};

const SideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSideOpen(state) {
      state.isOpen = !state.isOpen;
    },
    toggleReadMoreOpen(state) {
      state.isReadMoreOpen = !state.isReadMoreOpen;
    },
  },
});
export const { toggleSideOpen, toggleReadMoreOpen } =
  SideBarSlice.actions;
export default SideBarSlice.reducer;
