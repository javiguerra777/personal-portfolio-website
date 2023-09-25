import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import SideBar from './SideBar';
import DownloadCV from './DownloadCV';
import breakpoints from '../breakpoints';

const NavBarWrapper = styled.nav`
  display: flex;
  background-color: #a78bfa;
  flex-direction: row;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -o-sticky;
  position: -ms-sticky;
  position: sticky;
  height: 75px;
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
  const [openSide, setOpenSide] = useState(false);
  const toggleOpenSide = () => {
    setOpenSide((prev) => !prev);
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
      <div className="flex flex-row justify-between links sm-hidden">
        <NavLink to="/jobs" className="hover-line">
          Jobs
        </NavLink>
        <NavLink to="/projects" className="hover-line">
          Projects
        </NavLink>
        <NavLink to="/contact" className="hover-line">
          Contact
        </NavLink>
      </div>
      <div className="sm-hidden">
        <DownloadCV />
      </div>
      <button
        type="button"
        className="sm-active bg-white p-2.5 rounded-full hover:bg-zinc-500 absolute right-1"
        onClick={toggleOpenSide}
      >
        <GiHamburgerMenu color="black" size={25} />
      </button>
      <SideBar toggleOpenSide={toggleOpenSide} open={openSide} />
    </NavBarWrapper>
  );
};

export default NavBar;
