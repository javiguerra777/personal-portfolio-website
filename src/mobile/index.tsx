import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { PreferenceContext } from '../context';
import ToggleTheme from './components/ToggleTheme';
import ReusableCard from './components/ReusableCard';
import SideBar from './components/SideBar';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import './styles/index.css';

const Mobile = require('../assets/mobile.jpg');

function MobileView() {
  const { darkMode } = useContext(PreferenceContext);

  return (
    <div
      className={`wrapper overflow-auto ${
        darkMode ? 'dark-mode' : 'light-mode'
      }`}
    >
      <ToggleTheme />
      <SideBar />
      <Card className="text-dark mt-4 p-2" id="top">
        <Card.Title>Javier Guerra Portfolio</Card.Title>
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
      <Carousel />
      <AboutMe />
      <Experience />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default MobileView;
