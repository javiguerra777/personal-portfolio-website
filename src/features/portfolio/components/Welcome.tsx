import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../../app/store/hooks';
import UseIsInViewport from '../../../common/hooks/UseIsInViewPort';
import { setIsHeroInView } from '../../../app/store/ViewSlice';
import HeroBg from '../../../assets/3d-abstract-space-sky-with-stars-nebula.jpg';

const WelcomeWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-image: url(${HeroBg});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;
const Welcome: FC = () => {
  const dispatch = useAppDispatch();
  const welcomeRef = useRef(null);
  const isInView = UseIsInViewport(welcomeRef);
  useEffect(() => {
    if (isInView) {
      dispatch(setIsHeroInView(true));
    } else {
      dispatch(setIsHeroInView(false));
    }
  }, [isInView, dispatch]);
  return (
    <WelcomeWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      ref={welcomeRef}
    >
      <div className="md:ml-10 ml-4">
        <p className="mb-1 text-sm font-medium pt-6">
          Hello, I am...
        </p>
        <h2 className="text-3xl text-gray-400 font-bold mb-1">
          Javier Guerra
        </h2>
        <p className="text-xl mb-2">
          <span>Professional</span>{' '}
          <span className="font-semibold text-gray-400">
            Software Developer
          </span>
        </p>
        <p className="sm:w-80 mb-2 text-lg">
          I am familiar with fullstack development check out my
          experiences
        </p>
        <p>
          Email:{' '}
          <a
            href="mailto: javier.guerra1001@gmail.com"
            className="text-blue-300 font-semibold underline hover:text-violet-800"
          >
            javier.guerra1001@gmail.com
          </a>
        </p>
        <p>
          Phone:{' '}
          <a
            href="tel:209-565-0901"
            className="text-blue-300 font-semibold underline hover:text-violet-800"
          >
            (209)565-0901
          </a>
        </p>
        <div className="flex flex-row mt-4">
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
};

export default Welcome;
