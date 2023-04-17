import React, { FC } from 'react';
import styled from 'styled-components';
import UseGetLoading from '../common/hooks/UseGetLoading';
import Loading from '../features/loading/Loading';
import Portfolio from '../features/portfolio/Portfolio';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const App: FC = () => {
  const loading = UseGetLoading();
  return (
    <AppContainer>
      {loading.loading ? <Loading /> : <Portfolio />}
    </AppContainer>
  )
}

export default App