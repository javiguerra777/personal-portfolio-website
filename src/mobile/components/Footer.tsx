import React, { useContext } from 'react';
import { PreferenceContext } from '../../context';

function Footer() {
  const { darkMode } = useContext(PreferenceContext);

  return (
    <footer
      className={`w-100 ${
        darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
    >
      <span>Footer exists</span>
    </footer>
  );
}

export default Footer;
