/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import projects from '../data/projects.json';
import { nanoid } from '@reduxjs/toolkit';

const ProjectWrapper = styled.section`
background-color: #FCFFE7;
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
.header-github {
  img {
    height: 5em;
    border-radius: 15em;
  }
  img:hover {
    box-shadow: 10px 5px 5px red;
  }
}
.project-container {
  color: white;
  background-color: #DEA057;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1em;
  width 80%;
  height: auto;
  margin-bottom: 1em;  
}
header {
  background-color: #E0D8B0;
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
        <h2>Here are a few of my projects from my github! <br /> Checkout the description and checkout my github!
        </h2>
        <a className='header-github' href="https://github.com/dashboard" target="blank"><img src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.jpg" alt="github portfolio logo"/></a>
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