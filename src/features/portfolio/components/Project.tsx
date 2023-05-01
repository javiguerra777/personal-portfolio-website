import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import Logo from '../../../assets/logo.jpg';
import breakpoints from '../../../common/breakpoints';

type Props = {
  project: {
    link: string;
    image: string;
    name: string;
    description: string;
    deployedLink?: string;
  };
};
const ProjectWrapper = styled(motion.div)`
  min-width: 70vw;
  min-height: 400px;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
  background-color: #ccccff;
  @media (min-width: ${breakpoints.tablet}) {
    min-width: 500px;
  }
  &:hover {
    animation: none;
  }
  .project-image {
    background-color: white;
    width: 100%;
    height: 200px;
  }
  .project-image-hover {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.53);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.3px);
    -webkit-backdrop-filter: blur(13.3px);
    border: 1px solid rgba(187, 57, 200, 0.3);
    opacity: 0.2;
  }
  .links-container {
    top: 50%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .link:hover {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
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
  const [hovered, setHovered] = useState(false);
  const iconSize = 50;
  return (
    <ProjectWrapper
      className="flex flex-col items-center p-3 rounded project mx-3 floating"
      whileHover={{ scale: 1.1 }}
    >
      <div
        className="w-full relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={project.image || Logo}
          alt="project-img"
          className={`project-image ${
            hovered && 'project-image-hover'
          }`}
        />
        {hovered && (
          <div className="links-container">
            <motion.a
              whileHover={{ scale: 1.3 }}
              href={`${project.link}`}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <AiFillGithub size={iconSize} />
            </motion.a>
            {project.deployedLink && (
              <motion.a
                whileHover={{ scale: 1.3 }}
                href={`${project.deployedLink}`}
                target="_blank"
                rel="noreferrer"
                className="link ml-8"
              >
                <CgWebsite size={iconSize} />
              </motion.a>
            )}
          </div>
        )}
      </div>
      <p className="text-lg font-bold mt-5">{project.name}</p>
      <p className="mt-2">{project.description}</p>
    </ProjectWrapper>
  );
};

export default Project;
