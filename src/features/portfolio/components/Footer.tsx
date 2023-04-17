import React, { FC } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #343434;
  color: white;
  padding: 10px;
`;
const Footer: FC = () => {
  return (
    <FooterWrapper>
      <p>Footer</p>
      <p>Add attributions in footer with links to page</p>
    </FooterWrapper>
  )
}

export default Footer;
