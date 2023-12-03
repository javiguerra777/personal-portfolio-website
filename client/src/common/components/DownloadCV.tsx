import React, { FC, MouseEvent } from 'react';
import { useQuery, gql } from '@apollo/client';

interface ResumeFile {
  public_id: string;
  format: string;
  version: number;
  url: string;
  secure_url: string;
}
interface ResumeData {
  resumeFile: ResumeFile[];
}
const GET_RESUME = gql`
  query {
    resumeFile {
      public_id
      format
      version
      url
      secure_url
    }
  }
`;
const DownloadCV: FC = () => {
  const { data, loading } = useQuery<ResumeData>(GET_RESUME);
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (data === undefined) {
      event.preventDefault();
    }
  };
  return (
    <a
      className="bg-zinc-700 text-white px-4 py-2 rounded-full hover:bg-zinc-500 inter"
      href={data !== undefined ? data.resumeFile[0].secure_url : ''}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    >
      {loading ? 'Loading...' : 'Download Resume'}
    </a>
  );
};

export default DownloadCV;
