import React, {useState} from 'react';
import styled from 'styled-components';
import Message from './Message';

const FooterWrapper = styled.footer`
background-color: #333333;
color: white;
display: flex;
flex-direction: row;
position: fixed;
bottom: 0;
height: 5%;
width: 100%;
justify-content:space-between;
`;
const Footer = () => {
  const [displayComponent, setDisplayComponent] = useState(true);
  const toggleDisplay = () => {
    if (displayComponent) {
      setDisplayComponent(false);
    } else if (!displayComponent) {
      setDisplayComponent(true);
    }
  }
  return (
    <FooterWrapper>
      <div>
        <p>Copyright 2022. All Rights Reserved</p>
      </div>
        <button type='button' onClick={toggleDisplay}>Display Bot</button>
      {displayComponent && <Message />}
    </FooterWrapper>
  )
}

export default Footer