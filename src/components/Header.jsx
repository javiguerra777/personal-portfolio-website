import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
background-color: #333333;
display: flex;
flex-direction: row;
height: 5%;
width: 100%;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar/>
    </HeaderWrapper>
  )
}

export default Header;