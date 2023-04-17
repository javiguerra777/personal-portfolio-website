import React, { FC } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';

const PortfolioWrapper = styled.div`
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;
const Portfolio: FC = () => {
  return (
    <PortfolioWrapper>
      {/* Hidden div to nav back to top */}
      <div id="top" />
      <NavBar />
      <Welcome />
      <About />
      <Projects />
      <Jobs />
      <Contact />
      <Footer />
    </PortfolioWrapper>
  )
}

export default Portfolio;
