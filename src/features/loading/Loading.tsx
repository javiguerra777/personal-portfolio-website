import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/store/hooks';
import { setLoading } from '../../app/store/LoadingSlice';

const LoadingWrapper = styled.div<{width: number}>`
  height: 100%;
  width: 100%;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  .spinner {
    animation: rotate infinite 3s;
  }
  .loading-bar {
    width: ${props => props.width}%;
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
    console.log(width);
    if(width !== 100){
      setWidth((prev) => prev + 1);
    }
    if(width === 100) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 3000)
    }
  }, [width]);
  return (
    <LoadingWrapper width={width}>
      <div className='flex flex-col items-center'>
        <div className=' bg-white w-10 h-10 rounded-full spinner'>
          Img
        </div>
        <p className="text-white mt-3 mb-2">Loading</p>
        <div className='bg-white w-96 h-5 relative rounded'>
          <div className="bg-blue-600 h-full absolute z-2 rounded loading-bar" />
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default Loading;
