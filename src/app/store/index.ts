import { configureStore } from '@reduxjs/toolkit';
import LoadingSlice from './LoadingSlice';

const store = configureStore({
  reducer: {
    loading: LoadingSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
