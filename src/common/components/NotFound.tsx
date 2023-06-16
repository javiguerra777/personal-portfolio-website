import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NFImage from '../../assets/not-found.jpg';

const Wrapper = styled.div`
  width: 100vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  ul {
    list-style: circle;
    li {
      font-size: 18px;
    }
    a:hover {
      text-decoration: underline;
      color: dodgerblue;
    }
  }
`;
const NotFound: FC = () => (
  <Wrapper>
    <h1 className="text-center text-4xl mt-4 text-red-400">
      Error 404 Not Found
    </h1>
    <div className="ml-4 mb-4 mt-4">
      <p className="text-xl">Try these following links:</p>
      <ul className="ml-10">
        <li>
          <NavLink to="/personal-portfolio-website">Home</NavLink>
        </li>
        <li>
          <NavLink to="/readmore/aboutme">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/readmore/testimonials">Testimonials</NavLink>
        </li>
      </ul>
    </div>
    <img src={NFImage} alt="not found" />
  </Wrapper>
);

export default NotFound;
