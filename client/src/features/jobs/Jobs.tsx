import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { FcWorkflow } from 'react-icons/fc';
import { useQuery, gql } from '@apollo/client';
import SectionTitle from '../../common/style/SectionTitle';
import { JOBS_QUERY } from './services/JobsQuery';

const JobWrapper = styled.div`
  width: 100%;
  background-color: #28282b;
  flex-grow: 1;
`;

interface Job {
  _id: string;
  company: string;
  workDates: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface JobsData {
  jobs: Job[];
}
const Jobs: FC = () => {
  const { loading, error, data } = useQuery<JobsData>(JOBS_QUERY);
  if (loading) return <p>Loading...</p>;
  return (
    <JobWrapper>
      <motion.div
        className="pt-10 pb-40 flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Work History</SectionTitle>
        <VerticalTimeline>
          {data !== undefined &&
            data.jobs.map((job) => (
              <VerticalTimelineElement
                key={job._id}
                className="vertical-timeline-element--work text-black"
                dateClassName="text-white"
                date={job.workDates}
                icon={<FcWorkflow />}
                iconClassName="bg-blue-200"
              >
                <h4 className="font-semibold">{job.company}</h4>
                <p className="italic">{job.workDates}</p>
                <p>{job.description}</p>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </motion.div>
    </JobWrapper>
  );
};

export default Jobs;