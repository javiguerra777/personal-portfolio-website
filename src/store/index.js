import { configureStore } from "@reduxjs/toolkit";
import messageReducer from './messageSlice';
import countReducer from './countSlice';
import projectReducer from './projectSlice';

export default configureStore({
  reducer: {
    message: messageReducer,
    count: countReducer,
    project: projectReducer,
  }
});