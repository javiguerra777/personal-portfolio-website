import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height: 100%;
a {
  display: flex;
  flex-direction: row;
  align-text: center;
  color: white;
  text-decoration: none;
}
a:hover {
  background-color: purple;
  color: yellow;
}
`;
const Navbar = () => {
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="projects">Projects</Link>
      <Link to="works">Works</Link>
      <Link to="contact">Contact</Link>
    </NavWrapper>
  )
}

export default Navbar