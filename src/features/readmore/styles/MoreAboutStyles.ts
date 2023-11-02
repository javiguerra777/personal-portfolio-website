import styled from 'styled-components';

export const MoreAboutWrapper = styled.div`
  height: 100%;
  .description-container {
    max-width: 1200px;
    margin: 0 0 20px 0;
    padding: 0 10px;
  }
`;
export const MoreAboutCarouselWrapper = styled.div`
  width: 100%;
  height: 600px;
  margin: 0 0 20px 0;
  position: relative;
  .image {
    position: absolute;
    object-fit: contain;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .left,
  .right {
    color: gray;
    position: absolute;
    z-index: 4;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 99px;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
  .left:hover,
  .right:hover {
    color: white;
    background: rgba(0, 0, 0, 0.5);
  }
  .pagination-container {
    position: absolute;
    bottom: 10px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 4;
    display: flex;
    flex-direction: row;
    padding: 10px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      width: 20px;
      height: 5px;
      margin: 0 0 0 5px;
    }
    .active-dot {
      background-color: #a78bfa;
    }
  }
`;
export default {};
