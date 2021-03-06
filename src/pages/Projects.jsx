import React from 'react';
import Project from '../components/Project';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { displayActiveProject } from '../store/projectSlice';
import Marquee from 'react-fast-marquee';
import { nanoid } from 'nanoid';

const ProjectWrapper = styled.section`
height: 95vh;
padding-bottom: 3em;
.body{
  margin-top: 10em;
  height: 40vh;
}
header {
  background-color: #282157;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
}
.project-container {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: RGBA(0,59,89, 0.5);
  border-radius: 1em;
  width: auto;
  margin-right: 1em;
  button {
    color: white;
    border:none;
    background:none;
    width: 100%;
  }
}
.image-link {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 1em;
  img {
    justify-self: center;
    height: 10em;
    border-radius: 1em;
  }
  img:hover {
    -webkit-box-shadow: 3px 6px 27px 18px #000000; 
    box-shadow: 3px 6px 27px 18px #000000;
  }
} 
`;
const Projects = () => {
  const { projects, displayProject, activeProject } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const showActiveProject = (id) => {
    dispatch(displayActiveProject(projects[id]));
  }
  return (
    <ProjectWrapper className='info'>
      <header>
        <h2>Here are a few of my projects from my github!
        </h2>
      </header>
      <Marquee
        className='body'
        gradient={false}
        speed={70}
        pauseOnHover={false}
        pauseOnClick={false}
        delay={0}
        play={true}
        direction="left"
      >
        {projects.map((project, index) => {
          return (
            <section key={nanoid()} className='project-container'>
              <h3>{project.project}</h3>
              <a className='image-link' href={project.url} target="blank">
                <img src={project.image} alt={`${project.project} project`} />
              </a>
            <button type="button"onClick={() => showActiveProject(index)}>
              Click Here To Read More</button>
            </section>
          )
        })}
      </Marquee>
        {displayProject &&
        <Project project={activeProject}/>}      
    </ProjectWrapper>
  )
};

export default Projects