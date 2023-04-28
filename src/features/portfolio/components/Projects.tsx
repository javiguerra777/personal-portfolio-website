import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { nanoid } from '@reduxjs/toolkit';
import Logo from '../../../assets/logo.jpg';
import SectionTitle from '../../../common/style/SectionTitle';
import ReactLogo from '../../../assets/react.png';
import AngularLogo from '../../../assets/angular.png';
import ReactNativeLogo from '../../../assets/react_native.png';
import PhaserLogo from '../../../assets/phaser.png';
import DjangoLogo from '../../../assets/django-logo-positive.png';
import ExpressLogo from '../../../assets/express-js-icon.png';
import UseIsInViewport from '../../../common/hooks/UseIsInViewPort';
import { useAppDispatch } from '../../../app/store/hooks';
import { switchActiveView } from '../../../app/store/ViewSlice';

const projects = [
  {
    name: 'Angular Crud App',
    description:
      'Practice app to learn the basics of Angular Web Development',
    image: AngularLogo,
    link: 'https://github.com/javiguerra777/angular-crud-app',
  },
  {
    name: 'Capstone Frontend',
    description:
      'Capstone Frontend built with React, Typescript, socket.io/client, and Phaser',
    image: PhaserLogo,
    link: 'https://github.com/javiguerra777/capstone-frontend',
  },
  {
    name: 'Capstone Backend',
    description:
      'Capstone Backend Server built with Node, Express, Typescript, MongoDB, and socket.io',
    image: ExpressLogo,
    link: 'https://github.com/javiguerra777/capstone-backend',
  },
  {
    name: 'Django Blog Server',
    description:
      'Django Server to use for blogs, a practice project to learn development with Django',
    image: DjangoLogo,
    link: 'https://github.com/javiguerra777/django-blog-server',
  },
  {
    name: 'Practice React Native',
    description:
      'App to practice the basics of React Native, Typescript, and Tailwind',
    image: ReactNativeLogo,
    link: 'https://github.com/javiguerra777/practtice-native',
  },
  {
    name: 'React Weather App',
    description: 'Weather Forecasting React Project',
    image: ReactLogo,
    link: 'https://github.com/javiguerra777/weather-app-apprenticeship',
  },
  {
    name: 'React Brewery Locator App',
    description: 'Brewery Locator App using React and React Hooks',
    image: ReactLogo,
    link: 'https://github.com/javiguerra777/brewery-locator',
  },
  {
    name: 'React Student Directory',
    description:
      'Student Directory Web Application using React and React Hooks',
    image: ReactLogo,
    link: 'https://github.com/javiguerra777/React-Student-Directory',
  },
  {
    name: 'React Game Project',
    description: 'Number guessing game using React and React Hooks',
    image: ReactLogo,
    link: 'https://github.com/javiguerra777/React-Game-Project',
  },
];

const ProjectWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  .project {
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
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
      <div className="pt-20 pb-40">
        <SectionTitle ref={projectRef}>Projects</SectionTitle>
        <div className="mt-20">
          <Marquee speed={50} gradient={false}>
            {projects.map((project) => (
              <div
                className="flex flex-col items-center bg-zinc-700 text-white p-4 rounded mx-10 w-60 md:w-80 project"
                key={nanoid()}
              >
                <img
                  src={project.image || Logo}
                  alt="project-img"
                  className="w-full h-40 bg-white"
                />
                <a
                  href={`${project.link}`}
                  target="_blank"
                  className="mt-5 text-blue-400 hover:text-blue-200 hover:underline"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
                <p className="text-lg font-bold mt-2">
                  {project.name}
                </p>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Projects;
