import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MoreAbout from './pages/MoreAbout';
import Testimonials from './pages/Testimonials';
import Attributions from './pages/Attributions';
import NotFound from '../../common/components/NotFound';

const Layout = styled.div`
  height: 100%;
  width: 100%;
`;
const ReadMoreRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/aboutme" element={<MoreAbout />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default ReadMoreRoutes;
