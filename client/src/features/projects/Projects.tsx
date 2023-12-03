import React, { FC } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';
import SectionTitle from '../../common/style/SectionTitle';
import Project from './components/Project';
import { GET_PROJECTS } from './services/GetProjects.service';

const ProjectWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: black;
  font-family: 'Inter';
  width: 100%;
`;
interface ProjectType {
  _id: string;
  name: string;
  deployedLink: string;
  description: string;
  image: string;
  link: string;
}
interface ProjectData {
  projects: ProjectType[];
}
const Projects: FC = () => {
  const { loading, error, data } =
    useQuery<ProjectData>(GET_PROJECTS);
  if (loading) return <p>Loading...</p>;
  return (
    <ProjectWrapper>
      <motion.div
        className="pt-20 pb-40 flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Projects</SectionTitle>
        <ProjectsWrapper>
          {data !== undefined &&
            data.projects.map((project) => (
              <Project project={project} key={nanoid()} />
            ))}
        </ProjectsWrapper>
      </motion.div>
    </ProjectWrapper>
  );
};

export default Projects;
