import React, { useContext } from 'react';
import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';
import { PreferenceContext } from '../../context';

function ToggleTheme() {
  const { darkMode, toggleDarkMode } = useContext(PreferenceContext);
  return (
    <div className="top-right rounded">
      <button
        type="button"
        onClick={toggleDarkMode}
        className="toggle-btn"
      >
        <div className="mr-1 text-light">Dark Theme</div>
        {!darkMode ? <DarkIcon /> : <LightIcon />}
      </button>
    </div>
  );
}

export default ToggleTheme;
