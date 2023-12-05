import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { EnvironmentBaseUrl } from '../../../environment/EnvironmentBaseUrl';

interface Job {
  _id: string;
  company: string;
  workDates: string;
  startDate: string;
  endDate: string;
  description: string;
}
const JobsApi = createApi({
  reducerPath: '/jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: EnvironmentBaseUrl }),
  tagTypes: ['Jobs'],
  endpoints: (builder) => ({
    getJobs: builder.query<Job[], void>({
      query: () => 'api/jobs',
      providesTags: ['Jobs'],
    }),
  }),
});

export const { useGetJobsQuery } = JobsApi;
export default JobsApi;
