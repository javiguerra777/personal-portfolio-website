import React, { FC } from 'react';
import styled from 'styled-components';
import SplashImg from '../../../assets/splash_img.jpg';

const WelcomeWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 100px;
  background-image: url(${SplashImg});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Welcome: FC = () => (
  <WelcomeWrapper>
    <div className="md:ml-10 ml-4">
      <p className="mb-1 text-sm text-blue-600 font-medium">
        Hello, I am...
      </p>
      <h2 className="text-3xl font-bold mb-1">Javier Guerra</h2>
      <p className="text-xl mb-2">
        <span className="text-gray-400">Professional</span>{' '}
        <span className="font-semibold">Software Developer</span>
      </p>
      <p className="sm:w-80 text-gray-400 mb-4 text-lg">
        I am familiar with fullstack development check out my
        experiences
      </p>
      <div className="flex flex-row">
        <a
          href="#contact"
          className="mr-5 bg-blue-500 text-white rounded-full px-3 py-2 hover:bg-blue-400"
        >
          Contact Me
        </a>
        <a
          href="#about"
          className="bg-zinc-700 px-3 py-2 text-white rounded-full hover:bg-zinc-500"
        >
          Learn More
        </a>
      </div>
    </div>
  </WelcomeWrapper>
);

export default Welcome;
