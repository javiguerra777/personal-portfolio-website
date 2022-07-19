import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
background-color: #081448;
display: flex;
flex-direction: row;
height: 2em;
width: 100%;
position: relative;
z-index: 999;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar/>
    </HeaderWrapper>
  )
}

export default Header;