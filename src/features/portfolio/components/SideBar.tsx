import React, { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import DownloadCV from '../../../common/components/DownloadCV';
import breakpoints from '../../../common/breakpoints';
import UseGetView from '../../../common/hooks/UseGetView';

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
type Props = {
  toggleOpenSide: () => void;
};
const SideBar: FC<Props> = ({ toggleOpenSide }) => {
  const view = UseGetView();
  return (
    <SideWrapper
      animate={{ x: 0 }}
      transition={{ type: 'spring' }}
      initial={{ x: 100 }}
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
          <a
            href="#about"
            className={`${
              view.activeView === 'about'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            About
          </a>
          <a
            href="#jobs"
            className={`${
              view.activeView === 'jobs'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            Jobs
          </a>
          <a
            href="#projects"
            className={`${
              view.activeView === 'projects'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`${
              view.activeView === 'contact'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line mb-4`}
          >
            Contact
          </a>
        </div>
        <DownloadCV />
      </div>
    </SideWrapper>
  );
};

export default SideBar;
