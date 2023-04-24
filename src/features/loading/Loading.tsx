import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/store/hooks';
import { setLoading } from '../../app/store/LoadingSlice';
import Logo from '../../assets/logo.jpg';

const LoadingWrapper = styled.div<{ width: number }>`
  height: 100%;
  width: 100%;
  background-color: #2c2f33;
  display: flex;
  justify-content: center;
  align-items: center;
  .spinner {
    animation: rotate infinite 2s;
  }
  .loading-bar {
    width: ${(props) => props.width}%;
  }
  .loading-container {
    width: 80vw;
    @media (min-width: 800px) {
      width: 700px;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
const Loading: FC = () => {
  const dispatch = useAppDispatch();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (width !== 100) {
      setWidth((prev) => prev + 1);
    }
    if (width === 100) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
    }
  }, [width, dispatch]);
  return (
    <LoadingWrapper width={width}>
      <div className="flex flex-col items-center">
        <img
          src={Logo}
          alt="site-logo"
          className="w-20 h-30 rounded-full spinner"
        />
        <p className="text-white mt-3 mb-2">Loading</p>
        <div className="bg-white h-5 relative rounded loading-container">
          <div className="bg-blue-600 h-full absolute z-2 rounded loading-bar" />
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
