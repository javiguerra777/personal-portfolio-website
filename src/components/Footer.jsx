import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
background-color: #333333;
color: white;
position: absolute;
bottom: 0;
height: 5%;
width: 100%;
`;
const Footer = () => {
  return (
    <FooterWrapper>Footer</FooterWrapper>
  )
}

export default Footer