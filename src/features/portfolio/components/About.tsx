import React, { FC } from 'react'
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Logo from '../../../assets/logo.jpg';


const AboutWrapper = styled.div`
  width: 100%;
  .selfie {
    border: solid 5px dodgerblue;
  }
`;
const About: FC = () => {
  return (
    <AboutWrapper id="about">
      <div className='pt-20 pb-5 px-4 flex flex-col md:flex-row'>
        <div className="w-full flex flex-row items-center justify-center p-1">
          <img className="h-96 w-96 selfie" src={Logo} />
        </div>
        <div className="w-full md:w-90 p-1">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">About Me</h2>
          <p className="mb-4 font-semibold text-lg">Software Developer</p>
          <p className="mb-4">I currently work as a React Apprentice at Bitwise. I am familiar with fullstack development. I understand how to create web application using React and a bit of Angular. On the server side I am familiar with Express, Ruby on Rails, and Django. I have briefly started learning how to write server side applications using the .Net framework and I would love to continue learning more about the .Net framework due to its popularity.</p>
          <p>The language I am most comfortable with is Javascript, but I also understand Typescript as well. I know some Java and Python as well.</p>
          <div className="flex flex-row mt-7">
            <a href="https://github.com/javiguerra777" target="_blank">
              <AiFillGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/javiermguerra01/" target='_blank' className="ml-5">
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
}

export default About;
