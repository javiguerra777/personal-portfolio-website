import React, { useState } from 'react';
import BurgerMenu from '../icons/BurgerMenu';
import Close from '../icons/Close';
import ArrowUp from '../icons/ArrowUp';

function SideBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <aside className="aside rounded">
      {open ? (
        <nav className="nav text-white d-flex flex-column rounded align-items-center p-2">
          <div className="d-flex align-items-center justify-content-center pt-1 border-bottom border-white w-100 position-relative">
            <span className="mb-1">Contents</span>
            <button
              type="button"
              onClick={toggle}
              className="bg-transparent position-absolute border-0 text-white close-btn d-flex align-items-center justify-content-center"
            >
              <Close />
            </button>
          </div>
          <div className="d-flex flex-column w-100 mb-2 align-items-center mt-2">
            <div className="d-flex flex-column">
              <a href="#about" className="text-decoration-none">
                About
              </a>
              <a href="#experience" className="text-decoration-none">
                Experience
              </a>
              <a href="#contact" className="text-decoration-none">
                Contact
              </a>
            </div>
            <a href="#top" className="text-decoration-none">
              Return To Top <ArrowUp />
            </a>
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
