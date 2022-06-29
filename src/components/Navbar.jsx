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
  align-self: center;
  color: white;
  text-decoration: none;
}
a:hover {
  background-color: #CE9461;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  padding: 1em;
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