import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Selfie from '../../../assets/selfie.jpeg';
import UseIsInViewport from '../../../common/hooks/UseIsInViewPort';
import { useAppDispatch } from '../../../app/store/hooks';
import { switchActiveView } from '../../../app/store/ViewSlice';

const AboutWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
  .selfie-container {
    height: 500px;
    overflow-y: hidden;
  }
  .selfie {
    position: relative;
    top: 60px;
  }
`;
const About: FC = () => {
  const dispatch = useAppDispatch();
  const aboutRef = useRef(null);
  const isInViewPort = UseIsInViewport(aboutRef);
  useEffect(() => {
    if (isInViewPort) {
      dispatch(switchActiveView('about'));
    }
  }, [isInViewPort, dispatch]);
  return (
    <AboutWrapper
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      <h2
        ref={aboutRef}
        className="text-4xl text-center pt-20 font-extrabold tracking-tight michroma"
      >
        About Me
      </h2>
      <div className="pt-20 pb-20 px-4 flex flex-col md:flex-row inter">
        <div className="w-full flex flex-row items-center justify-center p-1 selfie-container">
          <img className="selfie" src={Selfie} alt="selfie" />
        </div>
        <div className="w-full md:w-90 p-1">
          <p className="mb-4 font-semibold text-lg">
            Software Developer
          </p>
          <p className="mb-4">
            I graduated from Stanislaus State in 2022 where I obtained
            my MBA in Finance. I graduated from the University of the
            Pacific, where I obtained my Bachelor&apos;s Degree in
            Business Administration. I went to Venture Academy high
            school in Stockton, CA, where I graduated in 2016. I am
            currently building a mobile app for a potential business
            idea using React Native.
          </p>
          <p className="mb-4">
            I currently work as a React Apprentice at Bitwise. I am
            familiar with fullstack development. I understand how to
            create web application using React and a bit of Angular.
            On the server side I am familiar with Express, Ruby on
            Rails, and Django. I have briefly started learning how to
            write server side applications using the .Net framework
            and I would love to continue learning more about the .Net
            framework due to its popularity.
          </p>
          <p>
            The jobs I am interested in are FullStack Developer, Video
            Game Developer, and Mobile App Developer. The language I
            am most comfortable with is Javascript, but I also
            understand Typescript. I also know how to write Java, PHP
            and Python code.
          </p>
          <div className="flex flex-row mt-7">
            <a
              href="https://github.com/javiguerra777"
              target="_blank"
              rel="noreferrer"
              className="icons-hover"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/javiermguerra01/"
              target="_blank"
              className="ml-5 icons-hover"
              rel="noreferrer"
            >
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
