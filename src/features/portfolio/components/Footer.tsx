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
  const iconSize= 40;
  return (
    <FooterWrapper>
      <div>
        <h3 className="text-2xl font-semibold">Proudly built with</h3>
        <div className="flex flex-row w-full justify-around my-3">
          <FaReact size={iconSize} color="aqua" />
          <SiTypescript size={iconSize} />
          <SiTailwindcss size={iconSize} color="lightblue" />
          <FaNodeJs size={iconSize} color="limegreen" />
          <SiRedux size={iconSize} color="violet" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Attributions</h3>
        <p>Img</p>
        <p>Img</p>
      </div>
      <div className="flex flex-row justify-center">
      <a href="https://github.com/javiguerra777" target="_blank">
          <AiFillGithub size={iconSize} />
        </a>
        <a href="https://www.linkedin.com/in/javiermguerra01/" target='_blank' className="ml-5">
          <AiFillLinkedin size={iconSize} />
        </a>
      </div>
    <p className="text-center py-3 text-xl font-semibold">Javier Guerra (c) 2023</p>
    </FooterWrapper>
  )
}

export default Footer;
