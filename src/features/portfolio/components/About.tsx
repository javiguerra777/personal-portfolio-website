import React, { FC } from 'react'
import styled from 'styled-components';

const AboutWrapper = styled.div`
  height: 400px;
`;
const About: FC = () => {
  return (
    <AboutWrapper id="about">About</AboutWrapper>
  )
}

export default About;
