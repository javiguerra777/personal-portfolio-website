import React, { FC, useRef, useEffect } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { motion, useElementScroll, useSpring } from 'framer-motion';
import styled from 'styled-components';
import UseGetView from '../../common/hooks/UseGetView';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';

const PortfolioWrapper = styled.div`
  height: 100%;
  scroll-behavior: smooth;
  background-color: #182030;
  color: white;
`;
const ProgressionBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 10px;
  background: red;
  z-index: 30;
  width: 100vw;
  transform-origin: top left;
`;
const ReadMoreContainer = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction;
  justify-content: center;
  bottom: 20px;
  .floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
const Portfolio: FC = () => {
  const view = UseGetView();
  const mainPageRef = useRef(null);
  const { scrollYProgress } = useElementScroll(mainPageRef);
  const scaleX = useSpring(scrollYProgress);
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      if (!hash) return;
      const elementToScroll = document.querySelector(hash);
      if (elementToScroll !== null) {
        elementToScroll.scrollIntoView();
      }
    };
    scrollToHashElement();
  }, []);
  return (
    <PortfolioWrapper ref={mainPageRef}>
      <div id="top" />
      <ProgressionBar style={{ scaleX }} />
      <Welcome />
      <About />
      <Footer />
      {view.isHeroInView && (
        <ReadMoreContainer>
          <button
            type="button"
            className="flex flex-col items-center text-violet-400 floating hover:underline inter hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#about');
              if (el !== null) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <p className="text-xl font-semibold">Read More</p>
            <span className="bg-violet-400 p-2 text-white rounded-full">
              <AiOutlineArrowDown />
            </span>
          </button>
        </ReadMoreContainer>
      )}
    </PortfolioWrapper>
  );
};

export default Portfolio;
