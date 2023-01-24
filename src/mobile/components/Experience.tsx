import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ReusableCard from './ReusableCard';
import ReusableItem from './ReusableItem';

function Experience() {
  return (
    <ReusableCard id="experience">
      <Card.Title className="mt-2">
        About My Programming Experience
      </Card.Title>
      <Card.Body className="d-flex flex-column">
        <Card.Subtitle className="align-self-center mb-2">
          High School
        </Card.Subtitle>
        <Card.Text>
          I started programming when I was 16, I took an intro to
          Computer Science course at Venture Academy. I got started
          because my father enrolled me into a computer science class
          because he thought I would like it because I like computers.
          He also thought it would look good on my college
          transcripts. I am glad that I enrolled in computer science
          in high school because now that is now my profession and I
          enjoy working in the software development field.
        </Card.Text>
        <Card.Subtitle className="mb-2 align-self-center">
          First Programming Language and Meta
        </Card.Subtitle>
        <Card.Text>
          My first programming language was Java, it was not as
          difficult as many other people said it was to learn Java.
          The class was sponsered by Meta (which was called Facebook
          at the time). I had a lot of fun learning about Java, and
          Java syntax. I got to learn how Object Oriented Programming
          (OOP) worked. I was one of the best students in my class
          because the teacher hand picked me and three other students
          to attend a hackathon at Meta. At that hackathon, my team
          built a simple Pac-Man clone, I remember some of the
          employees helped us set up and give us advice while we
          programmed the game.
        </Card.Text>
        <Card.Subtitle className="mb-2 align-self-center">
          College
        </Card.Subtitle>
        <Card.Text>
          I studied business at the University of the Pacific so I
          would program off and on for about 4 years. In College I
          learned about HTML, CSS, how to host your own website using
          GoDaddy, and I learned a little bit about databases such as
          SQL and how to join data from other tables using Inner Joins
          and foreign keys. On my spare time I would help my friend
          make video games using Scratch.
        </Card.Text>
        <Card.Subtitle className="mb-2 align-self-center">
          After College
        </Card.Subtitle>
        <Card.Text>
          I started learning a bit of c++ because I wanted to learn
          Unreal Engine. I did work with Unreal Engine briefly, but
          then I ended up attending Bay Valley Tech, where I learned
          fullstack web development using Javascript/Typescript. I
          learned Angular for frontend/client development, and I
          learned Node.js and Express for backend/server side
          development. I also learned more about MySQL and how to
          implement a database in a web app.
        </Card.Text>
        <Card.Subtitle className="mb-2 align-self-center">
          Bitwise
        </Card.Subtitle>
        <Card.Text>
          In 2022 I got hired as a React Apprentice at Bitwise. At
          first we were taught the basics of HTML, CSS, and
          Javascript. After that we started building project with
          React. Here are some of the projects I built in the
          Apprenticeship so far.
        </Card.Text>
        <Card.Text>Projects:</Card.Text>
        <ListGroup>
          <ReusableItem>
            <strong className="align-self-center mb-2">
              Number Guessing Game
            </strong>
            <div>
              In this project I learned how to use the map operator to
              map through arrays. I also learned how to pass props
              from parent components to children components in React.
            </div>
          </ReusableItem>
        </ListGroup>
      </Card.Body>
    </ReusableCard>
  );
}

export default Experience;
