import React, { FC, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionTitle from '../../../common/style/SectionTitle';
import breakpoints from '../../../common/breakpoints';
import UseIsInViewport from '../../../common/hooks/UseIsInViewPort';
import { useAppDispatch } from '../../../app/store/hooks';
import { switchActiveView } from '../../../app/store/ViewSlice';

type ChildrenProps = {
  children: ReactNode;
};
const JobWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #28282b;
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
const Jobs: FC = () => {
  const dispatch = useAppDispatch();
  const jobRef = useRef<HTMLDivElement>(null);
  const inViewPort = UseIsInViewport(jobRef);
  useEffect(() => {
    if (inViewPort) {
      dispatch(switchActiveView('jobs'));
    }
  }, [inViewPort, dispatch]);
  return (
    <JobWrapper id="jobs">
      <motion.div
        className="pt-20 pb-40 flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <SectionTitle ref={jobRef}>Brief Work History</SectionTitle>
        <JobContentContainer>
          <FlexBetween>
            <JobCompany>Bitwise (Alpha Works)</JobCompany>
            <JobTimeLine>03/2022 - Current</JobTimeLine>
          </FlexBetween>
          <JobDescription>
            I am worked as a Software Engineer, where I developed web
            applications using React Hooks. I learned how to implement
            Typescript, Eslinter, Prettier, Redux, and Async Thunks
            into a React web application. I learned how to use Fetch
            and Axios to send HTTP request to API servers. I acquired
            knowledge of Git, Github, Branching and Git Flow. I also
            am obtaining Angular, Wordpress, and .Net experience
            because I have had to build projects with those
            technologies. I built a multiplayer video game using
            React, Phaser, Redux, Express, Socket.io and MongoDB. I am
            creating a social media web application using React,
            Redux, Express, AWS, Socket.io and MongoDB.
          </JobDescription>
          <FlexBetween>
            <JobCompany>Cash Offers LLC</JobCompany>
            <JobTimeLine>01/2022 - 03/2022</JobTimeLine>
          </FlexBetween>
          <JobDescription>
            I worked as a Executive Assistant, where I assisted with
            the day-to-day operations. I oversaw the Accounting System
            via QuickBooks. I assisted the real estate agents contact
            potential clients, follow up with existing clients, and
            conduct research on the areas they were attempting to make
            sales in. I oversaw the accounts payable, accounts
            receivable, and conducted check runs when necessary.
          </JobDescription>
          <FlexBetween>
            <JobCompany>Grower Direct Nut</JobCompany>
            <JobTimeLine> 12/2021 - 01/2022</JobTimeLine>
          </FlexBetween>
          <JobDescription>
            I worked as an Accounts Payable Analyst, where I assisted
            with the accounts payable on a daily basis. I assisted
            with weekly check runs. I oversaw the orders put in our
            system. I oversaw the filing system for the accounts
            payable. I balanced the credit cards weekly.
          </JobDescription>
          <FlexBetween>
            <JobCompany>Robert Half</JobCompany>
            <JobTimeLine> 08/2021 - 12/2021</JobTimeLine>
          </FlexBetween>
          <JobDescription>
            I worked as an Accounting Assistant, where I assisted with
            Accounting related activities on a daily basis. I assisted
            with the Accounts Payable, ensuring the account on
            QuickBooks was balanced to the account from the bank. I
            ensured bills were paid and up to date. I assisted with
            the accounts receivable, ensuring that the company got
            paid on time, if a payment was overdue I would contact the
            client to ensure the company got paid within a reasonable
            amount of time.
          </JobDescription>
        </JobContentContainer>
      </motion.div>
    </JobWrapper>
  );
};

export default Jobs;
