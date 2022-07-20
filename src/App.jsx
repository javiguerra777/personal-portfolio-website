import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Notfound from './pages/Notfound';
import './styles/global.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
