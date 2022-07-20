import React from 'react'
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux/es/exports';
import { displayActiveProject } from '../store/projectSlice';
import { BsMoonStars } from 'react-icons/bs';

const ProjectWrapper = styled.main`
  background: rgba(0, 0, 0, .5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left:0;
  z-index: 3;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
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
ul {
  border-top: #f0f0f0 solid 1px;
  list-style-type: none;
  width: 80%;
}
li {
  margin-top: 1em;
}
.project {
  overflow-y: scroll;
  background-color: #1a2c80;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2em;
  width: 60%;
  top: 1em;
  max-height: 85%;
  position: relative;
}
.project-header {
  background-color: #f0f0f0;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 2em;
  width: 100%;
  button {
    border: none;
    border-radius: 2em;
    height: 100%;  
  }
}
@media (max-width: 1200px){
  .project {
    width: 80%;
  }
}
`;
const Project = ({ project }) => {
  const dispatch = useDispatch();
  const returnToProjects = () => {
    dispatch(displayActiveProject(-1))
  }
  return (
    <ProjectWrapper key={nanoid()}>
      <section className='project webkit'>
        <header className='project-header'>
          <p></p>
          <h2>Additional Details</h2>
          <button onClick={returnToProjects}><BsMoonStars size={30} /></button>
      </header>
              <h2>{project.project}</h2>
              <a className='image-link' href={project.url} target="blank">
                <img src={project.image} alt={`${project.project} project`} />
              </a>
              <ul>
                <li><strong>Description:</strong> <span>{project.description}</span></li>
                <li><strong>How to run this project:</strong> <span>{project.howToRun}</span></li>
                <li><strong>What I learned: </strong><span>{project.experiences}</span></li>
            <li><strong>Additional Info:</strong> <span>{project.additionalInfo}</span></li>
        </ul>
      </section>
    </ProjectWrapper>
  )
}

export default Project;