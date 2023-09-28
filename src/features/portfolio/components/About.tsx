import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Selfie from '../../../assets/selfie.jpg';

const AboutWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
`;
const About: FC = () => (
  <AboutWrapper
    id="about"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 1 }}
  >
    <h2 className="text-4xl text-center pt-20 font-extrabold tracking-tight michroma">
      About Me
    </h2>
    <div className="pt-10 pb-20 px-4 flex flex-col md:flex-row inter">
      <div className="w-full flex flex-row items-center justify-center p-2">
        <img src={Selfie} alt="selfie" />
      </div>
      <div className="w-full md:w-90 p-1">
        <p className="mb-4 font-semibold text-lg">
          More than a Software Developer
        </p>
        <p className="mb-4">
          My family comes first, I have a 1 year old son. I also have
          2 corgi&apos;s named Little Bear and Gibbs. I graduated from
          CSU, Stanislaus with an MBA in Finance. I most recently
          worked at Bitwise as a Software Engineer. I am currently
          building a mobile app for a potential business idea using
          React Native.
        </p>
        <p>
          The jobs I am interested in are FullStack Developer, Video
          Game Developer, and Mobile App Developer. The language I am
          most comfortable with is Javascript, but I also understand
          Typescript. I also know how to write Java, PHP and Python
          code.
        </p>
        <div className="my-3">
          <NavLink
            to="/readmore/aboutme"
            className="mt-4 hover:underline hover:text-blue-600"
          >
            More About Me {'>>'}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/readmore/testimonials"
            className="mt-4 hover:underline hover:text-blue-600"
          >
            Testimonials {'>>'}
          </NavLink>
        </div>
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

export default About;
