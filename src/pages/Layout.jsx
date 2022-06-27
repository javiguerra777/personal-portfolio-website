import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.section`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
`;
const Layout = () => {
  return (
   <AppWrapper> 
     <Header />
     <Outlet />
     <Footer />
   </AppWrapper>
  )
}

export default Layout