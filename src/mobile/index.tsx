import React, {
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import { Card } from 'react-bootstrap';
import { PreferenceContext } from '../context';
import ToggleTheme from './components/ToggleTheme';
import ReusableCard from './components/ReusableCard';
import SideBar from './components/SideBar';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Experience from './components/Experience';
import ArrowUp from './icons/ArrowUp';
import Footer from './components/Footer';
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
        <Card.Title>Javier Guerra portfolio</Card.Title>
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
      <AboutMe />
      <Experience />

      <ContactInfo />
      <Footer />
    </div>
  );
}

export default MobileView;
