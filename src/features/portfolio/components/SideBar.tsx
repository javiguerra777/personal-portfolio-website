import React, { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import DownloadCV from '../../../common/components/DownloadCV';

const SideWrapper = styled.div`
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
  @media (min-width: 800px) {
    display: none;
  }
`;
type Props = {
  toggleOpenSide: () => void;
};
const SideBar: FC<Props> = ({ toggleOpenSide }) => {
  const [activeHash, setActiveHash] = React.useState(
    window.location.hash,
  );
  const { location } = window;
  console.log(location.hash);
  React.useEffect(() => {
    const checkHash = () => {
      console.log(location.hash);
      setActiveHash(location.hash);
    };
    window.addEventListener('hashchange', checkHash, false);
    return () =>
      window.removeEventListener('hashchange', checkHash, false);
  }, [location.hash]);
  return (
    <SideWrapper>
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
              activeHash === '#about'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`${
              activeHash === '#projects'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            Projects
          </a>
          <a
            href="#jobs"
            className={`${
              activeHash === '#jobs'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            Jobs
          </a>
          <a
            href="#contact"
            className={`${
              activeHash === '#contact'
                ? 'bg-gray-100 text-blue-500'
                : ''
            } p-1 rounded hover-line`}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="absolute bottom-5 w-full flex flex-row justify-center">
        <DownloadCV />
      </div>
    </SideWrapper>
  );
};

export default SideBar;
