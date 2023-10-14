import React, { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import Logo from '../../../assets/logo.jpg';
import breakpoints from '../../../common/breakpoints';

type Props = {
  project: {
    link?: string;
    image: string;
    name: string;
    description: string;
    deployedLink?: string;
  };
};
const ProjectWrapper = styled(motion.div)`
  width: 90%;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin: 30px 10px 30px 10px;
  background-color: #a78bfa;
  @media (min-width: ${breakpoints.tablet}) {
    width: 500px;
  }
  &:hover {
    animation: none;
  }
  .project-image {
    background-color: white;
    width: 100%;
    height: 200px;
  }
  .links-container {
    top: 0;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .link {
    background: white;
  }
  .link:hover {
    background: rgba(0, 0, 0, 0.5);
    color: white;
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
const Project: FC<Props> = ({ project }) => {
  const iconSize = 40;
  return (
    <ProjectWrapper
      className="flex flex-col items-center p-2 rounded project mx-3 floating"
      whileHover={{ scale: 1.1 }}
    >
      <div className="w-full relative">
        <img
          src={project.image || Logo}
          alt="project-img"
          className="project-image"
        />
        <div className="links-container">
          {project.link && (
            <motion.a
              whileHover={{ scale: 1.3 }}
              href={`${project.link}`}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <AiFillGithub size={iconSize} />
            </motion.a>
          )}
          {project.deployedLink && (
            <motion.a
              whileHover={{ scale: 1.3 }}
              href={`${project.deployedLink}`}
              target="_blank"
              rel="noreferrer"
              className="link ml-2"
            >
              <CgWebsite size={iconSize} />
            </motion.a>
          )}
        </div>
      </div>
      <p className="text-lg font-bold mt-5">{project.name}</p>
      <p className="mt-2">{project.description}</p>
    </ProjectWrapper>
  );
};

export default Project;
