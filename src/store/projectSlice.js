import { createSlice } from "@reduxjs/toolkit";
import projects from "../data/projects.json";
const initialState = {
  projects,
  activeProject : -1,
  displayProject: false,
  play: true
}
export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    displayActiveProject(state, { payload }) {
      state.activeProject = payload;
      state.displayProject = !state.displayProject;
      state.play = !state.play;
    }
  }
});

export const { displayActiveProject } = projectSlice.actions;

export default projectSlice.reducer;