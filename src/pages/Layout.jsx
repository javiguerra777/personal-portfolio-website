import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.main`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
`;
const Layout = () => {
  return (
    <AppWrapper>
      <section>
        <Header />
      </section>
      <section>
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
   </AppWrapper>
  )
}

export default Layout