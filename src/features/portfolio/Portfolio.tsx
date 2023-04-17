import React, { FC } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

const PortfolioWrapper = styled.div`
  background: whitesmoke;
  height: 100%;
`;
const Portfolio: FC = () => {
  return (
    <PortfolioWrapper>
      <NavBar />
      <Welcome />
      <Footer />
    </PortfolioWrapper>
  )
}

export default Portfolio;
