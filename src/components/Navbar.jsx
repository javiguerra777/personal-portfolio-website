import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import navInfo from '../data/navbar.json';
import { nanoid } from 'nanoid';

const NavWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height: 100%;
a {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  color: white;
  text-decoration: none;
}
a:hover {
  background-color: #282157;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  opacity: 1;
}
.active {
  color: #f2b01e;
  background-color: white;
  opacity: 0.4;
}
`;

const Navbar = () => {
  const {pathname} = useLocation();
  return (
    <NavWrapper>
      {navInfo.map((nav) => {
        return (
          <Link key={nanoid()} className={nav.path === pathname ? 'active' : ''} to={nav.link}>{nav.to}</Link>)
      })}
    </NavWrapper>
  );
};

export default Navbar;