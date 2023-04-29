import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';
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
import breakpoints from '../../../common/breakpoints';

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
  .project {
    min-width: 70vw;
    min-height: 400px;
    /* From https://css.glass */
    background: rgba(194, 10, 255, 0.33);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    @media (min-width: ${breakpoints.tablet}) {
      min-width: 500px;
    }
  }
  .project-image {
    background-color: white;
    width: 100%;
    height: 200px;
  }
  .project-image:hover {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.53);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.3px);
    -webkit-backdrop-filter: blur(13.3px);
    border: 1px solid rgba(187, 57, 200, 0.3);
  }
  .floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
  }
  .floating:hover {
    animation: none;
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
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
    <ProjectWrapper
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      <div className="pt-20 pb-40">
        <SectionTitle ref={projectRef}>Projects</SectionTitle>
        <HorizontalScroll>
          {projects.map((project) => (
            <motion.div
              className="flex flex-col items-center p-3 rounded project mx-3 floating"
              key={nanoid()}
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={`${project.link}`}
                target="_blank"
                className="w-full"
                rel="noreferrer"
              >
                <img
                  src={project.image || Logo}
                  alt="project-img"
                  className="project-image"
                />
              </a>
              <p className="text-lg font-bold mt-5">{project.name}</p>
              <p className="mt-2">{project.description}</p>
            </motion.div>
          ))}
        </HorizontalScroll>
      </div>
    </ProjectWrapper>
  );
};

export default Projects;
