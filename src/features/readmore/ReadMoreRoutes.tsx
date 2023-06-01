import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MoreAbout from './pages/MoreAbout';
import Testimonials from './pages/Testimonials';
import Attributions from './pages/Attributions';
import ReadMoreNav from './components/ReadMoreNav';

const Layout = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
const ReadMoreRoutes = () => (
  <Layout>
    <ReadMoreNav />
    <Routes>
      <Route path="/aboutme" element={<MoreAbout />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/attributions" element={<Attributions />} />
    </Routes>
  </Layout>
);

export default ReadMoreRoutes;
