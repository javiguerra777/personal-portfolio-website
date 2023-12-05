import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { EnvironmentBaseUrl } from '../../environment/EnvironmentBaseUrl';

interface File {
  public_id: string;
  url: string;
  secure_url: string;
  format: string;
  version: number;
}
const FilesApi = createApi({
  reducerPath: '/filesApi',
  baseQuery: fetchBaseQuery({ baseUrl: EnvironmentBaseUrl }),
  tagTypes: ['Files', 'CarousalImages', 'Resume'],
  endpoints: (builder) => ({
    getCarousalImages: builder.query<File[], void>({
      query: () => 'api/files/carousal_images',
      providesTags: ['CarousalImages', 'Files'],
    }),
    getResume: builder.query<File[], void>({
      query: () => 'api/files/resume',
      providesTags: ['Resume', 'Files'],
    }),
  }),
});

export const { useGetCarousalImagesQuery, useGetResumeQuery } =
  FilesApi;
export default FilesApi;
