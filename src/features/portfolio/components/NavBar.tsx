import React, { FC } from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/logo.jpg';

const NavBarWrapper = styled.nav`
  display: flex;
  background-color: #7289DA;
  flex-direction: row;
  position: sticky;
  top: 0;
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
  const downloadCV = () => {
    console.log('downloading file');
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
           <p className="ml-3 text-xl">My Portfolio</p>
        </a>
      </div>
      <div className="flex flex-row justify-between links sm-hidden">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#jobs">Jobs</a>
      </div>
      <div className="sm-hidden">
        <button 
        className="bg-zinc-700 text-white px-4 py-2 rounded-full hover:bg-zinc-500" 
        type='button'
        onClick={downloadCV}
        >
          Download CV
        </button>
      </div>
      <div className="sm-active">
        I will be active on small screens
      </div>
    </NavBarWrapper>
  )
}

export default NavBar