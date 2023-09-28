import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { nanoid } from '@reduxjs/toolkit';
import { FcWorkflow } from 'react-icons/fc';
import SectionTitle from '../../common/style/SectionTitle';
import NavBar from '../../common/components/NavBar';
import MyJobs from './services/MyJobs';

const JobWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #28282b;
  overflow: auto;
`;
const Jobs: FC = () => (
  <JobWrapper>
    <NavBar />
    <motion.div
      className="pt-10 pb-40 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <SectionTitle>Work History</SectionTitle>
      <VerticalTimeline>
        {MyJobs.map(({ company, description, workDates }) => (
          <VerticalTimelineElement
            key={nanoid()}
            className="vertical-timeline-element--work text-black"
            dateClassName="text-white"
            date={workDates}
            icon={<FcWorkflow />}
            iconClassName="bg-blue-200"
          >
            <h4 className="font-semibold">{company}</h4>
            <p className="italic">{workDates}</p>
            <p>{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  </JobWrapper>
);

export default Jobs;
