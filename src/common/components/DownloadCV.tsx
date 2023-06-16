import React, { FC } from 'react';
import Resume from '../../assets/Javier Guerra Software Developer Resume.pdf';

const DownloadCV: FC = () => (
  <a
    className="bg-zinc-700 text-white px-4 py-2 rounded-full hover:bg-zinc-500 inter"
    href={Resume}
    download="Javier Guerra Software Developer Resume"
    rel="noreferrer"
  >
    Download CV
  </a>
);

export default DownloadCV;
