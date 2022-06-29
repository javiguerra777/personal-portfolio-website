import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.section`
h1 {
  text-align center
}
`;

const Homepage = () => {
  return (
    <HomeWrapper>
      <h1>Javi Guerra's Website</h1>
    </HomeWrapper>
  );
};

export default Homepage;