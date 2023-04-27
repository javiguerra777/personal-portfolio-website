import React from 'react';
import { motion } from 'framer-motion';
import './styles/styles.css';

const Logo = require('../assets/astro_logo.jpg');

function Loading() {
  return (
    <div className="spinner-container">
      <div className="position-relative">
        <motion.img
          src={Logo}
          alt="App logo"
          className="white-circle"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <span className="text-dark position-absolute load-text">
          Loading...
        </span>
      </div>
    </div>
  );
}

export default Loading;
