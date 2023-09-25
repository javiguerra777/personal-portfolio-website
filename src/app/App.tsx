import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import ReadMoreRoutes from '../features/readmore/ReadMoreRoutes';
import UseGetLoading from '../common/hooks/UseGetLoading';
import Loading from '../features/loading/Loading';
import Portfolio from '../features/portfolio/Portfolio';
import NotFound from '../common/components/NotFound';
import NavBar from '../common/components/NavBar';
import Contact from '../features/contact/Contact';
import Jobs from '../features/jobs/Jobs';
import Projects from '../features/projects/Projects';
import 'react-toastify/dist/ReactToastify.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #182030;
  color: white;
  overflow: auto;
`;
const ReNav = () => <Navigate to="/personal-portfolio-website" />;
const App: FC = () => {
  const { loading } = UseGetLoading();
  return (
    <AppContainer>
      <ToastContainer />
      {loading && <Loading />}
      <NavBar />
      <Routes>
        <Route index element={<ReNav />} />
        <Route
          path="/personal-portfolio-website"
          element={<Portfolio />}
        />
        <Route path="/readmore/*" element={<ReadMoreRoutes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
