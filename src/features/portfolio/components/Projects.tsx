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

const ProjectWrapper = styled(motion.div)`
  width: 100%;
  max-height: 100vh;
`;
const HorizontalScroll = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  overflow-y: hidden;
  padding: 15px 0;
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
    <ProjectWrapper
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      <div className="pt-20 pb-40">
        <SectionTitle ref={projectRef}>Projects</SectionTitle>
        <p className="md:hidden text-center mb-5 text-lg">
          Press the images for details
        </p>
        <HorizontalScroll>
          {projects.map((project) => (
            <Project project={project} key={nanoid()} />
          ))}
        </HorizontalScroll>
      </div>
    </ProjectWrapper>
  );
};

export default Projects;
