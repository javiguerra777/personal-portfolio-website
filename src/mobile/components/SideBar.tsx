import React, { useState } from 'react';
import BurgerMenu from '../icons/BurgerMenu';
import Close from '../icons/Close';

function SideBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <aside className="aside">
      {open ? (
        <nav className="nav text-white d-flex flex-column rounded">
          <div className="align-self-end">
            <button
              type="button"
              onClick={toggle}
              className="bg-transparent border-0 text-white"
            >
              <Close />
            </button>
          </div>
          <div className="d-flex flex-column w-100 mb-2 align-items-center">
            <u>Contents</u>
            <div>
              <div>
                <a href="#about">About</a>
              </div>
              <div>
                <a href="#experience">Experience</a>
              </div>
              <div>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <button
          type="button"
          className="rounded-circle menu-btn"
          onClick={toggle}
        >
          <BurgerMenu />
        </button>
      )}
    </aside>
  );
}

export default SideBar;
