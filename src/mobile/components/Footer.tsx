import React from 'react';

const Construction = require('../../assets/construction.jpg');

function Footer() {
  return (
    <footer
      className="w-100 bg-dark text-light d-flex flex-column align-items-center"
      style={{ paddingBottom: '2rem' }}
    >
      <div className="mt-3 w-75 d-flex flex-column align-items-center">
        <p>
          {' '}
          Coming Soon!!{' '}
          <strong>Personal Project deployment links</strong>
        </p>
        <img
          src={Construction}
          alt="construction-animated"
          className="w-100"
        />
      </div>
      <p className="mt-3">Javier Guerra</p>
      <div>Copyright 2023</div>
      <div>
        All rights reserved.{' '}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          Built with React
        </a>
      </div>
    </footer>
  );
}

export default Footer;
