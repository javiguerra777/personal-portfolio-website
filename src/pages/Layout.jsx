import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.main`
background: url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg);
background-size: cover;
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