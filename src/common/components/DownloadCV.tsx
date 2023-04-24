import React, { FC } from 'react';
import Resume from '../../assets/Javier Guerra.pdf';

const DownloadCV: FC = () => (
  <a
    className="bg-zinc-700 text-white px-4 py-2 rounded-full hover:bg-zinc-500"
    href={Resume}
    download="javier_guerra_resume"
  >
    Download CV
  </a>
);

export default DownloadCV;
