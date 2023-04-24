import React, { FC } from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { nanoid } from '@reduxjs/toolkit';
import Logo from '../../../assets/logo.jpg';
import SectionTitle from '../../../common/components/SectionTitle';

const projects = [
  {
    name: 'Angular Crud App',
    description: 'Practice app to learn the basics of Angular Web Development',
    image: '',
    link: 'https://github.com/javiguerra777/angular-crud-app',
  },
  {
    name: 'Capstone Frontend',
    description: 'Capstone Frontend built with React, Typescript, socket.io/client, and Phaser',
    image: '',
    link: 'https://github.com/javiguerra777/capstone-frontend',
  },
  {
    name: 'Capstone Backend',
    description: 'Capstone Backend Server built with Node, Express, Typescript, MongoDB, and socket.io',
    image: '',
    link: 'https://github.com/javiguerra777/capstone-backend'
  },
  {
    name: 'Django Blog Server',
    description: 'Django Server to use for blogs, a practice project to learn development with Django',
    image: '',
    link: 'https://github.com/javiguerra777/django-blog-server',
  },
  {
    name: 'Practice React Native',
    description: 'App to practice the basics of React Native, Typescript, and Tailwind',
    image: '',
    link: 'https://github.com/javiguerra777/practtice-native',
  },
  {
    name: 'React Weather App',
    description: 'Weather Forecasting React Project',
    image: '',
    link: 'https://github.com/javiguerra777/weather-app-apprenticeship',
  },
  {
    name: 'React Brewery Locator App',
    description: 'Brewery Locator App using React and React Hooks',
    image: '',
    link: 'https://github.com/javiguerra777/brewery-locator',
  },
  {
    name: 'React Student Directory',
    description: 'Student Directory Web Application using React and React Hooks',
    image: '',
    link: 'https://github.com/javiguerra777/React-Student-Directory',
  },
  {
    name: 'React Game Project',
    description: 'Number guessing game using React and React Hooks',
    image: '',
    link: 'https://github.com/javiguerra777/React-Game-Project',
  },
];

const ProjectWrapper = styled.div`
  width: 100%;
`;
const Projects: FC = () => {
  return (
    <ProjectWrapper id="projects">
      <div className="pt-20 pb-10">
        <SectionTitle>
          Projects
        </SectionTitle>
        <div className="mt-5">
          <Marquee speed={50} gradient={false}>
            {projects.map((project) => (
              <div 
              className='flex flex-col items-center bg-violet-300 py-4 px-2 rounded-lg mx-10 w-60 md:w-80'
              key={nanoid()}
              >
                <img 
                src={project.image || Logo} 
                alt="project-img"
                className="w-40 h-40 rounded-lg"
                 />
                <a href={`${project.link}`} target="_blank" className="mt-5 underline text-blue-600" rel="noreferrer">Github Repo</a>
                <p className="text-lg font-bold mt-2">{project.name}</p>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </ProjectWrapper>
  )
}

export default Projects