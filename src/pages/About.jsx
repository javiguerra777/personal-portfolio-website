import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
background-color: #FCFFE7;
display: flex;
flex-direction: column;
padding-bottom: 5%;
h1 {
  text-align: center;
}
`;
const About = () => {
  return (
    <AboutWrapper>
      <header>
        <h1>About Me</h1>
        <p>My name is Javier Guerra, but I go by Javi Guerra. I graduated with my Bachelor's Degree in Business Administration in 2020 from the University of the Pacific. I also graduated in 2022 from California State University, Stanislaus. I obtained Master's Degree in Finance. In 2021 I got back into programming after taking a small break, and now I work as a React Developer because I am passionate about writing programs and software. </p>
      </header>
      <section>
        <section>
          <h2>Professional:</h2>
          <p>I began working in 2016 as a film coordinator for Venture Academy's Basketball Team. I enjoyed this position and I did it for about 2 years. I helped the players and coaches study and prepare for their opponents. After that I was working independently until 2019 editing film for professional basketball players. The goal was to help these players get recruited and improve their careers. After that I worked at Best Western during the summer of 2019 to get some real world work experience. I also worked at Amazon for a few months in 2019. I graduated with my Bachelor's from the University of the Pacific in 2020. My first job out of college was with staffing agency called Robert Half. I did that until December of 2020. I got offered a full time position at Diversified Products where I worked there until June of 2021. My next stint was at Robert Half again until I got a job at Grower Direct Nut in December of 2021, through a staffing agency in Turlock. I then got offered a really good position at Cash Offers LLC in January of 2022. During March of 2022, I got an opportunity as a React Developer at Bitwise in March of 2022, and I am still with the company because the opportunity is a year long apprenticeship and it is an amazing job.</p>
        </section>
        <section>
          <h2>Programming:</h2>
          <p>I first began how to program in 2015, I was a senior at Venture Academy High School. The first language I ever learned was Java. At first I was intimidated because of what I was told about programming. But I had an amazing teacher named Ms.Donahue, she somehow got Facebook to sponsor our class and we learned Java through CodeHS. CodeHS was very beginner-friendly, so I didn't have any issue learning Java. I had fun programming, and then the class I Was in took a field trip to Facebook's HQ in the Bay Area. I had a great time because the staff was friendly, and the staff described Facebook as being a fun company to work for. I could tell that the staff enjoyed their jobs because everyone was so happy at work. I later then attended my first hackathon, which was hosted by Facebook and held at Facebook's HQ. My friends and I created a Pac-Man like clone and I learned a lot about programming through that experience. </p>
        </section>
        <section>
          <h2>Personal:</h2>
        </section>
        <section>
          <h2>Fun Facts:</h2>
        </section>

      </section>
    </AboutWrapper>
  );
};

export default About;