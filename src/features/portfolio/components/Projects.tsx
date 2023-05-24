import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';
import SectionTitle from '../../../common/style/SectionTitle';
import UseIsInViewport from '../../../common/hooks/UseIsInViewPort';
import { useAppDispatch } from '../../../app/store/hooks';
import { switchActiveView } from '../../../app/store/ViewSlice';
import Project from './Project';
import { projects } from '../services/ProjectsService';
import breakpoints from '../../../common/breakpoints';

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
const Projects: FC = () => {
  const dispatch = useAppDispatch();
  const projectRef = useRef(null);
  const inViewPort = UseIsInViewport(projectRef);
  useEffect(() => {
    if (inViewPort) {
      dispatch(switchActiveView('projects'));
    }
  }, [inViewPort, dispatch]);
  return (
    <ProjectWrapper id="projects">
      <motion.div
        className="pt-20 pb-40 flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <SectionTitle ref={projectRef}>Projects</SectionTitle>
        <ProjectsWrapper>
          {projects.map((project) => (
            <Project project={project} key={nanoid()} />
          ))}
        </ProjectsWrapper>
      </motion.div>
    </ProjectWrapper>
  );
};

export default Projects;
