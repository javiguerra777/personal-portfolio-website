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
z-index: 999;
justify-content:space-between;
.copyright {
  display: flex;
  flex-direction: row;
  align-self:center;
}
.footer-images {
  img {
    height: 100%;
    border-radius: 1em;
    margin-right: 2em;
  }
  img:hover {
  -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 11px 12px 25px 18px rgba(0,0,0,0); 
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 11px 12px 25px 18px rgba(0,0,0,0);

  }
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
        <p>Copyright 2022</p>
      </section>
      <section className='footer-images'>
        <a href="https://github.com/javiguerra777" target="blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github profile link" /></a>
        <a href="https://twitter.com/Jhoodie777" target="blank"><img src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png" alt="twitter logo" /></a>
      </section>
      <button type='button' onClick={toggleDisplay}><TiMessages /></button>
      {displayComponent && <Message displayComponent={displayComponent} />}
    </FooterWrapper>
  );
};

export default Footer;