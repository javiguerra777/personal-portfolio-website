import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { EnvironmentBaseUrl } from '../../../environment/EnvironmentBaseUrl';

interface Project {
  _id: string;
  name: string;
  deployedLink: string;
  description: string;
  image: string;
  link: string;
}
const ProjectsApi = createApi({
  reducerPath: '/projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: EnvironmentBaseUrl }),
  tagTypes: ['Projects'],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => 'api/projects',
      providesTags: ['Projects'],
    }),
  }),
});

export const { useGetProjectsQuery } = ProjectsApi;
export default ProjectsApi;
