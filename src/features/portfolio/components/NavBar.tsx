import React, { FC } from 'react'
import styled from 'styled-components'

const NavBarWrapper = styled.nav`
  display: flex;
  background-color: #343434;
  flex-direction: row;
  postition: sticky;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  color: white;
  .links {
    width: auto;
    width: 200px;
  }
`;
const NavBar: FC = () => {
  const downloadCV = () => {
    console.log('downloading file');
  }
  return (
    <NavBarWrapper>
      <div>
        logo
      </div>
      <div className="flex flex-row justify-between links">
        <a href="#about">About</a>
        <a href="#about">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <button 
        className="bg-blue-400 text-white p-2 w-35 rounded-full" 
        type='button'
        onClick={downloadCV}
        >
          Download CV
        </button>
      </div>
    </NavBarWrapper>
  )
}

export default NavBar