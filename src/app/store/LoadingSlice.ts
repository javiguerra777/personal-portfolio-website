import { createSlice } from '@reduxjs/toolkit';

type State = {
  loading: boolean;
}
const initialState = {
  loading: true,
} as State;
const LoadingSlice = createSlice({
  name: 'Loading',
  initialState,
  reducers: {
    setLoading(state, { payload }){
      state.loading = payload;
    }
  },
});
export const { setLoading } = LoadingSlice.actions;
export default LoadingSlice.reducer;