import { createSlice } from "@reduxjs/toolkit";
import projects from "../data/projects.json";
const initialState = {
  projects,
  activeProject : {},
  displayProject: false,
}
export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    displayActiveProject(state, { payload }) {
      state.activeProject = payload;
      state.displayProject = !state.displayProject;
    }
  }
});

export const { displayActiveProject } = projectSlice.actions;

export default projectSlice.reducer;