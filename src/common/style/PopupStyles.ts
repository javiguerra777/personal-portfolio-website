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
  @media (min-width: ${breakpoints.tablet}) {
    height: auto;
    width: 700px;
  }
`;
export default FixedBlackBg;
