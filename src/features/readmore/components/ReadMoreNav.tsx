import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../assets/logo.jpg';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #a78bfa;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -o-sticky;
  position: -ms-sticky;
  position: sticky;
  height: 75px;
  padding: 15px 10px;
  .logo {
    width: 50px;
    height: 50px;
  }
`;
const ReadMoreNav: FC = () => (
  <Wrapper>
    <NavLink
      to="/personal-portfolio-website"
      className="flex flex-row items-center hover:underline"
    >
      <img className="logo rounded-full" src={Logo} alt="logo" />
      <p className="ml-3 text-xl md:text-3xl font-extrabold tracking-tight michroma">
        Javi Guerra
      </p>{' '}
    </NavLink>
  </Wrapper>
);

export default ReadMoreNav;
