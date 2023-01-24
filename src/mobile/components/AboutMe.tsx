import React from 'react';
import { Card } from 'react-bootstrap';
import ReusableCard from './ReusableCard';

function AboutMe() {
  return (
    <ReusableCard id="about">
      <Card.Title>About Me</Card.Title>
      <Card.Subtitle className="mt-1">Javier Guerra</Card.Subtitle>
      <Card.Body>
        <Card.Text>
          I currently work for Bitwise as a React Apprentice. I have
          been with the company since March of 2022. I enjoy playing
          video games, spending time with my family and traveling to
          new places. My favorite place I have been to was New York,
          there is a lot to do in New York and I hope to one day go
          back. I have a son named Axel, and I believe that family is
          the most important thing in this world. Axel gives me the
          motivation to continue to work hard so I can give him a
          great life.
        </Card.Text>
      </Card.Body>
    </ReusableCard>
  );
}

export default AboutMe;
