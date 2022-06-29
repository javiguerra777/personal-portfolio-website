import React, {useState} from 'react';
import styled from 'styled-components';
import Message from './Message';
import { TiMessages } from 'react-icons/ti';
const FooterWrapper = styled.footer`
background-color: #CE9461;
color: white;
display: flex;
flex-direction: row;
position: fixed;
bottom: 0;
height: 5%;
width: 100%;
justify-content:space-between;
.copyright {
  display: flex;
  flex-direction: row;
  align-self:center;
}
button {
  background-color: #FCFFE7;
  width: 4em;
  border-radius: 3em;
  cursor: pointer;
}
button: hover {
  background-color: white;
}
`;
const Footer = () => {
  const [displayComponent, setDisplayComponent] = useState(false);
  const toggleDisplay = () => {
    if (displayComponent) {
      setDisplayComponent(false);
    } else if (!displayComponent) {
      setDisplayComponent(true);
    }
  }
  return (
    <FooterWrapper>
      <section className='copyright'>
        <p>Copyright 2022. All Rights Reserved</p>
      </section>
        <button type='button' onClick={toggleDisplay}><TiMessages/></button>
      {displayComponent && <Message />}
    </FooterWrapper>
  )
}

export default Footer