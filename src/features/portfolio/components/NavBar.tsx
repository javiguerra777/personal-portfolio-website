import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../../assets/logo.jpg';
import SideBar from './SideBar';
import DownloadCV from '../../../common/components/DownloadCV';

const NavBarWrapper = styled.nav`
  display: flex;
  background-color: #7289DA;
  flex-direction: row;
  position: sticky;
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
    @media (min-width: 800px) {
      display: inherit;
    }
  }
  .sm-active {
    display: inherit;
    @media (min-width: 800px) {
      display: none;
    }
  }
`;
const NavBar: FC = () => {
  const [openSide, setOpenSide] = useState(false);
  const toggleOpenSide = () => {
    setOpenSide((prev) => !prev);
  }
  return (
    <NavBarWrapper>
      <div>
        <a href="#top" className="flex flex-row items-center">
          <img 
          src={Logo}
           alt="site-logo" 
           className="logo rounded-full"
           />
           <p className="ml-3 text-xl md:text-3xl font-extrabold tracking-tight">My Portfolio</p>
        </a>
      </div>
      <div className="flex flex-row justify-between links sm-hidden">
        <a href="#about" className="hover-line">About</a>
        <a href="#projects" className="hover-line">Projects</a>
        <a href="#jobs" className="hover-line">Jobs</a>
        <a href="#contact" className="hover-line">Contact</a>
      </div>
      <div className="sm-hidden">
        <DownloadCV />
      </div>
      <button 
      className="sm-active bg-zinc-700 p-2.5 rounded-full hover:bg-zinc-500 absolute right-1"
      onClick={toggleOpenSide}
      >
        <GiHamburgerMenu size={25} />
      </button>
      {openSide && <SideBar 
      toggleOpenSide={toggleOpenSide} 
      />}
    </NavBarWrapper>
  )
}

export default NavBar