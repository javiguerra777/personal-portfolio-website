import React, { FC } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import SideBar from './SideBar';
import breakpoints from '../breakpoints';
import { useAppDispatch } from '../../app/store/hooks';
import { toggleSideOpen } from '../../app/store/SideBarSlice';
import { NavBarHeight } from '../constants/StyleVariables';

const NavBarWrapper = styled.nav`
  display: flex;
  background-color: #a78bfa;
  flex-direction: row;
  position: sticky;
  width: 100vw;
  height: ${NavBarHeight};
  top: 0;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  color: white;
  .links {
    width: 300px;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  .sm-hidden {
    display: none;
    @media (min-width: ${breakpoints.tablet}) {
      display: inherit;
    }
  }
  .sm-active {
    display: inherit;
    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`;
const NavBar: FC = () => {
  const dispatch = useAppDispatch();
  const toggleOpenSide = () => {
    dispatch(toggleSideOpen());
  };
  return (
    <NavBarWrapper>
      <div>
        <NavLink
          to="/personal-portfolio-website"
          className="flex flex-row items-center hover:underline"
        >
          <img
            src={Logo}
            alt="site-logo"
            className="logo rounded-full"
          />
          <p className="ml-3 text-xl md:text-3xl font-extrabold tracking-tight michroma">
            Javi Guerra
          </p>
        </NavLink>
      </div>
      <button
        type="button"
        className="bg-white p-2.5 mr-5 rounded-full hover:bg-zinc-500"
        onClick={toggleOpenSide}
      >
        <GiHamburgerMenu color="black" size={25} />
      </button>
      <SideBar />
    </NavBarWrapper>
  );
};

export default NavBar;
