import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../../app/store/hooks';
import UseIsInViewport from '../../../common/hooks/UseIsInViewPort';
import { setIsHeroInView } from '../../../app/store/ViewSlice';
import HeroBg from '../../../assets/3d-abstract-space-sky-with-stars-nebula.jpg';
import Astronaught from '../../../assets/favpng_astronaut-spacecraft-cartoon.png';

const WelcomeWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-image: url(${HeroBg});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  .astro-container {
    max-width: 240px;
    .astro {
      background: none;
      height: 200px;
      width: 200px;
    }
    .textbox {
      background-color: #290927;
      color: #f7e3d6;
      padding: 10px;
      border: solid 3px #6bcdbc;
      border-radius: 5px;
    }
  }
`;
const Welcome: FC = () => {
  const [hovered, setHovered] = useState(0);
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
        <div className="flex sm:flex-row justify-around flex-col mt-20 items-center">
          <motion.a
            href="#contact"
            className="flex flex-col items-center astro-container"
            whileHover={{ scale: 1.3 }}
            animate={{
              y: hovered === 1 ? 0 : [0, 50, 0],
              transition: {
                repeat: Infinity,
                duration: hovered === 1 ? 0 : 5,
              },
            }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(0)}
          >
            <div className="textbox">Click here to contact me</div>
            <img
              src={Astronaught}
              alt="astronaught"
              className="astro"
            />
          </motion.a>
          <motion.a
            href="#about"
            className="flex flex-col items-center sm:my-0 my-40 astro-container"
            whileHover={{ scale: 1.3 }}
            animate={{
              y: hovered === 2 ? 0 : [0, 50, 0],
              transition: {
                repeat: Infinity,
                duration: hovered === 2 ? 0 : 7,
              },
            }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(0)}
          >
            <div className="textbox">
              Click here to learn about me
            </div>
            <img
              src={Astronaught}
              alt="astronaught"
              className="astro"
            />
          </motion.a>
        </div>
      </div>
    </WelcomeWrapper>
  );
};

export default Welcome;
