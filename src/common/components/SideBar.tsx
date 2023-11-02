import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import {
  AiOutlineClose,
  AiFillCaretDown,
  AiFillCaretUp,
} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import DownloadCV from './DownloadCV';
import UseGetSideBar from '../hooks/UseGetSideBar';
import { useAppDispatch } from '../../app/store/hooks';
import {
  toggleSideOpen,
  toggleReadMoreOpen,
} from '../../app/store/SideBarSlice';

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
`;
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};
const SideBar: FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const sidebar = UseGetSideBar();
  const toggleOpenSide = () => {
    dispatch(toggleSideOpen());
  };
  const toggleIsOpen = useCallback(() => {
    dispatch(toggleReadMoreOpen());
  }, [dispatch]);
  return (
    <SideWrapper
      initial={false}
      animate={sidebar.isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <div className="flex flex-col mt-5 items-center w-full">
        <div className="flex flex-row">
          <p className="text-xl">Navigation</p>
          <button
            type="button"
            onClick={toggleOpenSide}
            className="p-0 ml-2 hover:bg-red-600 hover:text-white rounded"
          >
            <AiOutlineClose size={25} />
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
            } p-1 rounded hover-line`}
          >
            Contact
          </NavLink>
          <button
            type="button"
            className="p-1 flex flex-row"
            onClick={toggleIsOpen}
          >
            Read More
            <div className="ml-1 flex items-center h-full">
              {sidebar.isReadMoreOpen ? (
                <AiFillCaretUp />
              ) : (
                <AiFillCaretDown />
              )}
            </div>
          </button>
          {sidebar.isReadMoreOpen && (
            <div className="w-full flex flex-col pl-4">
              <NavLink
                to="/readmore/aboutme"
                className={`${
                  pathname === '/readmore/aboutme'
                    ? 'bg-gray-100 text-blue-500'
                    : ''
                } p-1 rounded hover-line`}
              >
                About Me
              </NavLink>
              <NavLink
                to="/readmore/skills"
                className={`${
                  pathname === '/readmore/skills'
                    ? 'bg-gray-100 text-blue-500'
                    : ''
                } p-1 rounded hover-line mb-4`}
              >
                Skills
              </NavLink>
            </div>
          )}
        </div>
        <DownloadCV />
      </div>
    </SideWrapper>
  );
};

export default SideBar;
