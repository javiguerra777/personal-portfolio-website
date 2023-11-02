import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MoreAbout from './pages/MoreAbout';
import Attributions from './pages/Attributions';
import NotFound from '../../common/components/NotFound';
import NavBar from '../../common/components/NavBar';
import ReadMoreSkills from './pages/ReadMoreSkills';

const Layout = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;
const ReadMoreRoutes = () => (
  <Layout>
    <NavBar />
    <Routes>
      <Route path="/aboutme" element={<MoreAbout />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="/skills" element={<ReadMoreSkills />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default ReadMoreRoutes;
