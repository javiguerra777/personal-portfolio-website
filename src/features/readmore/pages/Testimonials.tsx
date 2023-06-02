import React, { FC } from 'react';
import styled from 'styled-components';
import ComingSoon from '../../../assets/coming_soon.jpg';

const Wrapper = styled.div``;
const Testimonials: FC = () => (
  <Wrapper>
    <div className="flex flex-row w-full justify-center items-center">
      <h2 className="text-3xl font-bold my-3">Testimonials</h2>
    </div>
    <img src={ComingSoon} alt="coming-soon" />
  </Wrapper>
);

export default Testimonials;
