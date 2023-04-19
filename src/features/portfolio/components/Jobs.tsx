import React, { FC } from 'react';
import styled from 'styled-components';

const JobWrapper = styled.div`
  height: 400px;
`;
const Jobs: FC = () => {
  return (
    <JobWrapper id="jobs">
      <div className="pt-20">
        Jobs Container
      </div>
    </JobWrapper>
  )
}

export default Jobs