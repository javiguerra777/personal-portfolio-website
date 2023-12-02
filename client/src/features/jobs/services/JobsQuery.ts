import { gql } from '@apollo/client';

export const JOBS_QUERY = gql`
  query {
    jobs {
      _id
      company
      description
      workDates
      startDate
      endDate
    }
  }
`;

export default {};
