import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionTitle from '../../common/style/SectionTitle';
import breakpoints from '../../common/breakpoints';
import NavBar from '../../common/components/NavBar';
import MyJobs from './services/MyJobs';

type ChildrenProps = {
  children: ReactNode;
};
const JobWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #28282b;
  overflow: auto;
`;
const JobContentContainer = styled.div`
  padding: 0 20px;
  max-width: 1200px;
  margin-top: 50px;
  font-family: 'Inter';
  ul {
    list-style-type: circle;
    margin-left: 20px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 50px;
  }
`;

const JobCompany: FC<ChildrenProps> = ({ children }) => (
  <h4 className="font-semibold text-base">{children}</h4>
);
const JobDescription: FC<ChildrenProps> = ({ children }) => (
  <p className="mb-4 text-xs md:text-base">{children}</p>
);
const FlexBetween: FC<ChildrenProps> = ({ children }) => (
  <div className="flex flex-col mb-1">{children}</div>
);
const JobTimeLine: FC<ChildrenProps> = ({ children }) => (
  <p className="text-base italic">{children}</p>
);
const Jobs: FC = () => (
  <JobWrapper>
    <NavBar />
    <motion.div
      className="pt-10 pb-40 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle>Brief Work History</SectionTitle>
      <JobContentContainer>
        {MyJobs.map(({ company, workDates, description }) => (
          <>
            <FlexBetween>
              <JobCompany>{company}</JobCompany>
              <JobTimeLine>{workDates}</JobTimeLine>
            </FlexBetween>
            <JobDescription>{description}</JobDescription>
          </>
        ))}
      </JobContentContainer>
    </motion.div>
  </JobWrapper>
);

export default Jobs;
