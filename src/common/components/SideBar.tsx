import React, { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import DownloadCV from './DownloadCV';
import breakpoints from '../breakpoints';

const SideWrapper = styled(motion.div)`
  width: 150px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  color: black;
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-left: solid 1px black;
  font-family: 'Inter';
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};
type Props = {
  toggleOpenSide: () => void;
  open: boolean;
};
const SideBar: FC<Props> = ({ toggleOpenSide, open }) => {
  const { pathname } = useLocation();
  return (
    <SideWrapper
      initial={false}
      animate={open ? 'open' : 'closed'}
      variants={variants}
    >
      <div className="flex flex-col mt-5 items-center w-full">
        <div className="flex flex-row">
          <p className="text-xl">Navigation</p>
          <button
            type="button"
            onClick={toggleOpenSide}
            className="p-0 ml-2"
          >
            <AiOutlineClose size={25} color="black" />
          </button>
        </div>
        <div className="flex flex-col mt-5 px-3 w-full">
          <NavLink
            to="/personal-portfolio-website"
            className={`${
              pathname === '/personal-portfolio-website'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={`${
              pathname === '/jobs' ? 'bg-gray-100 text-blue-500' : ''
            } p-1 rounded hover-line`}
          >
            Jobs
          </NavLink>
          <NavLink
            to="/projects"
            className={`${
              pathname === '/projects'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={`${
              pathname === '/contact'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line mb-4`}
          >
            Contact
          </NavLink>
        </div>
        <DownloadCV />
      </div>
    </SideWrapper>
  );
};

export default SideBar;
