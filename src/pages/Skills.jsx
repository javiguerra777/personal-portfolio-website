import React from 'react';
import styled from 'styled-components';
import CanvasComponent from '../components/CanvasComponent';
const SkillsWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 5vh;
h1, h2, h3 {
  text-align: center;
}
header, footer {
  background-color: #282157;
  color: white;
  height: auto;
  width: 100%;
  padding-top: .1em;
  padding-bottom: .5em;
}

`;
const Skills = () => {  
  // prevent 
  window.addEventListener(
    "keydown",
    (e) => {
      if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
        e.code
      )) {
        e.preventDefault();
      }
    },
    false
  );
  return (
    <SkillsWrapper className='info'>
      <header>
      <h2>Programming Skills RPG</h2>
      </header>
      <CanvasComponent />
      <footer>
        <h2>Game Description</h2>
        <p>This game was put together by me.</p>
        <h3>Instructions on how to play</h3>
        <p>Player Movement:</p>
        <ul>
          <li>Move Up: W Key</li>
          <li>Move Down: S Key</li>
          <li>Move Left: A Key</li>
          <li>Move Right: D Key</li>
          {/* <li>Run: Hold Space Bar</li> */}
          <li>Jump: X Key</li>
        </ul>
      </footer>
    </SkillsWrapper>
  )
};

export default Skills;