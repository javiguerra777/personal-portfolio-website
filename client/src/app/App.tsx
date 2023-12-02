import React, { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';
import ReadMoreRoutes from '../features/readmore/ReadMoreRoutes';
import UseGetLoading from '../common/hooks/UseGetLoading';
import Loading from '../features/loading/Loading';
import Portfolio from '../features/portfolio/Portfolio';
import NotFound from '../common/components/NotFound';
import Contact from '../features/contact/Contact';
import Jobs from '../features/jobs/Jobs';
import Projects from '../features/projects/Projects';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../common/components/NavBar';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #182030;
  color: white;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
const ReNav = () => <Navigate to="/personal-portfolio-website" />;
const App: FC = () => {
  const { loading } = UseGetLoading();
  const { pathname } = useLocation();
  useEffect(() => {
    const application = document.querySelector('#app');
    if (application !== null) {
      application.scrollTo({ top: 0 });
    }
  }, [pathname]);
  return (
    <AppContainer id="app">
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
