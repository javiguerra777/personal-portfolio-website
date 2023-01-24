import React, {
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { PreferenceContext } from '../context';
import ToggleTheme from './components/ToggleTheme';
import ReusableCard from './components/ReusableCard';
import ReusableItem from './components/ReusableItem';
import SideBar from './components/SideBar';
import ArrowUp from './icons/ArrowUp';
import './styles/index.css';

const Mobile = require('../assets/mobile.jpg');

function MobileView() {
  const { darkMode } = useContext(PreferenceContext);
  const [showButton, setShowButton] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    const scrolled = scrollRef.current?.scrollTop;
    console.log(scrolled);
    scrolled && scrolled > 300
      ? setShowButton(true)
      : setShowButton(false);
  };
  useEffect(() => {
    const div = scrollRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
        console.log('removed listener');
      }
    };
  }, []);
  const toTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`wrapper overflow-auto ${
        darkMode ? 'dark-mode' : 'light-mode'
      }`}
      ref={scrollRef}
    >
      <ToggleTheme />
      <SideBar />
      {showButton && (
        <button
          className="top-btn position-fixed rounded-circle"
          type="button"
          onClick={toTop}
        >
          <ArrowUp />
        </button>
      )}
      <Card className="text-dark mt-4 p-2" id="top">
        <Card.Title>Welcome to my portfolio</Card.Title>
      </Card>
      <ReusableCard id="header">
        <Card.Title>This is the mobile friendly version</Card.Title>
        <img
          src={Mobile}
          alt="mobile-phone"
          style={{ height: '10rem' }}
        />
        <Card.Body>
          <Card.Text>
            I built my laptop/desktop version of my portfolio with
            Phaser and turned it into a video game. If you are
            interested then you should open your computer and check it
            out.
          </Card.Text>
        </Card.Body>
      </ReusableCard>
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
            back. I have a son named Axel, and I believe that family
            is the most important thing in this world. Axel gives me
            the motivation to continue to work hard so I can give him
            a great life.
          </Card.Text>
        </Card.Body>
      </ReusableCard>
      <ReusableCard id="experience">
        <Card.Title className="mt-2">
          About My Programming Experience
        </Card.Title>
        <Card.Body className="d-flex flex-column">
          <Card.Subtitle className="align-self-center mb-2">
            HighSchool
          </Card.Subtitle>
          <Card.Text>
            I started programming when I was 16, I took an intro to
            Computer Science course at Venture Academy. I got started
            because my father enrolled me into a computer science
            class because he thought I would like it because I like
            computers. He also thought it would look good on my
            college transcripts. I am glad that I enrolled in computer
            science in high school because now that is now my
            profession and I enjoy working in the software development
            field.
          </Card.Text>
          <Card.Subtitle className="mb-2 align-self-center">
            First Programming Language and Meta
          </Card.Subtitle>
          <Card.Text>
            My first programming language was Java, it was not as
            difficult as many other people said it was to learn Java.
            The class was sponsered by Meta (which was called Facebook
            at the time). I had a lot of fun learning about Java, and
            Java syntax. I got to learn how Object Oriented
            Programming (OOP) worked. I was one of the best students
            in my class because the teacher hand picked me and three
            other students to attend a hackathon at Meta. At that
            hackathon, my team built a simple Pac-Man clone, I
            remember some of the employees helped us set up and give
            us advice while we programmed the game.
          </Card.Text>
          <Card.Subtitle className="mb-2 align-self-center">
            College
          </Card.Subtitle>
          <Card.Text>
            I studied business at the University of the Pacific so I
            would program off and on for about 4 years. In College I
            learned about HTML, CSS, how to host your own website
            using GoDaddy, and I learned a little bit about databases
            such as SQL and how to join data from other tables using
            Inner Joins and foreign keys. On my spare time I would
            help my friend make video games using Scratch.
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
                In this project I learned how to use the map operator
                to map through arrays. I also learned how to pass
                props from parent components to children components in
                React.
              </div>
            </ReusableItem>
          </ListGroup>
        </Card.Body>
      </ReusableCard>
      <ReusableCard id="contact">
        <Card.Title>Contact Information</Card.Title>
        <Card.Body>
          <ListGroup>
            <ReusableItem>
              <strong className="align-self-center mb-2">
                Current Location
              </strong>
              <div>
                I current live in Stockton, CA. But I am open to roles
                in other locations, and I am open to working remotely.
              </div>
            </ReusableItem>
            <ReusableItem>
              <strong className="mb-2 align-self-center">
                Career Interests
              </strong>
              <div>
                I would love to focus on front end development, I
                really enjoy working on the client side of web apps,
                mobile apps, and desktop apps. But I have an
                understanding of server side development if those
                skills are needed.
              </div>
            </ReusableItem>
            <ReusableItem>
              <strong className="mb-1 align-self-center">
                Email
              </strong>
              <div>
                My email is <u>javier.guerra1001@gmail.com</u>, email
                me if you are interested in collaborating, want to
                chat, or if you believe you are in need of my skills.
              </div>
            </ReusableItem>
          </ListGroup>
        </Card.Body>
      </ReusableCard>
      <footer
        className={`w-100 ${
          darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
        }`}
      >
        <span>Footer exists</span>
      </footer>
    </div>
  );
}

export default MobileView;
