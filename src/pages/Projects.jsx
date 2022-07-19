/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import projects from '../data/projects.json';
import { nanoid } from '@reduxjs/toolkit';

const ProjectWrapper = styled.section`
background: url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg);
padding-bottom: 3em;
.body {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items:center;
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
.project-container {
  color: white;
  background-color: #1a2c80;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1em;
  width 80%;
  height: auto;
  margin-bottom: 1em;  
}
header {
  background-color: #282157;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
}
ul {
  border-top: black solid 1px;
  list-style-type: none;
  width: 80%;
}
li {
  margin-top: 1em;
}
`;
const Projects = () => {
  return (
    <ProjectWrapper>
      <header>
        <h2>Here are a few of my projects from my github!
        </h2>
      </header>
      <section className='body'>
        {projects.map((project) => {
          return (
            <section className='project-container' key={nanoid()}>
              <h2>{project.project}</h2>
              <a className='image-link' href={project.url} target="blank">
                <img src={project.image} alt={`${project.project} project image`} />
              </a>
              <ul>
                <li><strong>Description:</strong> <span>{project.description}</span></li>
                <li><strong>How to run this project:</strong> <span>{project.howToRun}</span></li>
                <li><strong>What I learned: </strong><span>{project.experiences}</span></li>
                <li><strong>Additional Info:</strong> <span>{project.additionalInfo}</span></li>
              </ul>
            </section>
          )
        })}
      </section>
    </ProjectWrapper>
  )
};

export default Projects