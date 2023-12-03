import React, {
  FC,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from 'react-icons/bs';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { useQuery } from '@apollo/client';
import SectionTitle from '../../../common/style/SectionTitle';
import {
  MoreAboutCarouselWrapper,
  MoreAboutWrapper,
} from '../styles/MoreAboutStyles';
import {
  variants,
  swipePower,
  swipeConfidenceThreshold,
} from '../constants/carouselConstants';
import { GET_CAROUSEL_IMAGES } from '../services/getCarouselImages';

interface Image {
  public_id: string;
  url: string;
  secure_url: string;
  format: string;
  version: number;
}
interface CarouselImages {
  filesInCarouselImages: Image[];
}
const MoreAbout: FC = () => {
  const { data, loading, error } = useQuery<CarouselImages>(
    GET_CAROUSEL_IMAGES,
  );
  const [[page, direction], setPage] = useState([0, 0]);
  const iconSize = useMemo(() => 50, []);
  let imageIndex = 0;
  if (data !== undefined) {
    imageIndex = wrap(0, data.filesInCarouselImages.length, page);
  }
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const displayToastError = useCallback(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);
  useEffect(() => {
    displayToastError();
  }, [displayToastError]);
  if (loading) return <p>Loading...</p>;
  return (
    <MoreAboutWrapper>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle>More About Me</SectionTitle>
        {data !== undefined && (
          <MoreAboutCarouselWrapper>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                className="image"
                key={page}
                src={data.filesInCarouselImages[imageIndex].url}
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
              {data.filesInCarouselImages.map((img, idx) => (
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
          </MoreAboutCarouselWrapper>
        )}
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
      </motion.div>
    </MoreAboutWrapper>
  );
};

export default MoreAbout;
