import React, { FC } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux } from 'react-icons/si';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #343434;
  color: white;
  padding: 10px;
  font-family: 'Inter';
`;
const Footer: FC = () => {
  const iconSize = 40;
  return (
    <FooterWrapper>
      <div className="my-5">
        <h3 className="text-2xl font-semibold">Proudly built with</h3>
        <div className="flex flex-row w-full justify-around my-3">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            className="icons-hover"
          >
            <FaReact size={iconSize} color="aqua" />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
            className="icons-hover"
          >
            <SiTypescript size={iconSize} color="#007acc" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="icons-hover"
          >
            <SiTailwindcss size={iconSize} color="lightblue" />
          </a>
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noreferrer"
            className="icons-hover"
          >
            <FaNodeJs size={iconSize} color="limegreen" />
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
            className="icons-hover"
          >
            <SiRedux size={iconSize} color="violet" />
          </a>
        </div>
      </div>
      <div className="my-5">
        <div>
          <NavLink
            to="/readmore/attributions"
            className="mt-4 hover:underline hover:text-blue-600 text-2xl font-semibold"
          >
            Attributions {'>>'}
          </NavLink>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <a
          href="https://github.com/javiguerra777"
          target="_blank"
          rel="noreferrer"
          className="icons-hover"
        >
          <AiFillGithub size={iconSize} />
        </a>
        <a
          href="https://www.linkedin.com/in/javiermguerra01/"
          target="_blank"
          className="ml-5 icons-hover"
          rel="noreferrer"
        >
          <AiFillLinkedin size={iconSize} />
        </a>
      </div>
      <p className="text-center py-3 text-xl font-semibold">
        Javier Guerra (c) 2023
      </p>
    </FooterWrapper>
  );
};

export default Footer;
