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
      <h2>My Programming Skills</h2>
      </header>
      <CanvasComponent />
      <footer>
        <h2>Game Description</h2>
        <p>This game was put together by me, I made this game using the canvas element. I combined react and canvas to make this interactive game. The game just describes my programming skills, the languages I know, and what technologies I am experienced with. I wanted to make my portfolio website interactive and fun.</p>
        <h3>Game Instructions</h3>
        <p>Player Movement:</p>
        <ul>
          <li>Move Up: W Key</li>
          <li>Move Down: S Key</li>
          <li>Move Left: A Key</li>
          <li>Move Right: D Key</li>
        </ul>
      </footer>
    </SkillsWrapper>
  )
};

export default Skills;