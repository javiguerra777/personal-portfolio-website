import { configureStore } from '@reduxjs/toolkit';
import LoadingSlice from './LoadingSlice';
import ViewSlice from './ViewSlice';
import SideBarSlice from './SideBarSlice';

const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    view: ViewSlice,
    sidebar: SideBarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
