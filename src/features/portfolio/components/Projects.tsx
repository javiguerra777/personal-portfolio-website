import React, { FC } from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  height: 400px;
`;
const Projects: FC = () => {
  return (
    <ProjectWrapper id="projects">Projects</ProjectWrapper>
  )
}

export default Projects