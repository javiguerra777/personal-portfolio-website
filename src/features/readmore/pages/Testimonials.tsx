import React, { FC } from 'react';
import styled from 'styled-components';
import ComingSoon from '../../../assets/coming_soon.jpg';
import SectionTitle from '../../../common/style/SectionTitle';

const Wrapper = styled.div``;
const Testimonials: FC = () => (
  <Wrapper>
    <div className="flex flex-row w-full justify-center items-center">
      <SectionTitle>Testimonials</SectionTitle>
    </div>
    <img src={ComingSoon} alt="coming-soon" />
  </Wrapper>
);

export default Testimonials;
