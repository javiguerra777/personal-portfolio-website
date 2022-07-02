import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
h1 {
  text-align: center;
}
`;

const Notfound = () => {
  return (
    <Wrapper>
      <h1>Page Not Found</h1>
    </Wrapper>
  )
}

export default Notfound;