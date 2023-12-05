import React, { FC, MouseEvent } from 'react';
import { useGetResumeQuery } from '../api/FilesApi';

const DownloadCV: FC = () => {
  const { data, isLoading } = useGetResumeQuery();
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (data === undefined) {
      event.preventDefault();
    }
  };
  return (
    <a
      className="bg-zinc-700 text-white px-4 py-2 rounded-full hover:bg-zinc-500 inter"
      href={data !== undefined ? data[0].secure_url : ''}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    >
      {isLoading ? 'Loading...' : 'Download Resume'}
    </a>
  );
};

export default DownloadCV;
