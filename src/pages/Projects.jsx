import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.section`
h1 {
  text-align: center;
}
header{
  background-color: yellow;
}
a {
  text-decoration: none;
  display: flex;
  justify-items: center;
}
`;
const Projects = () => {
  return (
    <ProjectWrapper>
      <header>
      <h1>Here are a few of my projects from my github <br /> Checkout the description and checkout my github
        </h1>
      <a href="https://github.com/dashboard" target="blank">My Github Portfolio</a>
      </header>
      
    </ProjectWrapper>
  )
}

export default Projects