import React, { FC } from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { nanoid } from '@reduxjs/toolkit';
import Logo from '../../../assets/logo.jpg';

const arr = ['test', 'items', 'plz', 'marquee', 'react']

const ProjectWrapper = styled.div`
  width: 100%;
`;
const Projects: FC = () => {
  return (
    <ProjectWrapper id="projects">
      <div className="pt-20 pb-10">
        <h2 className="text-center tracking-light text-3xl font-extrabold">Projects</h2>
        <div className="mt-5">
          <Marquee speed={50}>
            {arr.map((item) => (
              <div 
              className='flex flex-col items-center bg-blue-300 p-4 rounded-lg mx-10'
              key={nanoid()}
              >
                <img 
                src={Logo} 
                alt="project-img"
                className="w-40 h-40"
                 />
                <p>Link to github</p>
                <p>{item}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </ProjectWrapper>
  )
}

export default Projects