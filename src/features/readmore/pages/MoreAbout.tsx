import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from 'react-icons/bs';
import { nanoid } from '@reduxjs/toolkit';
import { images } from '../constants/carouselimages';

const Wrapper = styled.div`
  .description-container {
    max-width: 1200px;
    margin: 0 0 20px 0;
    padding: 0 10px;
  }
`;
const CarouselWrapper = styled.div`
  width: 100%;
  height: 600px;
  margin: 0 0 20px 0;
  position: relative;
  .image {
    position: absolute;
    object-fit: contain;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .left,
  .right {
    color: gray;
    position: absolute;
    z-index: 4;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 99px;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
  .left:hover,
  .right:hover {
    color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  .pagination-container {
    position: absolute;
    bottom: 10px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 4;
    display: flex;
    flex-direction: row;
    padding: 10px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      width: 20px;
      height: 5px;
      margin: 0 0 0 5px;
    }
    .active-dot {
      background-color: #a78bfa;
    }
  }
`;
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;
const iconSize = 50;
const MoreAbout: FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Wrapper>
      <div className="flex flex-col items-center">
        <h2 className="my-2 text-3xl font-bold">More About Me</h2>
        <CarouselWrapper>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              className="image"
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
          <div className="pagination-container rounded">
            {images.map((img, idx) => (
              <div
                key={nanoid()}
                className={`dot ${
                  idx === imageIndex ? 'active-dot' : 'bg-white'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            className="left"
            onClick={() => paginate(-1)}
          >
            <BsChevronCompactLeft size={iconSize} />
          </button>
          <button
            type="button"
            className="right"
            onClick={() => paginate(1)}
          >
            <BsChevronCompactRight size={iconSize} />
          </button>
        </CarouselWrapper>
        <div className="description-container">
          <h3 className="text-2xl font-semibold">Personal Life</h3>
          <p className="mt-2">
            I have a one year old son named Axel. I have two corgis
            named Gibbs and Bear. I love dogs, I love my family, and I
            enjoy spending as much time as I can with my family. As
            you can tell my family is the most important thing to me,
            so it&apos;s important for me to work for a company that
            values family. On my free time I enjoy playing video
            games, exercising, and going to the park.
          </p>
        </div>
        <div className="description-container">
          <h3 className="text-2xl font-semibold">Professional</h3>
          <p className="mt-2">
            I started off my career in business administration. I
            worked in Accounting from 2020-2021, I had a good time
            learning about how to balance accounts and keep track of
            company finances. But I didn&apos;t enjoy it as much as I
            thought I would. As of 2022 I have been enjoy working in
            software development much more than accounting. I have
            always been interested in working in upper management, due
            to my experience in business and my educational
            background.
          </p>
        </div>
        <div className="description-container">
          <h3 className="text-2xl font-semibold mb-2">Skills</h3>
          <p className="mb-2">
            Languages: Javascript, Typescript, Java, Python, Ruby
          </p>
          <p className="mb-2">
            Frameworks/Libraries: Angular, React, Phaser, Express,
            Django, Ruby on Rails, Java Swing, JavaFX, Pygames, Pygui
          </p>
          <p>
            I have expreience with working in groups, I understand how
            to communicate well with others. I have had experience
            leading groups in college and when I worked as a Software
            Engineer. I enjoyed the times when I got to lead groups
            because I enjoy working with people.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MoreAbout;
