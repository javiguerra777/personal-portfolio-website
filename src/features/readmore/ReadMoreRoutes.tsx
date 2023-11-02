import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MoreAbout from './pages/MoreAbout';
import Attributions from './pages/Attributions';
import NotFound from '../../common/components/NotFound';
import ReadMoreSkills from './pages/ReadMoreSkills';

const ReadMoreRoutes = () => (
  <Routes>
    <Route path="/aboutme" element={<MoreAbout />} />
    <Route path="/attributions" element={<Attributions />} />
    <Route path="/skills" element={<ReadMoreSkills />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default ReadMoreRoutes;
