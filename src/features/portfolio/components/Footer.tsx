import React, { FC, ReactNode } from 'react';
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
type AttributionProps = {
  children: ReactNode;
  link: string;
};
const AttributionLink: FC<AttributionProps> = ({
  children,
  link,
}) => (
  <a
    href={link}
    target="_blank"
    className="underline text-blue-500 hover:text-blue-300"
    rel="noreferrer"
  >
    {children}
  </a>
);
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
        <h3 className="text-2xl font-semibold">Attributions</h3>
        <p className="text-lg font-medium my-2">
          Thank you to these sites for the use of their open source
          images.
        </p>
        <div>
          <AttributionLink link="https://www.freepik.com/free-photo/blue-watercolor-splash-background_6649581.htm">
            Freepik.com
          </AttributionLink>
          <p>For the use of the splash picture</p>
        </div>
        <div>
          <AttributionLink link="https://www.vecteezy.com/vector-art/2084192-cute-astronaut-mascot-character-cartoon-vector-icon-illustration">
            Vecteezy.com
          </AttributionLink>
          <p>For the use of the astronaught logo</p>
        </div>
        <div>
          <AttributionLink link="https://angular.io/presskit">
            Angular.io
          </AttributionLink>
          <p>For the use of the Angular Logo</p>
        </div>
        <div>
          <AttributionLink link="https://brandslogos.com/d/django-logo/">
            Brandslogos.com
          </AttributionLink>
          <p>For the use of the Django Logo</p>
        </div>
        <div>
          <AttributionLink link="https://www.vhv.rs/viewpic/hwbxihm_phaser-phaser-3-logo-hd-png-download/">
            Vhv.rs
          </AttributionLink>
          <p>For the use of the Phaser Logo</p>
        </div>
        <div>
          <AttributionLink link="https://www.iconfinder.com/icons/1174949/js_react_js_logo_react_react_native_icon">
            Iconfinder.com
          </AttributionLink>
          <p>For the use of the React Logo</p>
        </div>
        <div>
          <AttributionLink link="https://uxwing.com/express-js-icon/">
            Uxwing.com
          </AttributionLink>
          <p>For the use of the Express Logo</p>
        </div>
        <div>
          <AttributionLink link="https://nicepng.com/">
            Nicepng.com
          </AttributionLink>
          <p>For the use of the React Native Logo</p>
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
