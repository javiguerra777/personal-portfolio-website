import styled from 'styled-components';
import breakpoints from '../breakpoints';

const FixedBlackBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpaceBgCard = styled.div`
  background-color: #06041c;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 10px;
  border-radius: 10px;
  font-family: 'Inter';
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
  @media (min-width: ${breakpoints.tablet}) {
    height: 550px;
    width: 700px;
  }
  @media (max-height: 550px) {
    height: 100%;
  }
`;
export default FixedBlackBg;
