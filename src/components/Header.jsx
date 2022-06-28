import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
background-color: #333333;
display: flex;
flex-direction: row;
height: 2em;
width: 100%;
position: relative;
z-index: 1;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar/>
    </HeaderWrapper>
  )
}

export default Header;