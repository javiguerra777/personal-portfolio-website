import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ReadMoreRoutes from '../features/readmore/ReadMoreRoutes';
import UseGetLoading from '../common/hooks/UseGetLoading';
import Loading from '../features/loading/Loading';
import Portfolio from '../features/portfolio/Portfolio';
import 'react-toastify/dist/ReactToastify.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #182030;
  color: white;
`;
const App: FC = () => {
  const { loading } = UseGetLoading();
  return (
    <AppContainer>
      <ToastContainer />
      {loading && <Loading />}
      <Routes>
        <Route
          path="/personal-portfolio-website"
          element={<Portfolio />}
        />
        <Route path="/readmore/*" element={<ReadMoreRoutes />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
