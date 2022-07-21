import React from 'react';
import styled from 'styled-components';
import GameComponent from '../components/GameComponent';

const SkillsWrapper = styled.section`
margin-bottom: 5%;
h3 {
  text-align: center;
}
header {
  background-color: #282157;
  color: white;
  height: auto;
  margin-bottom: 1em;
  padding-top: .1em;
  padding-bottom: .5em;
}
`;
const Skills = () => {  
  return (
    <SkillsWrapper className='info'>
      <GameComponent/>
    </SkillsWrapper>
  )
};

export default Skills;