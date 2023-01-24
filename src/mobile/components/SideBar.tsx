import React, { useState } from 'react';
import BurgerMenu from '../icons/BurgerMenu';
import Close from '../icons/Close';

function SideBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <aside className="aside rounded">
      {open ? (
        <nav className="nav text-white d-flex flex-column rounded">
          <div className="d-flex align-items-center justify-content-center pt-1">
            <small>Contents</small>
            <button
              type="button"
              onClick={toggle}
              className="bg-transparent position-absolute border-0 text-white close-btn d-flex align-items-center justify-content-center"
            >
              <Close />
            </button>
          </div>
          <div className="d-flex flex-column w-100 mb-2 align-items-center">
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
