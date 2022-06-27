import { configureStore } from "@reduxjs/toolkit";
import messageReducer from './messageSlice';
import countReducer from './countSlice';
export default configureStore({
  reducer: {
    message: messageReducer,
    count: countReducer,
  }
});