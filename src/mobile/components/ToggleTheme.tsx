import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PreferenceContext } from '../../context';
import Circle from '../icons/Circle';

function ToggleTheme() {
  const { darkMode, toggleDarkMode } = useContext(PreferenceContext);
  const [xMotion, setXMotion] = useState(0);
  useEffect(() => {
    function scaleX() {
      const width = window.innerWidth;
      if (width <= 600 && width > 420 && darkMode) {
        console.log('fixing for 1st query');
        setXMotion(35);
      } else if (width <= 420 && darkMode) {
        console.log('fixing x for smaller screens');
        setXMotion(18);
      } else if (width > 600 && darkMode) {
        setXMotion(50);
      }
    }
    window.addEventListener('resize', scaleX);
    return () => window.removeEventListener('resize', scaleX);
  }, [darkMode]);
  function onTap() {
    const width = window.innerWidth;
    if (darkMode) {
      setXMotion(0);
    } else if (!darkMode && width <= 600 && width > 420) {
      setXMotion(35);
    } else if (!darkMode && width <= 420) {
      setXMotion(18);
    } else if (!darkMode && width > 600) {
      setXMotion(50);
    }
    toggleDarkMode();
  }
  return (
    <div className="top-right rounded d-flex">
      <div className="mr-1 text-light">Dark Theme</div>
      <div className={`toggle ${darkMode ? 'active' : 'inactive'}`}>
        <motion.button
          type="button"
          className="rounded-circle circle-btn"
          onTap={onTap}
          animate={{
            x: xMotion,
          }}
          transition={{
            type: 'spring',
          }}
        >
          <Circle />
        </motion.button>
      </div>
    </div>
  );
}

export default ToggleTheme;
