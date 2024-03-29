import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { FcWorkflow } from 'react-icons/fc';
import SectionTitle from '../../common/style/SectionTitle';
import UseDisplayServerError from '../../common/hooks/UseDisplayServerError';
import LoadingData from '../../common/components/LoadingData';
import { useGetJobsQuery } from './services/JobsApi';

const JobWrapper = styled.div`
  width: 100%;
  background-color: #28282b;
  flex-grow: 1;
`;

const Jobs: FC = () => {
  const { isLoading, error, data } = useGetJobsQuery();
  UseDisplayServerError(error);
  if (isLoading) return <LoadingData text="Loading Jobs" />;
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
            [...data]
              .sort((a, b) => {
                const [aMonth, aYear] = a.startDate.split('/');
                const [bMonth, bYear] = b.startDate.split('/');
                const aDate = new Date(`${aMonth}/01/${aYear}`);
                const bDate = new Date(`${bMonth}/01/${bYear}`);
                return bDate.getTime() - aDate.getTime();
              })
              .map((job) => (
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
