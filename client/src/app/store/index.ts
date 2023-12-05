import { configureStore } from '@reduxjs/toolkit';
import LoadingSlice from './LoadingSlice';
import ViewSlice from './ViewSlice';
import SideBarSlice from './SideBarSlice';
import FilesApi from '../../common/api/FilesApi';
import ProjectsApi from '../../features/projects/services/ProjectsApi';
import JobsApi from '../../features/jobs/services/JobsApi';

const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    view: ViewSlice,
    sidebar: SideBarSlice,
    [FilesApi.reducerPath]: FilesApi.reducer,
    [ProjectsApi.reducerPath]: ProjectsApi.reducer,
    [JobsApi.reducerPath]: JobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      FilesApi.middleware,
      ProjectsApi.middleware,
      JobsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
