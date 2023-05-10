import React, { FC, useRef } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { motion, useElementScroll, useSpring } from 'framer-motion';
import styled from 'styled-components';
import UseGetView from '../../common/hooks/UseGetView';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';

const PortfolioWrapper = styled.div`
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
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
  return (
    <PortfolioWrapper ref={mainPageRef}>
      {/* Hidden div to nav back to top */}
      <div id="top" />
      <ProgressionBar style={{ scaleX }} />
      <NavBar />
      <Welcome />
      <About />
      <Jobs />
      <Projects />
      <Contact />
      <Footer />
      {view.isHeroInView && (
        <ReadMoreContainer>
          <a
            href="#about"
            className="flex flex-col items-center text-violet-400 floating hover:underline"
          >
            <p className="text-xl font-semibold">Read More</p>
            <span className="bg-violet-400 p-2 text-white rounded-full">
              <AiOutlineArrowDown />
            </span>
          </a>
        </ReadMoreContainer>
      )}
    </PortfolioWrapper>
  );
};

export default Portfolio;
