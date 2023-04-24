import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../../common/components/SectionTitle';
import breakpoints from '../../../common/breakpoints';

type ChildrenProps = {
  children: ReactNode;
};
const JobWrapper = styled.div`
  width: 100%;
`;
const JobContentContainer = styled.div`
  padding: 0 20px;
  ul {
    list-style-type: circle;
    margin-left: 20px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 50px;
  }
`;

const JobCompany: FC<ChildrenProps> = ({ children }) => (
  <h4 className="font-semibold text-base md:text-xl">{children}</h4>
);
const JobDescription: FC<ChildrenProps> = ({ children }) => (
  <p className="mb-4 text-xs md:text-base">{children}</p>
);
const FlexBetween: FC<ChildrenProps> = ({ children }) => (
  <div className="flex flex-row justify-between mb-1 items-center">
    {children}
  </div>
);
const JobTimeLine: FC<ChildrenProps> = ({ children }) => (
  <p className="text-sm md:text-base italic">{children}</p>
);
const Jobs: FC = () => (
  <JobWrapper id="jobs">
    <div className="pt-20 pb-5">
      <SectionTitle>Brief Work History</SectionTitle>
      <JobContentContainer>
        <FlexBetween>
          <JobCompany>Bitwise (Alpha Works)</JobCompany>
          <JobTimeLine>03/2022 - Current</JobTimeLine>
        </FlexBetween>
        <JobDescription>
          I am working as a React Apprentice, where I have been
          developing web applications using React Hooks. I am learning
          how to implement Typescript, Eslinter, Prettier, Redux, and
          Async Thunks into a React web application. I am also
          learning how to use Fetch and Axios to send HTTP request to
          API servers. I am acquiring knowledge of Git, Github,
          Branching and Git Flow. I also am obtaining Angular,
          Wordpress, and .Net experience because I have had to build
          projects with those technologies. I am building a
          multiplayer video game usind React, Phaser, Redux, Express,
          Socket.io and MongoDB. I am creating a social media web
          application using React, Redux, Express, AWS, Socket.io and
          MongoDB.
        </JobDescription>
        <FlexBetween>
          <JobCompany>Cash Offers LLC</JobCompany>
          <JobTimeLine>01/2022 - 03/2022</JobTimeLine>
        </FlexBetween>
        <JobDescription>
          I worked as a Executive Assistant, where I assisted with the
          day-to-day operations. I oversaw the Accounting System via
          QuickBooks. I assisted the real estate agents contact
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
          with the accounts payable on a daily basis. I assisted with
          weekly check runs. I oversaw the orders put in our system. I
          oversaw the filing system for the accounts payable. I
          balanced the credit cards weekly.
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
          ensured bills were paid and up to date. I assisted with the
          accounts receivable, ensuring that the company got paid on
          time, if a payment was overdue I would contact the client to
          ensure the company got paid within a reasonable amount of
          time.
        </JobDescription>
      </JobContentContainer>
      <SectionTitle>Jobs I am interested in</SectionTitle>
      <JobContentContainer>
        <ul>
          <li>React Developer</li>
          <li>Angular Developer</li>
          <li>Software Developer</li>
          <li>Django Developer</li>
          <li>.Net Developer</li>
          <li>Front End Developer</li>
          <li>UI/UX Designer</li>
          <li>Video Game Developer</li>
          <li>React Native Developer</li>
        </ul>
      </JobContentContainer>
    </div>
  </JobWrapper>
);

export default Jobs;
