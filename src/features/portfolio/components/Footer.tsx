import React, { FC } from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux } from 'react-icons/si';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #343434;
  color: white;
  padding: 10px;
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
          >
            <FaReact size={iconSize} color="aqua" />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <SiTypescript size={iconSize} color="#007acc" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SiTailwindcss size={iconSize} color="lightblue" />
          </a>
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noreferrer"
          >
            <FaNodeJs size={iconSize} color="limegreen" />
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            <SiRedux size={iconSize} color="violet" />
          </a>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-2xl font-semibold">Attributions</h3>
        <p className="text-lg font-medium my-2">
          Thank you to these sites for the use of their open source
          images.
        </p>
        <div>
          <a
            href="https://www.freepik.com/free-photo/blue-watercolor-splash-background_6649581.htm"
            target="_blank"
            className="underline text-blue-500"
            rel="noreferrer"
          >
            Freepik.com
          </a>
          <p>For the use of the splash picture</p>
        </div>
        <div>
          <a
            href="https://www.vecteezy.com/vector-art/2084192-cute-astronaut-mascot-character-cartoon-vector-icon-illustration"
            target="_blank"
            className="underline text-blue-500"
            rel="noreferrer"
          >
            Vecteezy.com
          </a>
          <p>For the use of the astronaught logo</p>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <a
          href="https://github.com/javiguerra777"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={iconSize} />
        </a>
        <a
          href="https://www.linkedin.com/in/javiermguerra01/"
          target="_blank"
          className="ml-5"
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
