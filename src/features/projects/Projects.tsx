import React, { FC } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';
import SectionTitle from '../../common/style/SectionTitle';
import Project from './components/Project';
import { projects } from '../portfolio/services/ProjectsService';
import breakpoints from '../../common/breakpoints';

const ProjectWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: black;
  font-family: 'Inter';
  width: 100%;
  @media (min-width: ${breakpoints.laptop}) {
    width: 1000px;
  }
`;
const Projects: FC = () => (
  <ProjectWrapper id="projects">
    <motion.div
      className="pt-20 pb-40 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      <SectionTitle>Projects</SectionTitle>
      <ProjectsWrapper>
        {projects.map((project) => (
          <Project project={project} key={nanoid()} />
        ))}
      </ProjectsWrapper>
    </motion.div>
  </ProjectWrapper>
);

export default Projects;
