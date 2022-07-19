import React from 'react';
import styled from 'styled-components';


const SkillsWrapper = styled.section`
background: url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg);
margin-bottom: 5%;
ul {
  list-style-type: none;
}
h1, h3 {
  text-align: center;
}
h3 {
  
}
.accordion-body {
  background-color: #E0D8B0; 
}
.date {
  text-decoration: line;
}
.experiences {
  width: 75%;
}
.imgContainer{
  display: flex;
  flex-direction: row;
}
.job-desc {
  background-color: #E0D8B0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: black 1px solid;
  border-bottom: black 1px solid;
  margin-bottom: 1em;
  padding-bottom: 1em;
}
.jobImage {
  height: auto;
  width: 10em;
}
button {
  background-color: white;
  cursor: pointer;
  width: 100vw;
}
button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
    <SkillsWrapper>
      <header>
        <h3>Programming languages and skills</h3>
      </header>
      <section>
        
      </section>
    </SkillsWrapper>
  )
};

export default Skills;