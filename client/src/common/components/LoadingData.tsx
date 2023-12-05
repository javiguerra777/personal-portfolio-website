import React, { FC } from 'react';
import '../style/LoadingData.css';

type Props = {
  text?: string;
};
const LoadingData: FC<Props> = ({ text = 'Loading Data' }) => (
  <div className="flex-1 flex flex-col items-center justify-center">
    <div className="loadingio-spinner-pulse-8mgm90kgw7m">
      <div className="ldio-nqt4evolcsi">
        <div />
        <div />
        <div />
      </div>
    </div>
    <p>{text}</p>
  </div>
);

export default LoadingData;
